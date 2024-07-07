const Router = require("express");
const { getAds, addAds, removeAds } = require("../controllers/adsControllers");
const checkDuplicateId = require("../middleware/checkDuplicateId");
const advertisingData = require("../data/advertisingData");

const router = new Router();

//GET product localhost:5000/advertising
router.get("/advertising", getAds);

//POST add advertisin
router.post("/advertising/new-advertising", checkDuplicateId(advertisingData), addAds);

//DELETE
router.delete("/advertising/:id", removeAds);

module.exports = router;
