const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const gets = require("./controllers/get");
const posts = require("./controllers/post");
const getsToDeleted = require("./controllers/getDelete");
const bankStatement = require("./controllers/bankStatement");
const deleteValues = require("./controllers/deleteValues.js");
//gets methods
router.get("/balance", gets.getbalance1);

router.get("/debts", gets.debts);

router.get("/payments", gets.payments);

router.get("/spending", gets.spending);

router.get("/debtsPaid", gets.debtsPaid);

router.get("/paymentsReceived", gets.paymentsReceived);

router.get("/bankStatement", gets.bankStatement);

// posts methods
router.post("/balance", bodyParser.json(), posts.balancePost);

router.post("/debts", bodyParser.json(), posts.debtsPost);

router.post("/payments", bodyParser.json(), posts.paymentsPost);

router.post("/spending", bodyParser.json(), posts.spendingPost);

//gets to delete method
router.get("/debtsPaid/:id", getsToDeleted.debtsPaidDelete);

router.get("/paymentsReceived/:id", getsToDeleted.paymentsReceivedDelete);

//delete values with get
router.get("/balance/:id", deleteValues.deleteBalance);

router.get("/debts/:id", deleteValues.deleteDebts);

router.get("/payments/:id", deleteValues.deletePayments);

router.get("/spending/:id", deleteValues.deleteSpending);

// bank statement generator
router.get("/bankStatement1", bankStatement.bankStatement);

module.exports = router;
