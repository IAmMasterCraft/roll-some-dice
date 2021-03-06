const imports = require("./imports");
const { 
    LotteryUser,
    LotteryConfigs, 
    BeneficiaryData,
} = imports;
exports.beneficiary = async (request, response) => {
    try {
        const beneficiary = await LotteryUser.find().sort({ dateGenerated: -1 });
        // return response
        return response.status(200).json({
            success: true,
            beneficiary: BeneficiaryData(beneficiary),
            total: beneficiary.length,
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}