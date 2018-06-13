const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    id: {
        required: true,
        type: Number 
    },
    amount: {
        required: true,
        type: String
    },
    orderTime: {
        required: true,
        type: String
    },
    orderDate: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("order", schema);