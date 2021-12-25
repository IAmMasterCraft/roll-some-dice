const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create User Schema
const LotteryUser = new Schema({
    phoneNumber: {
        type: String,
        required: true,
        index: { unique: true },
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
    dateGenerated: {
        type: Date,
        default: Date.now(),
    },
    dateUpdated: {
        type: Date,
    },
});

module.exports = mongoose.model("LotteryUser", LotteryUser);
