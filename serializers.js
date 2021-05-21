/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const { DISABLE_EVENTS } = require("./config");

// Events
const IssueCommentEvent = require("./events/IssueCommentEvent");
const CommitCommentEvent = require("./events/CommitCommentEvent");
const PullRequestReviewCommentEvent = require("./events/PullRequestReviewCommentEvent");
const IssuesEvent = require("./events/IssuesEvent");
const PullRequestEvent = require("./events/PullRequestEvent");
const CreateEvent = require("./events/CreateEvent");

const serializers = {};

if (!DISABLE_EVENTS.includes("comments")) {
  serializers.IssueCommentEvent = IssueCommentEvent;
  serializers.CommitCommentEvent = CommitCommentEvent;
  serializers.PullRequestReviewCommentEvent = PullRequestReviewCommentEvent;
}

if (!DISABLE_EVENTS.includes("issues")) {
  serializers.IssuesEvent = IssuesEvent;
}

if (!DISABLE_EVENTS.includes("pr")) {
  serializers.PullRequestEvent = PullRequestEvent;
}

if (!DISABLE_EVENTS.includes("create_repo")) {
  serializers.CreateEvent = CreateEvent;
}

module.exports = serializers;
