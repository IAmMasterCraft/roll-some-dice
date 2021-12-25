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
            transaction_id: 1640398687222,
            ...dataObject
        };

        const config = {
            method: "post",
            url: atob(process.env.AIRTIME_ENDPOINT),
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