const { COMMENTS_ACTIVITY } = require("./config");
const makeCustomUrl = require("./functions/makeCustomUrl");
const toUrlFormat = require("./functions/toUrlFormat");

const PullRequestReviewCommentEvent = (item) => {
  if (item.payload.action === "created") {
    return COMMENTS_ACTIVITY.replace(
      /{ID}/g,
      toUrlFormat(item, "prreviewcomment")
    )
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "prreviewcomment"))
      .replace(/{URL}/g, makeCustomUrl(item, "prreviewcomment"));
  } else {
    return "";
  }
};

module.exports = PullRequestReviewCommentEvent;
