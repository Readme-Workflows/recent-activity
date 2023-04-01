const { pr_closed } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const PullRequestCloseEvent = (item) => {
  if (item.payload.action === "closed" && !item.payload.pull_request.merged) {
    return pr_closed
      .replace(/{ID}/g, toUrlFormat(item, "pr_close"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_close"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_close"));
  } else {
    return "";
  }
};
module.exports = PullRequestCloseEvent;
