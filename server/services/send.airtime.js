const axios = require("@nuxtjs/axios");

exports.SendAirtime = async (dataObject = {
    phone: "08103412973",
    network: "mtn",
    amount: 10,
}) => {
    const payload = {
        email: "mastercraft@hi2.in",
        network: "mtn",
        payment_method: "wallet",
        transaction_id: 1640398687222,
        ...dataObject
    };

    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMTE2ZWEyMWQ1MmQxYjE0MTExZTZhOTdjMWUyNmQ5OGEyYWRkODI5YTIyMjZiMDk3YTAwZjk5MjVjNTJjNzcwZmI4MzFiNDA0ZDg5N2VlZTQiLCJpYXQiOjE2NDAzOTg2NzUuNDU0MTEyLCJuYmYiOjE2NDAzOTg2NzUuNDU0MTE2LCJleHAiOjE2NzE5MzQ2NzUuNDUxMjUsInN1YiI6IjEyNSIsInNjb3BlcyI6W119.D3uLzSMxM77WQNv8CbrDg8FzjC8DXkjAHtO7nSrn_xwqLgJ0z9GygBJigSxtSToq3hE8kQovl0GDKfezn_ttWuApjkMYyxW3rItEt5HcfUyZkEdRsc88wkfT8ruYmUJCpZ453T5oCStB7B5AmeJRmtmXG6PvYsV1W3UYogkbv-xPnwZUGSlZunvqAXWpOdAfCUVunQ23uV85VzZiuRpjgM3epctfeXba85CXAguAA7QWSnCkTX0Bf3bWoIPIv7JKekNr33gBGymxxbgApYOg3KPlNkxC2YKHYxvnR9MjhAkLHzBisZXtyhTBCWxJ3s91Wg_3JFbcUC4fVl7S9mPo0g0KxyFDPbj50L31EBQCzXFeLJLm81_g5E8CXW5uJEB3KM8ZC1Mrw7v8kPpxh9OchVdZpfODjPbXCo62WPzvXCEPrFsHydgRwj0Dco0Ep8i20_tI9oO2af0AjqhrEPMBC9srZ0zuGuZsQu2ZTl77sqtK1VvCIUtUAC-0qFTzbeGxEy0ZONqF0Ivsoq4yzHe0M2wpO5ixpoLizM5ZLOMMlwTksOiLySiBLZDKsXluWajMXAtQsUVghdJFzqAKezdBBg0Tm2uH-i6F6nPm9LU7JQnpGKkXrV8OglDC4QssyXgYCvRApBN6EAuBHO1oyHMwrSJ2ByfxiaCdZnT7R-IJCd8";

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