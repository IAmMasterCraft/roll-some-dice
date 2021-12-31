exports.BeneficiaryData = (beneficiaries = []) => {
    return beneficiaries.map(beneficiary => {
        // console.log(beneficiary.dateGenerated);
        return {
            phoneNumber: `
                ${beneficiary.phoneNumber.substring(0, 3)}
                ****
                ${beneficiary.phoneNumber.substring(
                    beneficiary.phoneNumber.length - 3, beneficiary.phoneNumber.length
                )}
            `.replace(/ /g, '').replace(/\n/g, ''),
            amount: beneficiary.amount,
            dateGenerated: beneficiary.dateGenerated,
        }
    }).filter((beneficiary, index) => index < 5);
}