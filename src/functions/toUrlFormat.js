/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const toUrlFormat = (item, type) => {
  let url;
  if (typeof item === "object") {
    switch (type.toLowerCase()) {
      case "issue_open":
      case "issue_close":
        url = `[#${item.payload.issue.number}](${item.payload.issue.html_url})`;
        break;
      case "issue_comment":
        url = `[#${item.payload.issue.number}](${item.payload.comment.html_url})`;
        break;
      case "commit_comment":
        url = `[commit](${item.payload.comment.html_url})`;
        break;
      case "pr_review_comment":
        url = `[#${item.payload.pull_request.number}](${item.payload.comment.html_url})`;
        break;
      case "pr_open":
      case "pr_close":
      case "pr_merge":
        url = `[#${item.payload.pull_request.number}](${item.payload.pull_request.html_url})`;
        break;
      case "pr_review":
        url = `[#${item.payload.pull_request.number}](${item.payload.review.html_url})`;
        break;
      case "fork":
        url = `[${item.payload.forkee.full_name}](${item.payload.forkee.html_url})`;
        break;
      case "wiki":
        url = `[${item.page_name}](${item.html_url})`;
        break;
      case "release":
        url = `[${item.payload.release.name}](${item.payload.release.html_url})`;
        break;
      default:
        url = "";
        break;
    }
    return url;
  }
  return `[${item}](${process.env.GITHUB_SERVER_URL}/${item})`;
};

module.exports = toUrlFormat;
