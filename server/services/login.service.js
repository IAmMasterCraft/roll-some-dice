const axios = require("axios"),
    { atob } = require("./a.to.b"),
    LotteryConfigs = require("../models/LotteryConfigs");

exports.DirechargeLogin = async () => {
    try {
        const payload = {
            email: atob(process.env.EMAIL),
            password: atob(process.env.PASSWORD),
        };
        const config = {
            method: "POST",
            url: atob(process.env.LOGIN_ENDPOINT),
            params: {
                access_token: atob(process.env.ACCESS_TOKEN),
            },
            data: payload
        };
        const response = await axios(config);
        const { code, data: { token }} = response.data
        if (code != 200) await DirechargeLogin();
        // update token
        await LotteryConfigs.findOneAndUpdate({
            configType: "auth_token",
        }, {
            configValue: `Bearer ${token}`,
            dateUpdated: Date.now(),
        })
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}