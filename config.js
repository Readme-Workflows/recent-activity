/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const core = require("@actions/core");

const parseYaml = require("./functions/parseYaml.js");

const defaultVals = {
    "GH_USERNAME": core.getInput("GH_USERNAME"),
    "COMMIT_MSG": ":zap: Update README with the recent activity",
    "MAX_LINES": 5,
    "README_FILE": "./README.md",
    "DISABLE_EVENTS": "",
    "URL_TEXT": "{REPO}{ID}",
    "COMMENTS_ACTIVITY": "💬 Commented on {ID} in {REPO}",
    "ISSUE_OPENED": "❗️ Opened issue {ID} in {REPO}",
    "ISSUE_CLOSED": "✔️ Closed issue {ID} in {REPO}",
    "PR_OPENED": "💪 Opened PR {ID} in {REPO}",
    "PR_CLOSED": "❌ Closed PR {ID} in {REPO}",
    "PR_MERGED": "🎉 Merged PR {ID} in {REPO}",
    "CREATE_REPO": "📔 Created new repository {REPO}",
    "FORK_REPO": "🔱 Forked {FORK} from {REPO}",
    "WIKI_CREATE": "📖 Created new wiki page {WIKI} in {REPO}",
    "ADDED_MEMBER": "🤝 Became collaborator on {REPO}",
    "REVIEW_APPROVED": "👍 Approved {ID} in {REPO}",
    "CHANGES_REQUESTED": "🔴 Requested changes in {ID} in {REPO}",
    "RELEASE": "✌️ Released {ID} in {REPO}",
    "STAR": "⭐ Starred {REPO}",
    "TIMEZONE_OFFSET": "0",
    "DATE_STRING": "Last Updated: {DATE}",
    "DATE_FORMAT": "dddd, mmmm dS, yyyy, h:MM:ss TT"
};

const userVals = parseYaml(core.getInput("CONFIG_FILE"));

let conf = {
    ...defaultVals,
    ...userVals
};

const urlPrefix = "https://github.com";

module.exports = {
  ...conf,
  urlPrefix,
};
