const bodyParser = require("body-parser");
const count = require("../../../model/count");

exports.balancePost = (req, res) => {
  let balance = req.body.balance;
  count.newBalance(balance);
  res.send("balance added");
};

exports.debtsPost = (req, res) => {
  let debts = req.body.debts;
  count.newDebts(debts);
  res.send("debts added");
};

exports.paymentsPost = (req, res) => {
  let payments = req.body.payments;
  count.newPayments(payments);
  res.send("payments added");
};

exports.spendingPost = (req, res) => {
  let spending = req.body.spending;
  count.newSpending(spending);
  res.send("spending added");
};
