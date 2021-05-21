/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const serializers = require("../serializers");
const { MAX_LINES } = require("../config");

const filterContent = (eventData) => {
  let temp_content = [];

  for (i = 0; i < eventData.length; i++) {
    let event_string = serializers[eventData[i].type](eventData[i]);

    if (event_string !== "") {
      temp_content.push(event_string);
    }
    if (temp_content.length == MAX_LINES) {
      break;
    }
  }

  return temp_content;
};

module.exports = filterContent;
