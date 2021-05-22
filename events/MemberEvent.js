const { ADDED_MEMBER } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const MemberEvent = (item) => {
  if (item.payload.action === "added") {
    return ADDED_MEMBER.replace(
      /{REPO}/g,
      toUrlFormat(item.repo.name, "member")
    ).replace(/{URL}/g, makeCustomUrl(item, "member"));
  } else {
    return "";
  }
};

module.exports = MemberEvent;
