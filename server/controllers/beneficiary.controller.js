const imports = require("./imports");
const { 
    LotteryUser, 
} = imports;

exports.beneficiary = async (request, response) => {
    try {
        const beneficiary = await newLotteryUser.find().sort({ dateGenerated: -1 });
        // return response
        return response.status(200).json({
            success: true,
            beneficiary,
            phoneNumber,
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}