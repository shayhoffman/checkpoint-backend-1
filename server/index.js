const express  = require("express");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const app = express();

app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect()





app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3001");
});