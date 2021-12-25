const imports = require("./imports");
const { LotteryUser, RandomAmount, SendAirtime } = imports;

exports.lottery = async (request, response) => {
    try {
        const { phoneNumber, network, fingerprint } = request.body;
        if (!phoneNumber || !network || !fingerprint) {
            return response.status(400).json({
                success: false,
                error: "one or more missing fields",
            });
        }
        const newLotteryUser = new LotteryUser({
            phoneNumber,
            network,
            fingerprint,
        });
        // const myUser = await newLotteryUser.save();
        // get random amount
        const amount = RandomAmount();
        // send airtime
        const send = await SendAirtime();
        // update record
        // myUser.amount = amount;
        // myUser.status = send;
        // return response
        return response.status(200).json({
            success: send,
            amount,
            phoneNumber,
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}