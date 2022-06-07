const { push } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const PushEvent = (item) => {
  return push
    .replace(/{AMOUNT}/g, item.payload.size)
    .replace(/{REPO}/g, toUrlFormat(item.repo.name, "push"))
    .replace(/{URL}/g, makeCustomUrl(item, "push"));
};

module.exports = PushEvent;
