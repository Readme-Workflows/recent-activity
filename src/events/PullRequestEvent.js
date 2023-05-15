const { pr_opened, pr_merged, pr_closed } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const PullRequestEvent = (item) => {
  console.log(item.payload);
  if (item.payload.action === "opened") {
    return pr_opened
      .replace(/{ID}/g, toUrlFormat(item, "pr_open"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_open"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_open"));
  } else if (item.payload.pull_request.merged) {
    return pr_merged
      .replace(/{ID}/g, toUrlFormat(item, "pr_merge"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_merge"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_merge"));
  } else if (
    item.payload.action === "closed" &&
    !item.payload.pull_request.merged
  ) {
    return pr_closed
      .replace(/{ID}/g, toUrlFormat(item, "pr_close"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_close"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_close"));
  } else {
    return "";
  }
};

module.exports = PullRequestEvent;
