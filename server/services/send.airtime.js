const axios = require("axios"),
    { atob } = require("./a.to.b");

exports.SendAirtime = async (dataObject = {
    phone: "08103412973",
    network: "mtn",
    amount: 10,
}) => {
    try {
        const payload = {
            email: "mastercraft@hi2.in",
            network: "mtn",
            payment_method: "wallet",
            transaction_id: Date.now(),
            ...dataObject
        };

        const config = {
            method: "POST",
            url: atob(process.env.AIRTIME_ENDPOINT),
            params: {
                access_token: atob(process.env.ACCESS_TOKEN),
            },
            headers: {
                Authorization: atob(process.env.TOKEN),
            },
            data: payload
        };

        const response = await axios(config);

        if (response.data.code == 200) return true;
        
        return false;
    } catch (error) {
        // console.log(error.message);
        return false;
    }
    
}