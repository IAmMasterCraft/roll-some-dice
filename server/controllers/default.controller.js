exports.defaultControllers = (request, response) => {
    return response.status(200).json({ status: "API is up!" });
};