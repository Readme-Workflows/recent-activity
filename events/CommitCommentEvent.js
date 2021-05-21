const { COMMENTS_ACTIVITY } = require("./config");
const makeCustomUrl = require("./functions/makeCustomUrl");
const toUrlFormat = require("./functions/toUrlFormat");

const CommitCommentEvent = (item) => {
  if (item.payload.action === "created") {
    return COMMENTS_ACTIVITY.replace(
      /{ID}/g,
      toUrlFormat(item, "commitcomment")
    )
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "commitcomment"))
      .replace(/{URL}/g, makeCustomUrl(item, "commitcomment"));
  } else {
    return "";
  }
};

module.exports = CommitCommentEvent;
