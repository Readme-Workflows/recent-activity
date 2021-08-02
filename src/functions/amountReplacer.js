process.env.IDENTIFIER = "";
process.env.AMOUNT = "";

const amountUpdate = (data) => {
  let identifier = process.env.IDENTIFIER.split(",");
  let amount = process.env.AMOUNT.split(",");
  if (identifier[0] === "") {
    identifier = [];
    amount = [];
  }
  let idx = identifier.indexOf(data);
  if (idx !== -1) {
    amount[idx] = parseInt(amount[idx]) + 1;
    return false;
  } else {
    identifier.push(data);
    amount.push(1);

    process.env.IDENTIFIER = identifier.join(",");
    process.env.AMOUNT = amount.join(",");

    return true;
  }
};

const amountReplace = (data) => {
  let amount = process.env.AMOUNT.split(",");
  amount.forEach((amt) => {
    data = data.replace("{AMOUNT}", amt);
  });

  return data;
};

module.exports = { amountUpdate, amountReplace };
