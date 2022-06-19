const count = require("../../../model/count");

exports.debtsPaidDelete = (req, res) => {
  res.redirect("http://localhost:3000");
  const { id } = req.params;
  let paid = count.debts1.filter((x) => x.id === id);
  let paidCurrentDebts = paid.map((x) => x.currentDebts);
  let paidConverted = paidCurrentDebts.toString();

  count.newDebtsPaid(paidConverted);

  let deleted = count.debts1.findIndex((debts) => debts.id === id);

  if (deleted >= 0) {
    let deletedPosts = count.debts1.splice(deleted, 1);
    res.send(deletedPosts);
  } else {
    res.status(404).send("this id doesn't exists");
  }

  res.status(200).send("debts paid was added");
};

exports.paymentsReceivedDelete = (req, res) => {
  res.redirect("http://localhost:3000");
  const { id } = req.params;
  let received = count.payments.filter((x) => x.id === id);
  let receivedPayments = received.map((x) => x.currentPayments);
  let receivedPaymentsConverted = receivedPayments.toString();

  count.newPaymentsReceived(receivedPaymentsConverted);

  let deleted = count.payments.findIndex((payments1) => payments1.id === id);
  if (deleted >= 0) {
    let deletedPosts = count.payments.splice(deleted, 1);
    res.send(deletedPosts);
  } else {
    res.status(404).send("this id doesn't exists");
  }

  res.status(200).send("paymentsReceived was added");
};
