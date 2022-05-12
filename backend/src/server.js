const app = require('./app');

app.listen(3001, ()=> {
    console.log("App is runnimg !")
})

module.exports = app;