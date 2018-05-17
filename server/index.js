const express  = require("express");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const app = express();

app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://shayhoffman:nalarocks1@ds119930.mlab.com:19930/firstdatabasestuff")





app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3001");
});