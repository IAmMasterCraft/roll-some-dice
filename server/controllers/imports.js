const LotteryUser = require("../models/LotteryUser"),
    LotteryConfigs = require("../models/LotteryConfigs"),
    { CheckEligibility } = require("../services/eligibility"),
    { RandomAmount } = require("../services/random.amount"),
    { SendAirtime } = require("../services/send.airtime"),
    { GetMessage } = require("../services/comrade.response"),
    { BeneficiaryData } = require("../services/beneficiary.data");

module.exports = {
    LotteryUser,
    LotteryConfigs,
    GetMessage,
    CheckEligibility,
    RandomAmount,
    SendAirtime,
    BeneficiaryData
}