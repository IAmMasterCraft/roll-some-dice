const LotteryUser = require("../models/LotteryUser"),
    { RandomAmount } = require("../services/random.amount"),
    { SendAirtime } = require("../services/send.airtime");


module.exports = {
    LotteryUser,
    RandomAmount,
    SendAirtime
}