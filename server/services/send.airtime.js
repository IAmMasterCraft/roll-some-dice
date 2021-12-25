const axios = require("@nuxtjs/axios");

exports.SendAirtime = async (dataObject = {
    phone: "08103412973",
    network: "mtn",
    amount: 10,
}) => {
    const paylod = {
        email: "mastercraft@hi2.in",
        network: "mtn",
        payment_method: "wallet",
        transaction_id: 1640398687222,
        ...dataObject
    };

    const token = "";

    const config = {
        method: "post",
        url: "https://api.direcharge.com.ng/api/airtime/wallet?access_token=1P2UapuQyv4Pz2VEhaeHzGejg0vQ6NW02B7R1KtOBrsxAq7vlmXkn9mq6KmAZMsm",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: payload
    };

    const response = await axios(config);

    if (response.data.code == 200) return true;

}