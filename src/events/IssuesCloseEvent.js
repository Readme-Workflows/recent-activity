const { issue_closed } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const IssuesEvent = (item) => {
  if (item.payload.action === "closed") {
    return issue_closed
      .replace(/{ID}/g, toUrlFormat(item, "issue_close"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "issue_close"))
      .replace(/{URL}/g, makeCustomUrl(item, "issue_close"));
  } else {
    return "";
  }
};

module.exports = IssuesEvent;
