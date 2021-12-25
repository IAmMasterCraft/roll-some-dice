const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create User Schema
const LotteryUser = new Schema({
    phoneNumber: {
        type: String,
        required: true,
        index: { unique: true },
    },
    token: {
        type: String,
        required: true,
        index: { unique: true },
    },
    dateGenerated: {
        type: Date,
        default: Date.now(),
    },
    dateUpdated: {
        type: Date,
    },
});

module.exports = mongoose.model("LotteryUser", LotteryUser);
