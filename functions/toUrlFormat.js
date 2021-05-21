/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const urlPrefix = "https://github.com";

const toUrlFormat = (item, type) => {
  let url;
  if (typeof item === "object") {
    switch (type.toLowerCase()) {
      case "issue_open":
      case "issue_close":
        url = `[#${item.payload.issue.number}](${item.payload.issue.html_url})`;
        break;
      case "issuecomment":
        url = `[#${item.payload.issue.number}](${item.payload.comment.html_url})`;
        break;
      case "commitcomment":
        url = `[commit](${item.payload.comment.html_url})`;
        break;
      case "prreviewcomment":
        url = `[#${item.payload.pull_request.number}](${item.payload.comment.html_url})`;
        break;
      case "pr_open":
      case "pr_close":
      case "pr_merge":
        url = `[#${item.payload.pull_request.number}](${item.payload.pull_request.html_url})`;
        break;
      default:
        tools.exit.failure("Failed while creating the url format.");
        break;
    }
    return url;
  }
  return `[${item}](${urlPrefix}/${item})`;
};

module.exports = toUrlFormat;
