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
const CREATE_REPO = core.getInput("CREATE_REPO");
const FORK_REPO = core.getInput("FORK_REPO");
const WIKI_CREATE = core.getInput("WIKI_CREATE");
const ADDED_MEMBER = core.getInput("ADDED_MEMBER");
const REVIEW_APPROVED = core.getInput("REVIEW_APPROVED");
const CHANGES_REQUESTED = core.getInput("CHANGES_REQUESTED");
const RELEASE = core.getInput("RELEASE");
const STAR = core.getInput("STAR");

let DISABLE_EVENTS = core.getInput("DISABLE_EVENTS").toLowerCase().split(",");
DISABLE_EVENTS = DISABLE_EVENTS.map((event) => event.trim());

const urlPrefix = "https://github.com";

module.exports = {
  ...conf,
  urlPrefix,
};
