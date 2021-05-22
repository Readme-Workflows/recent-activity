const { RELEASE } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const ReleaseEvent = (item) => {
  if (item.payload.action === "published") {
    return ISSUE_OPENED.replace(/{ID}/g, toUrlFormat(item, "release"))
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "release"))
      .replace(/{URL}/g, makeCustomUrl(item, "release"));
  } else {
    return "";
  }
};

module.exports = ReleaseEvent;
