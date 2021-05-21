const { CREATE_REPO } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const CreateEvent = (item) => {
  if (item.payload.ref_type === "repository") {
    return CREATE_REPO.replace(
      /{REPO}/g,
      toUrlFormat(item.repo.name, "createrepo")
    ).replace(/{URL}/g, makeCustomUrl(item, "createrepo"));
  } else {
    return "";
  }
};

module.exports = CreateEvent;
