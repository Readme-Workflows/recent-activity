/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const { url_text } = require("../config");

const makeCustomUrl = (item, type) => {
  let url;
  switch (type.toLowerCase()) {
    case "issue_open":
    case "issue_close":
      url =
        `[` +
        url_text
          .replace(/{ID}/g, `#${item.payload.issue.number}`)
          .replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.issue.html_url})`;
      break;
    case "issue_comment":
      url =
        `[` +
        url_text
          .replace(/{ID}/g, `#${item.payload.issue.number}`)
          .replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.comment.html_url})`;
      break;
    case "commit_comment":
      url =
        `[` +
        url_text
          .replace(/{ID}/g, `#commit`)
          .replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.comment.html_url})`;
      break;
    case "pr_review_comment":
      url =
        `[` +
        url_text
          .replace(/{ID}/g, `#${item.payload.pull_request.number}`)
          .replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.comment.html_url})`;
      break;
    case "pr_open":
    case "pr_close":
    case "pr_merge":
      url =
        `[` +
        url_text
          .replace(/{ID}/g, `#${item.payload.pull_request.number}`)
          .replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.pull_request.html_url})`;
      break;
    case "pr_review":
      url =
        `[` +
        url_text
          .replace(/{ID}/g, `#${item.payload.pull_request.number}`)
          .replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.review.html_url})`;
      break;
    case "create_repo":
    case "member":
    case "star":
      url =
        `[` +
        url_text.replace(/{REPO}/g, item.repo.name) +
        `](${process.env.GITHUB_SERVER_URL}/${item.repo.name})`;
      break;
    case "fork":
      url =
        `[` +
        url_text
          .replace(/{ID}/g, `${item.payload.forkee.full_name}`)
          .replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.forkee.html_url})`;
      break;
    case "wiki":
      url =
        `[` +
        url_text
          .replace(/{ID}/g, `${item.page_name}`)
          .replace(/{REPO}/g, item.repo_name) +
        `](${item.html_url})`;
      break;
    case "release":
      url =
        `[` +
        url_text
          .replace(/{ID}/g, `${item.payload.release.name}`)
          .replace(/{REPO}/g, item.repo.name) +
        `](${item.payload.release.html_url})`;
      break;
    default:
      url = "";
      break;
  }
  return url;
};

module.exports = makeCustomUrl;
