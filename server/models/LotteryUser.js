const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create User Schema
const LotteryUser = new Schema({
    phoneNumber: {
        type: String,
        required: true,
        index: { unique: true },
    },
    network: {
        type: String,
        required: true,
    },
    fingerprint: {
        type: String,
        required: true,
        index: { unique: true },
    },
    amount: {
        type: Number,
    },
    status: {
        type: Boolean,
    },
    count: {
        type: Number,
        required: true,
        default: 0,
    },
    dateUpdated: {
        type: Date,
    },
});

module.exports = mongoose.model("LotteryUser", LotteryUser);
