const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: String
    },
    task: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("task", schema);