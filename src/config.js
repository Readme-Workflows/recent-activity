/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const core = require("@actions/core");

const parseYaml = require("./functions/parseYaml.js");
const eventList = require("./eventList.js");

const defaultVals = {
  username: core.getInput("GH_USERNAME"),
  commit_msg: "⚡ Update README with the recent activity",
  max_lines: 5,
  readme_file: "./README.md",
  disabled_events: [],
  url_text: "{REPO}{ID}",
  date: {
    timezone: "0",
    text: "Last Updated: {DATE}",
    format: "dddd, mmmm dS, yyyy, h:MM:ss TT",
  },
  ignored_repos: [],
  comments: "💬 Commented on {ID} in {REPO}",
  push: "⬆️ Pushed {AMOUNT} commit(s) to {REPO}",
  issue_opened: "❗️ Opened issue {ID} in {REPO}",
  issue_closed: "✔️ Closed issue {ID} in {REPO}",
  pr_opened: "💪 Opened PR {ID} in {REPO}",
  pr_closed: "❌ Closed PR {ID} in {REPO}",
  pr_merged: "🎉 Merged PR {ID} in {REPO}",
  create_repo: "📔 Created new repository {REPO}",
  fork_repo: "🔱 Forked {FORK} from {REPO}",
  wiki_create: "📖 Created new wiki page {WIKI} in {REPO}",
  added_member: "🤝 Became collaborator on {REPO}",
  changes_approved: "👍 Approved {ID} in {REPO}",
  changes_requested: "🔴 Requested {AMOUNT} change(s) for {ID} in {REPO}",
  new_release: "✌️ Released {ID} in {REPO}",
  new_star: "⭐ Starred {REPO}",
  commit_name: "readme-bot",
  commit_email: "41898282+github-actions[bot]@users.noreply.github.com",
  line_prefix: "{NUM}. ",
};

const userVals = parseYaml(core.getInput("CONFIG_FILE"));

if (userVals.settings) {
  userVals.settings.date = { ...defaultVals.date, ...userVals.settings.date };
}

let conf = {
  ...defaultVals,
  ...userVals.settings,
  ...userVals.messages,
};

let disabled = [];

try {
  if (conf.whitelisted_events) {
    eventList.forEach((event) => {
      if (!conf.whitelisted_events.includes(event)) {
        disabled.push(event.trim().toLowerCase());
      }
    });
  } else if (conf.disabled_events) {
    conf.disabled_events.forEach((event) => {
      disabled.push(event.trim().toLowerCase());
    });
  }
} catch (e) {
  console.log("Config file error! Using default config.");
  console.log("Error: " + e);
}

conf.disabled_events = disabled;

module.exports = conf;
