exports.CheckEligibility = async (
    phoneNumber = "08103412973", 
    fingerprint = "hiuyrtersxd978654kjgh",
    LotteryUser
) => {
    const check = await LotteryUser.findOne().or([
        { phoneNumber },
        { fingerprint },
    ]);
    if (check) return false;
    return true;
}