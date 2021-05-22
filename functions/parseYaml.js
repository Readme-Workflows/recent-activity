/**
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const yaml = require("js-yaml");
const fs = require("fs");

//const { config_file } = require("../config");

const parseYaml = (file) => {
  return yaml.load(fs.readFileSync(file, "utf8"));
};

module.exports = parseYaml;
