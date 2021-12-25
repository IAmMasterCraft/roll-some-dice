const imports = require("./imports");
const { LotteryUser, RandomAmount } = imports;

exports.giveaway = async (request, response) => {
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
        const myUser = await newUser.save();
        // get random amount
        const amount = RandomAmount();
        // send airtime
        // update record
        // return response
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
}