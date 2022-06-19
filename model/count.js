const { v4: uuidv4 } = require("uuid");

//backend without mySQL
module.exports = {
  balance1: [],

  debts1: [],

  payments: [],

  spending: [],

  bankStatement: [],

  debtsPaid1: [],

  paymentsReceived1: [],

  getbalance() {
    return this.balance1;
  },
  getdebts() {
    return this.debts1;
  },
  getpayments() {
    return this.payments;
  },
  getspending() {
    return this.spending;
  },

  getDebtsPaid() {
    return this.debtsPaid1;
  },

  getbankStatement() {
    return this.bankStatement;
  },

  getPaymentsReceived() {
    return this.paymentsReceived1;
  },

  newBalance(balance) {
    let balance1 = parseInt(balance);
    this.balance1.push({
      id: generateID(),
      currentBalance: balance1,
    });
  },

  newDebts(debts) {
    let debts2 = parseInt(debts);
    this.debts1.push({
      id: generateID(),
      currentDebts: debts2,
    });
  },

  newPayments(payments) {
    let payments1 = parseInt(payments);
    this.payments.push({
      id: generateID(),
      currentPayments: payments1,
    });
  },

  newSpending(spending) {
    let spending1 = parseInt(spending);
    this.spending.push({
      id: generateID(),
      currentsPending: spending1,
    });
  },

  newDebtsPaid(debtsPaid) {
    let debtsPaid1 = parseInt(debtsPaid);
    this.debtsPaid1.push({
      id: generateID(),
      debtsPaid: debtsPaid1,
    });
  },

  newPaymentsReceived(paymentsReceived) {
    let paymentsReceived1 = parseInt(paymentsReceived);
    this.paymentsReceived1.push({
      id: generateID(),
      paymentsReceived: paymentsReceived1,
    });
  },

  generateBankStatement(
    balanceC,
    activeDebtsC,
    debtsPayedC,
    paymentReceivedC,
    spended
  ) {
    this.bankStatement.push({
      id: generateID(),
      currentBalance: balanceC,
      activeDebts: activeDebtsC,
      debtsPaid: debtsPayedC,
      paymentReceived: paymentReceivedC,
      spended: spended,
    });
  },
};
// generate random id
function generateID() {
  return uuidv4();
}
