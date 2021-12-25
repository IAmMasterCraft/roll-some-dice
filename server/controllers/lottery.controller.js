const imports = require("./imports");
const { LotteryUser } = imports;

exports.giveaway = async (request, response) => {
    try {
        const { phoneNumber, fingerprint } = request.body;
        if (!phoneNumber || !fingerprint) {
            return response.status(400).json({
                success: false,
                error: "one or more missing fields",
            });
        }
        const newLotteryUser = new LotteryUser({
            phoneNumber,
            fingerprint,
        });
        const myUser = await newUser.save();
        // get random amount
        // send airtime
        // update record
        // return response
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
}