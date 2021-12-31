const imports = require("./imports");
const { 
    LotteryUser, 
    CheckEligibility, 
    RandomAmount,
    GetMessage, 
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
        const comrade = GetMessage();
        const isEligible = await CheckEligibility(phoneNumber, fingerprint);
        if (!isEligible) return response.status(400).json({
            success: false,
            message: (comrade.length < 5) ? "Comrade, rest you sef don try" : comrade,
        });
        // get random amount {between 51 and 100}
        const amount = RandomAmount(51, 100);
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
                ? `₦${amount} is on it's way to ${phoneNumber}`
                : `${phoneNumber} no get anything, Palliative leg don dey shake...`,
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}