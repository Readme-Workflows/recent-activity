const { comments } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const IssueCommentEvent = (item) => {
  if (item.payload.action === "created") {
    return comments
      .replace(/{ID}/g, toUrlFormat(item, "issue_comment"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "issue_comment"))
      .replace(/{URL}/g, makeCustomUrl(item, "issue_comment"));
  } else {
    return "";
  }
};

module.exports = IssueCommentEvent;
