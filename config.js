/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const core = require("@actions/core");

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

let DISABLE_EVENTS = core.getInput("DISABLE_EVENTS").toLowerCase().split(",");
DISABLE_EVENTS = DISABLE_EVENTS.map((event) => event.trim());

const urlPrefix = "https://github.com";

module.exports = {
  GH_USERNAME,
  COMMIT_MSG,
  MAX_LINES,
  README_FILE,
  COMMENTS_ACTIVITY,
  ISSUE_OPENED,
  ISSUE_CLOSED,
  PR_OPENED,
  PR_CLOSED,
  PR_MERGED,
  URL_TEXT,
  TIMEZONE_OFFSET,
  DATE_STRING,
  DATE_FORMAT,
  DISABLE_EVENTS,
  CREATE_REPO,
  urlPrefix,
};
