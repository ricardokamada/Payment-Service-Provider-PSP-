const express = require('express');

const app = express();

app.use('/', (req, res, next) => { 
    res.send("helloWOrd");
})

module.exports = app;
