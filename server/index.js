const express  = require("express");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const app = express();

app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://shayhoffman:nalarocks1@ds119930.mlab.com:19930/firstdatabasestuff");


const messageRoutes = require("./routes/messageRoutes");
app.use(messageRoutes);

const taskRoutes = require("./routes/taskRoutes");
app.use(taskRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use(orderRoutes);



//get routes
app.get('/messages', function (request, response) {
    res.send('message route')
});

app.get('/orders', function (request, response) {
    res.send('order route')
});

app.get('/tasks', function (request, response) {
    res.send('task route')
});




//server things
app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3001");
});