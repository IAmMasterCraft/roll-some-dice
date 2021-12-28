const LotteryFraudLogs = require("../models/LotteryFraudLogs"),
    LotteryUser = require("../models/LotteryUser");

exports.CheckEligibility = async (
    phoneNumber = "08103412973", 
    fingerprint = "hiuyrtersxd978654kjgh"
) => {
    const check = await LotteryUser.findOne().or([
        { phoneNumber },
        { fingerprint },
    ]);
    if (!check) return true;
    const doubleLotteryUser = new LotteryFraudLogs({
        ...check
    });
    await doubleLotteryUser.save();
    return false;
}