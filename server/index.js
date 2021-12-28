require('dotenv').config();

const express = require("express"),
    mongoose = require("mongoose"),
    cron = require('node-cron');

// bring in db.js
const dbConfig = require("./configs/db");

// Require API routes
const giveawayRouter = require("./routes/giveaway.route");

// Require DirechargeLogin Service
const { DirechargeLogin } = require("./services/login.service");

// Create express instance
const app = express();

app.use(express.json());


//connect to mongoose
mongoose.connect(dbConfig.mongoURI, dbConfig.mongoSetup)
    .then(async () => {
        console.log("MongoDb connected...");
    })
    .catch(err => console.log(err ?? ''));

// schedule cron job for Direcharge Login
const job = cron.schedule("0 0 */12 * * *", async () => {
    await DirechargeLogin();
});

job.start();

// Import API Routes
app.use(giveawayRouter);
// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`API server listening on port ${port}`);
    });
}