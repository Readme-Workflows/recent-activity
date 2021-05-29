/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
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
  await exec("git", ["config", "--global", "user.email", commit_email], false);
  await exec("git", ["config", "--global", "user.name", commit_name], false);
  await exec("git", ["add", readme_file], false);
  await exec("git", ["commit", "-m", commit_msg], false);
  await exec("git", ["push"], true);
};

module.exports = commitFile;
