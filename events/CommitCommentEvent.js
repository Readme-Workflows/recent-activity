const { comments_activity } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const CommitCommentEvent = (item) => {
  if (item.payload.action === "created") {
    return comments_activity.replace(
      /{ID}/g,
      toUrlFormat(item, "commit_comment")
    )
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "commit_comment"))
      .replace(/{URL}/g, makeCustomUrl(item, "commit_comment"));
  } else {
    return "";
  }
};

module.exports = CommitCommentEvent;
