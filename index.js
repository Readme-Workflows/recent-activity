/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 Abhishek Joshi and Puneet Gopinath
 */

const core = require("@actions/core");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const { Toolkit } = require("actions-toolkit");
var dateFormat = require("dateformat");

// Get config inputs
const GH_USERNAME = core.getInput("GH_USERNAME");
const COMMIT_MSG = core.getInput("COMMIT_MSG");
const MAX_LINES = core.getInput("MAX_LINES");
const README_FILE = core.getInput("README_FILE");
const COMMENTS_ACTIVITY = core.getInput("COMMENTS_ACTIVITY");
const ISSUE_OPENED = core.getInput("ISSUE_OPENED");
const ISSUE_CLOSED = core.getInput("ISSUE_CLOSED");
const PR_OPENED = core.getInput("PR_OPENED");
const PR_CLOSED = core.getInput("PR_CLOSED");
const PR_MERGED = core.getInput("PR_MERGED");
const URL_TEXT = core.getInput("URL_TEXT");
const TIMEZONE_OFFSET = core.getInput("TIMEZONE_OFFSET");
const DATE_STRING = core.getInput("DATE_STRING");
const DATE_FORMAT = core.getInput("DATE_FORMAT");

let DISABLE_EVENTS = core.getInput("DISABLE_EVENTS").toLowerCase().split(",");
DISABLE_EVENTS = DISABLE_EVENTS.map((event) => event.trim());

/**
 * Returns the sentence case representation
 * @param {String} str - the string
 *
 * @returns {String}
 */

const capitalize = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);

const urlPrefix = "https://github.com";

/**
 * Returns a URL in markdown format for PR's and issues
 * @param {Object | String} item - holds information concerning the issue/PR
 *
 * @returns {String}
 */

const appendDate = (fullContent) => {
  let dateStartIdx = fullContent.findIndex(
    (content) => content.trim() === "<!--RECENT_ACTIVITY:last_update-->"
  );

  if (dateStartIdx !== -1) {
    let dateEndIdx = fullContent.findIndex(
      (content, index) =>
        content.trim() === "<!--RECENT_ACTIVITY:last_update_end-->" &&
        index > dateStartIdx
    );

    let timezone = TIMEZONE_OFFSET.replace("GMT", "").split(":");
    let offset;

    tz_hours = parseInt(timezone[0].trim());

    if (timezone.length > 1) {
      offset = tz_hours * 60 + parseInt(timezone[1].trim());
    } else {
      if (tz_hours > 99) {
        offset = Math.floor(tz_hours / 100) * 60 + (tz_hours % 100);
      } else {
        offset = tz_hours * 60;
      }
    }

    const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    let finalDate = new Date(utc + offset * 60000);

    finalDateString = DATE_STRING.replace(
      "{DATE}",
      dateFormat(finalDate, DATE_FORMAT)
    );

    if (dateEndIdx === -1) {
      fullContent.splice(
        dateStartIdx + 1,
        0,
        finalDateString,
        "<!--RECENT_ACTIVITY:last_update_end-->"
      );
    } else {
      fullContent.splice(
        dateStartIdx + 1,
        dateEndIdx - dateStartIdx - 1,
        finalDateString
      );
    }
  }
  return fullContent;
};

const to2Digit = (entity) => {
  if (entity > 9) {
    return entity + "";
  } else {
    return "0" + entity;
  }
};

const makeCustomUrl = (item, type) => {
  let url;
  switch (type.toLowerCase()) {
    case "issue_open":
    case "issue_close":
      url =
        `[` +
        URL_TEXT.replace(/{ID}/g, `#${item.payload.issue.number}`).replace(
          /{REPO}/g,
          item.repo.name
        ) +
        `](${item.payload.issue.html_url})`;
      break;
    case "comment":
      url =
        `[` +
        URL_TEXT.replace(/{ID}/g, `#${item.payload.issue.number}`).replace(
          /{REPO}/g,
          item.repo.name
        ) +
        `](${item.payload.comment.html_url})`;
      break;
    case "pr_open":
    case "pr_close":
    case "pr_merge":
      url =
        `[` +
        URL_TEXT.replace(
          /{ID}/g,
          `#${item.payload.pull_request.number}`
        ).replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.pull_request.html_url})`;
      break;
    default:
      tools.exit.failure("Failed while creating the url string.");
      break;
  }
  return url;
};

const toUrlFormat = (item, type) => {
  let url;
  if (typeof item === "object") {
    switch (type.toLowerCase()) {
      case "issue_open":
      case "issue_close":
        url = `[#${item.payload.issue.number}](${item.payload.issue.html_url})`;
        break;
      case "comment":
        url = `[#${item.payload.issue.number}](${item.payload.comment.html_url})`;
        break;
      case "pr_open":
      case "pr_close":
      case "pr_merge":
        url = `[#${item.payload.pull_request.number}](${item.payload.pull_request.html_url})`;
        break;
      default:
        tools.exit.failure("Failed while creating the url format.");
        break;
    }
    return url;
  }
  return `[${item}](${urlPrefix}/${item})`;
};

