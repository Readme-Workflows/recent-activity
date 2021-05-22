const { FORK_REPO } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const ForkEvent = (item) => {
  return FORK_REPO.replace(/{FORK}/g, toUrlFormat(item, "fork"))
    .replace(/{REPO}/g, toUrlFormat(item.repo.name, "fork"))
    .replace(/{URL}/g, makeCustomUrl(item, "fork"));
};

module.exports = ForkEvent;
