/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation
 */

const config = require("./config");
const makeCustomUrl = require("./functions/makeCustomUrl");
const toUrlFormat = require("./functions/toUrlFormat");

const serializers = {};

if (!config.DISABLE_EVENTS.includes("comments")) {
  serializers.IssueCommentEvent = (item) => {
    if (item.payload.action === "created") {
      return config.COMMENTS_ACTIVITY.replace(
        /{ID}/g,
        toUrlFormat(item, "comment")
      )
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

if (!config.DISABLE_EVENTS.includes("issues")) {
  serializers.IssuesEvent = (item) => {
    if (item.payload.action === "opened") {
      return config.ISSUE_OPENED.replace(
        /{ID}/g,
        toUrlFormat(item, "issue_open")
      )
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "issue_open"))
        .replace(/{URL}/g, makeCustomUrl(item, "issue_open"));
    } else if (item.payload.action === "closed") {
      return config.ISSUE_CLOSED.replace(
        /{ID}/g,
        toUrlFormat(item, "issue_close")
      )
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

if (!config.DISABLE_EVENTS.includes("pr")) {
  serializers.PullRequestEvent = (item) => {
    if (item.payload.action === "opened") {
      return config.PR_OPENED.replace(/{ID}/g, toUrlFormat(item, "pr_open"))
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_open"))
        .replace(/{URL}/g, makeCustomUrl(item, "pr_open"));
    } else if (item.payload.pull_request.merged) {
      return config.PR_MERGED.replace(/{ID}/g, toUrlFormat(item, "pr_merge"))
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_merge"))
        .replace(/{URL}/g, makeCustomUrl(item, "pr_merge"));
    } else if (
      item.payload.action === "closed" &&
      !item.payload.pull_request.merged
    ) {
      return config.PR_CLOSED.replace(/{ID}/g, toUrlFormat(item, "pr_close"))
        .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_close"))
        .replace(/{URL}/g, makeCustomUrl(item, "pr_close"));
    } else {
      return "";
    }
  };
}

module.exports = serializers;
