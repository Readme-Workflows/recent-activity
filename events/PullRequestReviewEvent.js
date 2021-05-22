const { REVIEW_APPROVED, CHANGES_REQUESTED } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const PullRequestReviewEvent = (item) => {
  if (
    item.payload.action === "created" &&
    item.payload.review.state == "approved"
  ) {
    return REVIEW_APPROVED.replace(/{ID}/g, toUrlFormat(item, "pr_review"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_review"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_review"));
  } else if (
    item.payload.action === "created" &&
    item.payload.review.state == "changes_requested"
  ) {
    return CHANGES_REQUESTED.replace(/{ID}/g, toUrlFormat(item, "pr_review"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_review"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_review"));
  } else {
    return "";
  }
};

module.exports = PullRequestReviewEvent;