/**
 * Execute shell command
 * @param {String} cmd - root command
 * @param {String[]} args - args to be passed along with
 *
 * @returns {Promise<void>}
 */

const exec = (cmd, args = []) =>
  new Promise((resolve, reject) => {
    const app = spawn(cmd, args, { stdio: "pipe" });
    let stdout = "";
    app.stdout.on("data", (data) => {
      stdout = data;
    });
    app.on("close", (code) => {
      if (code !== 0 && !stdout.includes("nothing to commit")) {
        err = new Error(`Invalid status code: ${code}`);
        err.code = code;
        return reject(err);
      }
      return resolve(code);
    });
    app.on("error", reject);
  });

/**
 * Make a commit
 *
 * @returns {Promise<void>}
 */

const commitFile = async () => {
  await exec("git", [
    "config",
    "--global",
    "user.email",
    "41898282+github-actions[bot]@users.noreply.github.com",
  ]);
  await exec("git", ["config", "--global", "user.name", "readme-bot"]);
  await exec("git", ["add", README_FILE]);
  await exec("git", ["commit", "-m", COMMIT_MSG]);
  await exec("git", ["push"]);
};

const serializers = {};

if (!DISABLE_EVENTS.includes("comments")) {
  serializers.IssueCommentEvent = (item) => {
    if (item.payload.action === "created") {
      return COMMENTS_ACTIVITY.replace(/{ID}/g, toUrlFormat(item, "comment"))
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "comment"))
        .replace(/{URL}/g, makeCustomUrl(item, "comment"));
    } else {
      return "";
    }
  };
  // return `🗣 Commented on ${toUrlFormat(item)} in ${toUrlFormat(
  //   item.repo.name
  // )}`;
}

if (!DISABLE_EVENTS.includes("issues")) {
  serializers.IssuesEvent = (item) => {
    if (item.payload.action === "opened") {
      return ISSUE_OPENED.replace(/{ID}/g, toUrlFormat(item, "issue_open"))
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "issue_open"))
        .replace(/{URL}/g, makeCustomUrl(item, "issue_open"));
    } else if (item.payload.action === "closed") {
      return ISSUE_CLOSED.replace(/{ID}/g, toUrlFormat(item, "issue_close"))
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "issue_close"))
        .replace(/{URL}/g, makeCustomUrl(item, "issue_close"));
    }
    // else {
    //   return `❗️ ${capitalize(item.payload.action)} issue ${toUrlFormat(
    //     item
    //   )} in ${toUrlFormat(item.repo.name)}`;
    // }
    else {
      return "";
    }
  };
}

if (!DISABLE_EVENTS.includes("pr")) {
  serializers.PullRequestEvent = (item) => {
    if (item.payload.action === "opened") {
      return PR_OPENED.replace(/{ID}/g, toUrlFormat(item, "pr_open"))
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_open"))
        .replace(/{URL}/g, makeCustomUrl(item, "pr_open"));
    } else if (item.payload.pull_request.merged) {
      return PR_MERGED.replace(/{ID}/g, toUrlFormat(item, "pr_merge"))
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_merge"))
        .replace(/{URL}/g, makeCustomUrl(item, "pr_merge"));
    } else if (
      item.payload.action === "closed" &&
      !item.payload.pull_request.merged
    ) {
      return PR_CLOSED.replace(/{ID}/g, toUrlFormat(item, "pr_close"))
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_close"))
        .replace(/{URL}/g, makeCustomUrl(item, "pr_close"));
    } else {
      return "";
    }

    // if (item.payload.action === "opened") {
    //   return;
    // } else {
    //   const emoji = item.payload.action === "opened" ? "💪" : "❌";
    //   const line = item.payload.pull_request.merged
    //     ? "🎉 Merged"
    //     : `${emoji} ${capitalize(item.payload.action)}`;
    //   return `${line} PR ${toUrlFormat(item)} in ${toUrlFormat(
    //     item.repo.name
    //   )}`;
    // }
  };
}

