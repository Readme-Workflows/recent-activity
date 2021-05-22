/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const { disable_events } = require("./config");

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

if (!disable_events.includes("comments")) {
  serializers.IssueCommentEvent = IssueCommentEvent;
  serializers.CommitCommentEvent = CommitCommentEvent;
  serializers.PullRequestReviewCommentEvent = PullRequestReviewCommentEvent;
}

if (!disable_events.includes("issues")) {
  serializers.IssuesEvent = IssuesEvent;
}

if (!disable_events.includes("pr")) {
  serializers.PullRequestEvent = PullRequestEvent;
}

if (!disable_events.includes("create_repo")) {
  serializers.CreateEvent = CreateEvent;
}

if (!disable_events.includes("fork")) {
  serializers.ForkEvent = ForkEvent;
}

if (!disable_events.includes("wiki")) {
  serializers.GollumEvent = GollumEvent;
}

if (!disable_events.includes("member")) {
  serializers.MemberEvent = MemberEvent;
}

if (!disable_events.includes("review")) {
  serializers.PullRequestReviewEvent = PullRequestReviewEvent;
}

if (!disable_events.includes("release")) {
  serializers.ReleaseEvent = ReleaseEvent;
}

if (!disable_events.includes("star")) {
  serializers.WatchEvent = WatchEvent;
}

module.exports = serializers;
