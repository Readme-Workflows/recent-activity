/**
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const identifier = [];
const amount = [];

const amountUpdate = (data) => {
  let amt = identifier.indexOf(data);
  if (amt !== -1) {
    amount[amt] += 1;
    return false;
  } else {
    identifier.push(data);
    amount.push(1);
    return true;
  }
};

const amountReplace = (data) => {
  amount.forEach((amt) => {
    data = data.replace("{AMOUNT}", amt);
  });

  return data;
};

module.exports = { amountUpdate, amountReplace };
