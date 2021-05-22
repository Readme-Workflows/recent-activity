/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const core = require("@actions/core");

const parseYaml = require("./functions/parseYaml.js");

const defaultVals = {
    "gh_username": core.getInput("GH_USERNAME"),
    "commit_msg": ":zap: Update README with the recent activity",
    "max_lines": 5,
    "readme_file": "./README.md",
    "disable_events": "",
    "url_text": "{REPO}{ID}",
    "comments_activity": "💬 Commented on {ID} in {REPO}",
    "issue_opened": "❗️ Opened issue {ID} in {REPO}",
    "issue_closed": "✔️ Closed issue {ID} in {REPO}",
    "pr_opened": "💪 Opened PR {ID} in {REPO}",
    "pr_closed": "❌ Closed PR {ID} in {REPO}",
    "pr_merged": "🎉 Merged PR {ID} in {REPO}",
    "create_repo": "📔 Created new repository {REPO}",
    "fork_repo": "🔱 Forked {FORK} from {REPO}",
    "wiki_create": "📖 Created new wiki page {WIKI} in {REPO}",
    "added_member": "🤝 Became collaborator on {REPO}",
    "review_approved": "👍 Approved {ID} in {REPO}",
    "changes_requested": "🔴 Requested changes in {ID} in {REPO}",
    "new_release": "✌️ Released {ID} in {REPO}",
    "new_star": "⭐ Starred {REPO}",
    "timezone": "0",
    "date_string": "Last Updated: {DATE}",
    "date_format": "dddd, mmmm dS, yyyy, h:MM:ss TT"
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
