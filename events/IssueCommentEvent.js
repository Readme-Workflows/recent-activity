const { COMMENTS_ACTIVITY } = require("./config");
const makeCustomUrl = require("./functions/makeCustomUrl");
const toUrlFormat = require("./functions/toUrlFormat");

const IssueCommentEvent = (item) => {
  if (item.payload.action === "created") {
    return COMMENTS_ACTIVITY.replace(/{ID}/g, toUrlFormat(item, "comment"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "comment"))
      .replace(/{URL}/g, makeCustomUrl(item, "comment"));
  } else {
    return "";
  }
};

module.exports = IssueCommentEvent;
