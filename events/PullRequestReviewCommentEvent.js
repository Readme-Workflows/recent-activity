const { comments } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const PullRequestReviewCommentEvent = (item) => {
  if (item.payload.action === "created") {
    return comments
      .replace(/{ID}/g, toUrlFormat(item, "pr_review_comment"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_review_comment"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_review_comment"));
  } else {
    return "";
  }
};

module.exports = PullRequestReviewCommentEvent;
