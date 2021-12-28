const LotteryUser = require("../models/LotteryUser"),
    LotteryConfigs = require("../models/LotteryConfigs"),
    { CheckEligibility } = require("../services/eligibility"),
    { RandomAmount } = require("../services/random.amount"),
    { SendAirtime } = require("../services/send.airtime"),
    { BeneficiaryData } = require("../services/beneficiary.data");

module.exports = {
    LotteryUser,
    LotteryConfigs,
    CheckEligibility,
    RandomAmount,
    SendAirtime,
    BeneficiaryData
}