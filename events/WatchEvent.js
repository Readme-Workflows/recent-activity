const { STAR } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const WatchEvent = (item) => {
  if (item.payload.action === "started") {
    return STAR.replace(/{REPO}/g, toUrlFormat(item.repo.name, "star")).replace(
      /{URL}/g,
      makeCustomUrl(item, "star")
    );
  } else {
    return "";
  }
};

module.exports = WatchEvent;
