
const { Router } = require("express");

const router = Router();

const { defaultControllers } = require("../controllers/default.controller");
const { lottery } = require("../controllers/lottery.controller");
const { beneficiary } = require("../controllers/beneficiary.controller");

/* GET home response. */
router.get("/", defaultControllers);

/* POST form. */
router.post("/giveaway", lottery);

/* GET beneficiaries. */
router.get("/giveaway", beneficiary);

module.exports = router;