const count = require("../../../model/count");

exports.bankStatement = (req, res) => {
  res.redirect("http://localhost:3000/bankStatement");
  const cBalance = count.balance1.map((cBalance1) => cBalance1.currentBalance);
  let balanceResult = 0;
  for (let i in cBalance) {
    balanceResult = balanceResult += cBalance[i];
  }

  const cDebts = count.debts1.map((debts) => debts.currentDebts);
  let debtsResult = 0;
  for (let i in cDebts) {
    debtsResult = debtsResult += cDebts[i];
  }

  const cDebtsPaid = count.debtsPaid1.map((debtsPaid) => debtsPaid.debtsPaid);
  let DebtsPaidResult = 0;
  for (let i in cDebtsPaid) {
    DebtsPaidResult = DebtsPaidResult += cDebtsPaid[i];
  }

  const cPaymentsReceived = count.paymentsReceived1.map(
    (paymentsReceived) => paymentsReceived.paymentsReceived
  );
  let paymentsReceivedResult = 0;
  for (let i in cPaymentsReceived) {
    paymentsReceivedResult = paymentsReceivedResult += cPaymentsReceived[i];
  }

  const cSpended = count.spending.map((spending1) => spending1.currentsPending);
  let spendedResult = 0;
  for (let i in cSpended) {
    spendedResult = spendedResult += cSpended[i];
  }

  res.json(
    JSON.stringify(
      count.generateBankStatement(
        balanceResult,
        debtsResult,
        DebtsPaidResult,
        paymentsReceivedResult,
        spendedResult
      )
    )
  );
};
