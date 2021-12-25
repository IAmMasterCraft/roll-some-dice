const LotteryUser = require("../models/LotteryUser"),
    { CheckEligibility } = require("../services/eligibility"),
    { RandomAmount } = require("../services/random.amount"),
    { SendAirtime } = require("../services/send.airtime");


module.exports = {
    LotteryUser,
    CheckEligibility,
    RandomAmount,
    SendAirtime
}