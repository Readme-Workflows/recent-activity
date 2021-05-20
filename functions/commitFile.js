const { README_FILE, COMMIT_MSG } = require("../config");

const exec = require("./execute");

/**
 * Make a commit
 *
 * @returns {Promise<void>}
 */

const commitFile = async () => {
  await exec("git", [
    "config",
    "--global",
    "user.email",
    "41898282+github-actions[bot]@users.noreply.github.com",
  ]);
  await exec("git", ["config", "--global", "user.name", "readme-bot"]);
  await exec("git", ["add", README_FILE]);
  await exec("git", ["commit", "-m", COMMIT_MSG]);
  await exec("git", ["push"]);
};

module.exports = commitFile;
