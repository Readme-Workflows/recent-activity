/**
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const yaml = require("js-yaml");
const fs = require("fs");

//const { config_file } = require("../config");

const parseYaml = (file) => {
  try {
    return yaml.load(fs.readFileSync(file, "utf8"));
  } catch (error) {
    console.error(error);
    return {};
  }
};

module.exports = parseYaml;
