const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create LotteryFraudLogs Schema
const LotteryFraudLogs = new Schema({
    phoneNumber: {
        type: String,
    },
    network: {
        type: String,
    },
    fingerprint: {
        type: String,
    },
    amount: {
        type: Number,
    },
    status: {
        type: Boolean,
    },
    dateGenerated: {
        type: Date,
        default: Date.now(),
    },
    dateUpdated: {
        type: Date,
    },
});

module.exports = mongoose.model("LotteryFraudLogs", LotteryFraudLogs);
