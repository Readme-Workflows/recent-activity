const axios = require("axios");
const qs = require("qs");

module.exports = async (params, promiseStatus) => {
  let url;
  if (new Date().getUTCDay() % 2 == 0) {
    url = "https://readme-workflows.herokuapp.com/usage/recent-activity";
  } else {
    url = "https://readme-workflows2.herokuapp.com/usage/recent-activity";
  }

  console.log("GITHUB_WORKFLOW:" + process.env.GITHUB_WORKFLOW);
  console.log("GITHUB_ACTION:" + process.env.GITHUB_ACTION);
  console.log("GITHUB_ACTION_PATH:" + process.env.GITHUB_ACTION_PATH);
  console.log("GITHUB_ACTOR:" + process.env.GITHUB_ACTOR);
  console.log("GITHUB_REPOSITORY:" + process.env.GITHUB_REPOSITORY);
  console.log("GITHUB_WORKSPACE:" + process.env.GITHUB_WORKSPACE);
  console.log(process.env);

  await axios
    .post(url, qs.stringify(params))
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(promiseStatus);
};
