const router = require("express").Router();
const reviewsController = require("../controllers/reviewsController");

router.get("/reviews/:id", reviewsController.showReviews);

module.exports = router;
