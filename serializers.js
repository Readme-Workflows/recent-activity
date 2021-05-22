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
const ForkEvent = require("./events/ForkEvent");
const GollumEvent = require("./events/GollumEvent");
const MemberEvent = require("./events/MemberEvent");
const PullRequestReviewEvent = require("./events/PullRequestReviewEvent");
const ReleaseEvent = require("./events/ReleaseEvent");
const WatchEvent = require("./events/WatchEvent");

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

if (!DISABLE_EVENTS.includes("fork")) {
  serializers.ForkEvent = ForkEvent;
}

if (!DISABLE_EVENTS.includes("wiki")) {
  serializers.GollumEvent = GollumEvent;
}

if (!DISABLE_EVENTS.includes("member")) {
  serializers.MemberEvent = MemberEvent;
}

if (!DISABLE_EVENTS.includes("review")) {
  serializers.PullRequestReviewEvent = PullRequestReviewEvent;
}

if (!DISABLE_EVENTS.includes("release")) {
  serializers.ReleaseEvent = ReleaseEvent;
}

if (!DISABLE_EVENTS.includes("star")) {
  serializers.WatchEvent = WatchEvent;
}

module.exports = serializers;
