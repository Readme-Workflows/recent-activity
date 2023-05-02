/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const serializers = require("../serializers");
const { max_lines, ignored_repos } = require("../config");
const { amountReplace } = require("./amountReplacer");

const filterContent = (eventData) => {
  let temp_content = [];

  // ignore the repos passed in the configuration
  if (ignored_repos instanceof Array && ignored_repos.length != 0) {
    eventData = eventData.filter(
      (event) => !ignored_repos.includes(event.repo.name)
    );
  }
  for (let i = 0; i < eventData.length; i++) {
    let event_string = serializers[eventData[i].type](eventData[i]);

    if (event_string !== "") {
      temp_content.push(event_string);
    }
    if (temp_content.length == max_lines) {
      break;
    }
  }

  temp_content = temp_content.flat();
  temp_content.length = max_lines;

  temp_content = temp_content.join("\n\n");

  temp_content = amountReplace(temp_content).split("\n\n");

  console.log(temp_content);

  return temp_content;
};

module.exports = filterContent;
