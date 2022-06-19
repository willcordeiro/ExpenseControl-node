const count = require("../../../model/count");

exports.getbalance1 = (req, res) => {
  res.json(JSON.stringify(count.getbalance()));
};

exports.debts = (req, res) => {
  res.json(JSON.stringify(count.getdebts()));
};

exports.payments = (req, res) => {
  res.json(JSON.stringify(count.getpayments()));
};

exports.spending = (req, res) => {
  res.json(JSON.stringify(count.getspending()));
};

exports.debtsPaid = (req, res) => {
  res.json(JSON.stringify(count.getDebtsPaid()));
};

exports.paymentsReceived = (req, res) => {
  res.json(JSON.stringify(count.getPaymentsReceived()));
};

exports.bankStatement = (req, res) => {
  res.json(JSON.stringify(count.getbankStatement()));
};
