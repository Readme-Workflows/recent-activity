/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const { disabled_events } = require("./config");

// Events
const IssueCommentEvent = require("./events/IssueCommentEvent");
const CommitCommentEvent = require("./events/CommitCommentEvent");
const PullRequestReviewCommentEvent = require("./events/PullRequestReviewCommentEvent");
const PushEvent = require("./events/PushEvent");
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

if (!disabled_events.includes("comments")) {
  serializers.IssueCommentEvent = IssueCommentEvent;
  serializers.CommitCommentEvent = CommitCommentEvent;
  serializers.PullRequestReviewCommentEvent = PullRequestReviewCommentEvent;
}

if (!disabled_events.includes("push")) {
  serializers.PushEvent = PushEvent;
}

if (!disabled_events.includes("issues")) {
  serializers.IssuesEvent = IssuesEvent;
}

if (!disabled_events.includes("pr")) {
  serializers.PullRequestEvent = PullRequestEvent;
}

if (!disabled_events.includes("create_repo")) {
  serializers.CreateEvent = CreateEvent;
}

if (!disabled_events.includes("fork")) {
  serializers.ForkEvent = ForkEvent;
}

if (!disabled_events.includes("wiki")) {
  serializers.GollumEvent = GollumEvent;
}

if (!disabled_events.includes("member")) {
  serializers.MemberEvent = MemberEvent;
}

if (!disabled_events.includes("review")) {
  serializers.PullRequestReviewEvent = PullRequestReviewEvent;
}

if (!disabled_events.includes("release")) {
  serializers.ReleaseEvent = ReleaseEvent;
}

if (!disabled_events.includes("star")) {
  serializers.WatchEvent = WatchEvent;
}

console.log("serializers");
console.log(serializers);

module.exports = serializers;
