const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const app = express();

app.use('/', (req, res, next) => { 
    res.send("helloWOrd");
})

module.exports = app;
