const imports = require("./imports");
const { 
    LotteryUser, 
    CheckEligibility, 
    RandomAmount, 
    SendAirtime 
} = imports;

exports.lottery = async (request, response) => {
    try {
        const { phoneNumber, network, fingerprint } = request.body;
        if (!phoneNumber || !network || !fingerprint) {
            return response.status(400).json({
                success: false,
                message: "one or more missing fields",
            });
        }
        // check eligibility
        const isEligible = await CheckEligibility(phoneNumber, fingerprint, LotteryUser);
        if (!isEligible) return response.status(400).json({
            success: false,
            message: "Bad vibes received from phone number and/or device!",
        });
        // get random amount {between 50 and 200}
        const amount = RandomAmount(50, 200);
        // send airtime
        const status = await SendAirtime({
            phone: phoneNumber,
            network,
            amount,
        });
        const newLotteryUser = new LotteryUser({
            phoneNumber,
            network,
            fingerprint,
            amount,
            status,
        });
        const beneficiary = await newLotteryUser.save();
        // return response
        return response.status(200).json({
            success: status,
            message: (status) 
                ? `₦${amount} successfully delivered to ${phoneNumber}`
                : `${phoneNumber} no get anything, e  be like say Money don finish...`,
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}