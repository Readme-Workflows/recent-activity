const { CREATE_REPO } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const CreateEvent = (item) => {
  if (item.payload.ref_type === "repository") {
    return CREATE_REPO.replace(
      /{REPO}/g,
      toUrlFormat(item.repo.name, "create_repo")
    ).replace(/{URL}/g, makeCustomUrl(item, "create_repo"));
  } else {
    return "";
  }
};

module.exports = CreateEvent;
