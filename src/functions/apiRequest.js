const axios = require("axios");
const qs = require("qs");

module.exports = async (params, promiseStatus) => {
  let url;
  if (new Date().getDay() % 2 == 0) {
    url = "https://readme-workflows.herokuapp.com/test";
  } else {
    url = "https://readme-workflows2.herokuapp.com/test";
  }

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
