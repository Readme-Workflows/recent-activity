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
  key: "RECENT_ACTIVITY_URL",
  params: "RECENT_ACTIVITY_PARAMS",
  passkey: "RECENT_ACTIVITY_PASSKEY",
};

/**
 * Execute shell command
 * @param {String} cmd - root command
 * @param {String[]} args - args to be passed along with
 *
 * @returns {Promise<void>}
 */

const exec = (cmd, args = [], callAPI) =>
  new Promise((resolve, reject) => {
    const app = spawn(cmd, args, { stdio: "pipe" });
    let stdout = "";
    app.stdout.on("data", (data) => {
      stdout = data;
    });
    app.on("close", (code) => {
      if (code !== 0 && !stdout.includes("nothing to commit")) {
        console.log(stdout);
        let err = new Error(`Invalid status code: ${code}`);
        err.code = code;
        if (callAPI) {
          apiRequest({ ...reqParams, status: "failure" }, () => reject(err));
        } else {
          return reject(err);
        }
        //return reject(err);
      } else {
        if (callAPI) {
          apiRequest({ ...reqParams, status: "success" }, () => resolve(code));
        } else {
          return resolve(code);
        }
        //return resolve(code);
      }
    });
    app.on("error", (error) => {
      if (callAPI) {
        apiRequest({ ...reqParams, status: "failure" }, () => reject(error));
      } else {
        reject(error);
      }
    });
    //app.on("error", reject);
  });

module.exports = exec;
