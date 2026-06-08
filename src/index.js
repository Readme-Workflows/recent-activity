/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const fs = require("fs");
const github = require("@actions/github");
const core = require("@actions/core");

const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

// configuration
const { username, readme_file, max_lines, line_prefix } = require("./config");

// functions
const appendDate = require("./functions/appendDate");
const commitFile = require("./functions/commitFile");
const filterContent = require("./functions/filterContent");

// accepted events
const serializers = require("./serializers");

async function run() {
  // Get the user's public events
  core.debug(`Getting activity for ${username}`);
  const { data: events } = await octokit.rest.activity.listPublicEventsForUser({
    username: username,
    per_page: 100,
  });

  core.debug(JSON.stringify(events[0]));

  core.debug(`${events.length} events found for ${username}.`);

  let eventData = events
    // Filter out any boring activity
    .filter((event) => serializers.hasOwnProperty(event.type));

  let content = filterContent(eventData);

  let readmeContent;

  try {
    readmeContent = fs.readFileSync(readme_file, "utf-8").split("\n");
  } catch (err) {
    return core.setFailed(`Couldn't find the file named ${readme_file}`);
  }

  // Find the index corresponding to <!--RECENT_ACTIVITY:start--> comment
  let startIdx = readmeContent.findIndex(
    (content) => content.trim() === "<!--RECENT_ACTIVITY:start-->"
  );

  // Early return in case the <!--RECENT_ACTIVITY:start--> comment was not found
  if (startIdx === -1) {
    return core.setFailed(
      "Couldn't find the <!--RECENT_ACTIVITY:start--> comment. Exiting!"
    );
  }

  // Find the index corresponding to <!--RECENT_ACTIVITY:end--> comment
  const endIdx = readmeContent.findIndex(
    (content) => content.trim() === "<!--RECENT_ACTIVITY:end-->"
  );

  if (!content.length) {
    return core.setOutput("No events found. Leaving readme unchanged.");
  }

  if (content.length < max_lines) {
    core.info(`Found less than ${max_lines} activities`);
  }

  if (startIdx !== -1 && endIdx === -1) {
    // Add one since the content needs to be inserted just after the initial comment
    startIdx++;
    content.forEach((line, idx) =>
      readmeContent.splice(
        startIdx + idx,
        0,
        `${line_prefix.replace(/{NUM}/g, idx + 1)}${line}<br>`
      )
    );

    // Append <!--RECENT_ACTIVITY:end--> comment
    readmeContent.splice(
      startIdx + content.length,
      0,
      "<!--RECENT_ACTIVITY:end-->"
    );

    readmeContent = appendDate(readmeContent);

    // Update README
    fs.writeFileSync(readme_file, readmeContent.join("\n"));

    // Commit to the remote repository
    try {
      await commitFile();
    } catch (err) {
      core.debug("Something went wrong");
      return core.setFailed(err);
    }
    core.info("Wrote to README");
  }

  startIdx++;

  // Recent GitHub Activity content between the comments
  const readmeActivitySection = readmeContent.slice(startIdx, endIdx);
  if (readmeActivitySection.length) {
    // Remove existing recent activity lines
    readmeContent.splice(startIdx, endIdx - startIdx);
  }
  content.some((line, idx) => {
    // User doesn't have 5 public events
    if (!line) {
      return true;
    }
    readmeContent.splice(
      startIdx + idx,
      0,
      `${line_prefix.replace(/{NUM}/g, idx + 1)}${line}<br>`
    );
  });
  readmeContent = appendDate(readmeContent);
  core.info("Updated README with the recent activity");

  // Update README
  fs.writeFileSync(readme_file, readmeContent.join("\n"));

  // Commit to the remote repository
  try {
    await commitFile();
  } catch (err) {
    core.debug("Something went wrong");
    return core.setFailed(err);
  }
  core.info("Pushed to remote repository");
}

run();