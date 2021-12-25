const { beneficiary } = require("../controllers/beneficiary.controller");

exports.BeneficiaryData = (beneficiaries = []) => {
    return beneficiaries.map(beneficiary => {
        return {
            phoneNumber: `
                ${beneficiary.phoneNumber.substring(0, 3)}
                ****
                ${beneficiary.phoneNumber.substring(
                    beneficiary.phoneNumber.length - 3, beneficiary.phoneNumber.length
                )}
            `.replace(/ /g, '').replace(/\n/g, ''),
            amount: beneficiary.amount,
        }
    }).filter((beneficiary, index) => index < 5);
}