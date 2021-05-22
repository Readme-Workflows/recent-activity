/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const core = require("@actions/core");

const parseYaml = require("./functions/parseYaml.js");

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
  comments: "💬 Commented on {ID} in {REPO}",
  issue_opened: "❗️ Opened issue {ID} in {REPO}",
  issue_closed: "✔️ Closed issue {ID} in {REPO}",
  pr_opened: "💪 Opened PR {ID} in {REPO}",
  pr_closed: "❌ Closed PR {ID} in {REPO}",
  pr_merged: "🎉 Merged PR {ID} in {REPO}",
  create_repo: "📔 Created new repository {REPO}",
  fork_repo: "🔱 Forked {FORK} from {REPO}",
  wiki_create: "📖 Created new wiki page {WIKI} in {REPO}",
  added_member: "🤝 Became collaborator on {REPO}",
  review_approved: "👍 Approved {ID} in {REPO}",
  changes_requested: "🔴 Requested changes in {ID} in {REPO}",
  new_release: "✌️ Released {ID} in {REPO}",
  new_star: "⭐ Starred {REPO}",
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
conf.disabled_events.forEach((event) => {
  disabled.push(event.trim().toLowerCase());
});

conf.disabled_events = disabled;

const urlPrefix = "https://github.com";

module.exports = {
  ...conf,
  urlPrefix,
};
