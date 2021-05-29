/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const { spawn } = require("child_process");

const apiRequest = require("./apiRequest");
const { username, commit_name, commit_email } = require("../config");

let reqParams = {
  username: username,
  commit_name: commit_name,
  commit_email: commit_email,
};

/**
 * Execute shell command
 * @param {String} cmd - root command
 * @param {String[]} args - args to be passed along with
 *
 * @returns {Promise<void>}
 */

const exec = (cmd, args = []) =>
  new Promise((resolve, reject) => {
    const app = spawn(cmd, args, { stdio: "pipe" });
    let stdout = "";
    app.stdout.on("data", (data) => {
      stdout = data;
    });
    app.on("close", (code) => {
      if (code !== 0 && !stdout.includes("nothing to commit")) {
        err = new Error(`Invalid status code: ${code}`);
        err.code = code;
        apiRequest({ ...reqParams, status: "failure" }, () => reject(err));
        //return reject(err);
      } else {
        apiRequest({ ...reqParams, status: "success" }, () => resolve(code));
        //return resolve(code);
      }
    });
    app.on("error", (error) => {
      apiRequest({ ...reqParams, status: "failure" }, () => reject(err));
    });
    //app.on("error", reject);
  });

module.exports = exec;
