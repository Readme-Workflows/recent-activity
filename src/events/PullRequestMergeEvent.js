const { pr_merged } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const PullRequestMergeEvent = (item) => {
  if (item.payload.action === "merge") {
    return pr_merged
      .replace(/{ID}/g, toUrlFormat(item, "pr_merge"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_merge"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_merge"));
  } else {
    return "";
  }
};

module.exports = PullRequestMergeEvent;
