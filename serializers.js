/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const { DISABLE_EVENTS } = require("./config");

const IssueCommentEvent = require("./events/IssueCommentEvent");
const IssuesEvent = require("./events/IssuesEvent");
const PullRequestEvent = require("./events/PullRequestEvent");

const serializers = {};

if (!DISABLE_EVENTS.includes("comments")) {
  serializers.IssueCommentEvent = IssueCommentEvent;
}

if (!DISABLE_EVENTS.includes("issues")) {
  serializers.IssuesEvent = IssuesEvent;
}

if (!DISABLE_EVENTS.includes("pr")) {
  serializers.PullRequestEvent = PullRequestEvent;
}

module.exports = serializers;
