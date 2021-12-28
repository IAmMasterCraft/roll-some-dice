const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create User Schema
const LotteryConfigs = new Schema({
    configType: {
        type: String,
        required: true,
        index: { unique: true },
    },
    configValue: {
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

module.exports = mongoose.model("LotteryConfigs", LotteryConfigs);
