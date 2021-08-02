const { changes_approved, changes_requested } = require("../config");
const { amountUpdate } = require("../functions/amountReplacer");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const PullRequestReviewEvent = (item) => {
  if (
    item.payload.action === "created" &&
    item.payload.review.state == "approved"
  ) {
    return changes_approved
      .replace(/{ID}/g, toUrlFormat(item, "pr_review"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_review"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_review"));
  } else if (
    item.payload.action === "created" &&
    item.payload.review.state == "changes_requested"
  ) {
    if (!amountUpdate(item.payload.review.pull_request_url)) {
      return "";
    }
    return changes_requested
      .replace(/{ID}/g, toUrlFormat(item, "pr_review"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_review"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_review"));
  } else {
    return "";
  }
};

module.exports = PullRequestReviewEvent;
