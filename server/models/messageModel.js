const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    message: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("message", schema);