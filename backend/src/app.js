const express = require('express');
require('express-async-errors');


const app = express();
app.use(express.json()); // body parse

const transactions = require('./controllers/transactions');
app.get('/transactions', transactions.getTransactions);
app.post('/newTransactions', transactions.newTransactions);

app.use('/', (req, res, next) => { 
    res.send("helloWOrd");
})

app.use((error, req, res) => {
    console.error(error);
})

module.exports = app;
