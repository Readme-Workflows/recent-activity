/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const serializers = require("../serializers");
const { max_lines } = require("../config");

const filterContent = (eventData) => {
  let temp_content = [];

  for (i = 0; i < eventData.length; i++) {
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

  console.log(temp_content);

  return temp_content;
};

module.exports = filterContent;
