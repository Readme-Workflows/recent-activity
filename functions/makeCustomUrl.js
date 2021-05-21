/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const { URL_TEXT } = require("../config");

const makeCustomUrl = (item, type) => {
  let url;
  switch (type.toLowerCase()) {
    case "issue_open":
    case "issue_close":
      url =
        `[` +
        URL_TEXT.replace(/{ID}/g, `#${item.payload.issue.number}`).replace(
          /{REPO}/g,
          item.repo.name
        ) +
        `](${item.payload.issue.html_url})`;
      break;
    case "comment":
      url =
        `[` +
        URL_TEXT.replace(/{ID}/g, `#${item.payload.issue.number}`).replace(
          /{REPO}/g,
          item.repo.name
        ) +
        `](${item.payload.comment.html_url})`;
      break;
    case "pr_open":
    case "pr_close":
    case "pr_merge":
      url =
        `[` +
        URL_TEXT.replace(
          /{ID}/g,
          `#${item.payload.pull_request.number}`
        ).replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.pull_request.html_url})`;
      break;
    default:
      tools.exit.failure("Failed while creating the url string.");
      break;
  }
  return url;
};

module.exports = makeCustomUrl;
