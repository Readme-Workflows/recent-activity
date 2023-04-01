const { issue_opened } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const IssuesEvent = (item) => {
  if (item.payload.action === "opened") {
    return issue_opened
      .replace(/{ID}/g, toUrlFormat(item, "issue_open"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "issue_open"))
      .replace(/{URL}/g, makeCustomUrl(item, "issue_open"));
  }
};

module.exports = IssuesEvent;
