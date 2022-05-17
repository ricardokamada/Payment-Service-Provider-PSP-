const database = require('./db');
const app = require('./app');

app.listen(process.env.PORT, ()=> {
    console.log("App is runnimg at port " + process.env.PORT)
})

module.exports = app;