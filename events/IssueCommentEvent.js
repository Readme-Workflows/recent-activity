const { COMMENTS_ACTIVITY } = require("./config");
const makeCustomUrl = require("./functions/makeCustomUrl");
const toUrlFormat = require("./functions/toUrlFormat");

const IssueCommentEvent = (item) => {
  if (item.payload.action === "created") {
    return COMMENTS_ACTIVITY.replace(/{ID}/g, toUrlFormat(item, "issuecomment"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "issuecomment"))
      .replace(/{URL}/g, makeCustomUrl(item, "issuecomment"));
  } else {
    return "";
  }
};

module.exports = IssueCommentEvent;
