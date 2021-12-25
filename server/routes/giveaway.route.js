
const { Router } = require("express");

const router = Router();

const { defaultControllers } = require("../controllers/default.controller");
const { lottery } = require("../controllers/lottery.controller");

/* GET home response. */
router.get("/", defaultControllers);

/* POST form. */
router.post("/giveaway", lottery);

module.exports = router;