const count = require("../../../model/count");

exports.deleteBalance = (req, res) => {
  const { id } = req.params;
  let deleted = count.balance1.findIndex((balance1) => balance1.id === id);

  if (deleted >= 0) {
    res.redirect("http://localhost:3000/");
    let deletedPosts = count.balance1.splice(deleted, 1);
    res.send(deletedPosts);
  } else {
    res.redirect("http://localhost:3000/");
    res.status(404).send("this id doesn't exists");
  }
};

exports.deleteDebts = (req, res) => {
  const { id } = req.params;
  let deleted = count.debts1.findIndex((debts) => debts.id === id);

  if (deleted >= 0) {
    res.redirect("http://localhost:3000/");
    let deletedPosts = count.debts1.splice(deleted, 1);
    res.send(deletedPosts);
  } else {
    res.redirect("http://localhost:3000/");
    res.status(404).send("this id doesn't exists");
  }

  res.status(200).send("debts paid was added");
};

exports.deletePayments = (req, res) => {
  const { id } = req.params;
  let deleted = count.payments.findIndex((payments1) => payments1.id === id);
  if (deleted >= 0) {
    res.redirect("http://localhost:3000/");
    let deletedPosts = count.payments.splice(deleted, 1);
    res.send(deletedPosts);
  } else {
    res.redirect("http://localhost:3000/");
    res.status(404).send("this id doesn't exists");
  }
};

exports.deleteSpending = (req, res) => {
  const { id } = req.params;
  let deleted = count.spending.findIndex((spending1) => spending1.id === id);
  if (deleted >= 0) {
    res.redirect("http://localhost:3000/");
    let deletedPosts = count.spending.splice(deleted, 1);
    res.send(deletedPosts);
  } else {
    res.redirect("http://localhost:3000/");
    res.status(404).send("this id doesn't exists");
  }
};
