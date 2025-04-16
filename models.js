const mongoose = require('mongoose');

// Card schema
const cardSchema = new mongoose.Schema({
  name: String,
  budget: [{
    amount: Number,
    date: Date
  }],
  expense: [{
    amount: Number,
    date: Date
  }]
});

const Card = mongoose.model('Card', cardSchema);

// Transaction schema
const transactionSchema = new mongoose.Schema({
  type: String, // budget or expense
  cardName: String,
  amount: Number,
  date: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = { Card, Transaction };
