const { pr_opened } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const PullRequestOpenEvent = (item) => {
  if (item.payload.action === "opened") {
    return pr_opened
      .replace(/{ID}/g, toUrlFormat(item, "pr_open"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "pr_open"))
      .replace(/{URL}/g, makeCustomUrl(item, "pr_open"));
  } else {
    return "";
  }
};

module.exports = PullRequestOpenEvent;
