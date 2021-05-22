const { ISSUE_OPENED, ISSUE_CLOSED } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const IssuesEvent = (item) => {
  if (item.payload.action === "opened") {
    return ISSUE_OPENED.replace(/{ID}/g, toUrlFormat(item, "issue_open"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "issue_open"))
      .replace(/{URL}/g, makeCustomUrl(item, "issue_open"));
  } else if (item.payload.action === "closed") {
    return ISSUE_CLOSED.replace(/{ID}/g, toUrlFormat(item, "issue_close"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "issue_close"))
      .replace(/{URL}/g, makeCustomUrl(item, "issue_close"));
  } else {
    return "";
  }
};

module.exports = IssuesEvent;
