const app = require('./app');

app.listen(process.env.PORT, ()=> {
    console.log("App is runnimg !")
})

module.exports = app;