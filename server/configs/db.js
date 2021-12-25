const { atob } = require("../services/a.to.b");

module.exports = {
    mongoURI: atob(process.env.MONGO_URI),
    mongoSetup: {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    }
}