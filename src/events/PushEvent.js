const { push } = require("../config");
const toUrlFormat = require("../functions/toUrlFormat");

const PushEvent = (item) => {
  return push
    .replace(/{AMOUNT}/g, item.payload.size)
    .replace(/{REPO}/g, toUrlFormat(item.repo.name, "push"));
};

module.exports = PushEvent;
