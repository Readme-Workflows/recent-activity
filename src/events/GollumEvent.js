const { wiki_create } = require("../config");
const makeCustomUrl = require("../functions/makeCustomUrl");
const toUrlFormat = require("../functions/toUrlFormat");

const GollumEvent = (item) => {
  let finalArray = [];
  item.payload.pages.forEach((page) => {
    if (page.action === "created") {
      page.repo_name = item.repo.name;
      finalArray.push(
        wiki_create
          .replace(/{WIKI}/g, toUrlFormat(page, "wiki"))
          .replace(/{REPO}/g, toUrlFormat(page.repo_name, "wiki"))
          .replace(/{URL}/g, makeCustomUrl(page, "wiki")),
      );
    }
  });

  if (finalArray.length == 0) {
    return "";
  } else {
    return finalArray;
  }
};

module.exports = GollumEvent;
