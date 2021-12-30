const imports = require("./imports");
const { DirechargeLogin } = require("../services/login.service");

exports.cron = async (request, response) => {
    try {
        // call login function
        const status = await DirechargeLogin();
        // return response
        return response.status(200).json({
            success: status,
            message: (status) 
                ? `cron login successful`
                : `something went wrong with login`,
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}