Toolkit.run(
  async (tools) => {
    // Get the user's public events
    tools.log.debug(`Getting activity for ${GH_USERNAME}`);
    const events = await tools.github.activity.listPublicEventsForUser({
      username: GH_USERNAME,
      per_page: 100,
    });
    tools.log.debug(`${events.data.length} events found for ${GH_USERNAME}.`);

    let content = events.data
      // Filter out any boring activity
      .filter((event) => serializers.hasOwnProperty(event.type));

    let temp_content = [];

    for (i = 0; i < content.length; i++) {
      let event_string = serializers[content[i].type](content[i]);

      if (event_string !== "") {
        temp_content.push(event_string);
      }
      if (temp_content.length == MAX_LINES) {
        break;
      }
    }

    tools.log.debug(temp_content);

    content = temp_content;

    // We only have five lines to work with
    // .slice(0, MAX_LINES)
    // // Call the serializer to construct a string
    // .map((item) => serializers[item.type](item));

    let readmeContent;

    try {
      readmeContent = fs.readFileSync(README_FILE, "utf-8").split("\n");
    } catch (err) {
      return tools.exit.failure(`Couldn't find the file named ${README_FILE}`);
    }

    // Find the index corresponding to <!--RECENT_ACTIVITY:start--> comment
    let startIdx = readmeContent.findIndex(
      (content) => content.trim() === "<!--RECENT_ACTIVITY:start-->"
    );

    // Early return in case the <!--RECENT_ACTIVITY:start--> comment was not found
    if (startIdx === -1) {
      return tools.exit.failure(
        "Couldn't find the <!--RECENT_ACTIVITY:start--> comment. Exiting!"
      );
    }

    // Find the index corresponding to <!--RECENT_ACTIVITY:end--> comment
    const endIdx = readmeContent.findIndex(
      (content) => content.trim() === "<!--RECENT_ACTIVITY:end-->"
    );

    if (!content.length) {
      tools.exit.success("No events found. Leaving readme unchanged.");
    }

    if (content.length < MAX_LINES) {
      tools.log.info(`Found less than ${MAX_LINES} activities`);
    }

    if (startIdx !== -1 && endIdx === -1) {
      // Add one since the content needs to be inserted just after the initial comment
      startIdx++;
      content.forEach((line, idx) =>
        readmeContent.splice(startIdx + idx, 0, `${idx + 1}. ${line}`)
      );

      // Append <!--RECENT_ACTIVITY:end--> comment
      readmeContent.splice(
        startIdx + content.length,
        0,
        "<!--RECENT_ACTIVITY:end-->"
      );

      readmeContent = appendDate(readmeContent);

      // Update README
      fs.writeFileSync(README_FILE, readmeContent.join("\n"));

      // Commit to the remote repository
      try {
        await commitFile();
      } catch (err) {
        tools.log.debug("Something went wrong");
        return tools.exit.failure(err);
      }
      tools.exit.success("Wrote to README");
    }

    const oldContent = readmeContent.slice(startIdx + 1, endIdx).join("\n");
    const newContent = content
      .map((line, idx) => `${idx + 1}. ${line}`)
      .join("\n");

    // if (oldContent.trim() === newContent.trim())
    //   tools.exit.success("No changes detected.");

    startIdx++;

    // Recent GitHub Activity content between the comments
    const readmeActivitySection = readmeContent.slice(startIdx, endIdx);
    if (!readmeActivitySection.length) {
      content.some((line, idx) => {
        // User doesn't have 5 public events
        if (!line) {
          return true;
        }
        readmeContent.splice(startIdx + idx, 0, `${idx + 1}. ${line}`);
      });
      tools.log.success("Wrote to README");
    } else {
      // It is likely that a newline is inserted after the <!--RECENT_ACTIVITY:start--> comment (code formatter)
      let count = 0;

      readmeActivitySection.some((line, idx) => {
        // User doesn't have 5 public events
        if (!content[count]) {
          return true;
        }
        if (line !== "") {
          readmeContent[startIdx + idx] = `${count + 1}. ${content[count]}`;
          count++;
        }
      });
      tools.log.success("Updated README with the recent activity");
    }

    readmeContent = appendDate(readmeContent);

    // Update README
    fs.writeFileSync(README_FILE, readmeContent.join("\n"));

    // Commit to the remote repository
    try {
      await commitFile();
    } catch (err) {
      tools.log.debug("Something went wrong");
      return tools.exit.failure(err);
    }
    tools.exit.success("Pushed to remote repository");
  },
  {
    event: ["schedule", "workflow_dispatch"],
    secrets: ["GITHUB_TOKEN"],
  }
);
