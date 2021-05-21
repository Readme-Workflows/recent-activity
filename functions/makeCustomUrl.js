/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const { URL_TEXT, urlPrefix } = require("../config");

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
    case "issuecomment":
      url =
        `[` +
        URL_TEXT.replace(/{ID}/g, `#${item.payload.issue.number}`).replace(
          /{REPO}/g,
          item.repo.name
        ) +
        `](${item.payload.comment.html_url})`;
      break;
    case "commitcomment":
      url =
        `[` +
        URL_TEXT.replace(/{ID}/g, `#commit`).replace(
          /{REPO}/g,
          item.repo.name
        ) +
        `](${item.payload.comment.html_url})`;
      break;
    case "prreviewcomment":
      url =
        `[` +
        URL_TEXT.replace(
          /{ID}/g,
          `#${item.payload.pull_request.number}`
        ).replace(/{REPO}/g, item.repo.name) +
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
    case "createrepo":
      url =
        `[` +
        URL_TEXT.replace(/{REPO}/g, item.repo.name) +
        `](${urlPrefix}/${item.repo.name})`;
      break;
    default:
      tools.exit.failure("Failed while creating the url string.");
      break;
  }
  return url;
};

module.exports = makeCustomUrl;
