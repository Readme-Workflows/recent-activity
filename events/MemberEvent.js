const { added_member } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const MemberEvent = (item) => {
  if (item.payload.action === "added") {
    return added_member
      .replace(/{REPO}/g, toUrlFormat(item.repo.name, "member"))
      .replace(/{URL}/g, makeCustomUrl(item, "member"));
  } else {
    return "";
  }
};

module.exports = MemberEvent;
