/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const {
  readme_file,
  commit_msg,
  commit_name,
  commit_email,
} = require("../config");

const exec = require("./execute");

/**
 * Make a commit
 *
 * @returns {Promise<void>}
 */

const commitFile = async () => {
  await exec("git", ["config", "--global", "user.email", commit_email]);
  await exec("git", ["config", "--global", "user.name", commit_name]);
  await exec("git", ["add", readme_file]);
  await exec("git", ["pull"]);
  await exec("git", ["commit", "-m", commit_msg]);
  await exec("git", ["push"]);
};

module.exports = commitFile;
