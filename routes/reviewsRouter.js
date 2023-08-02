const router = require("express").Router();
const reviewsController = require("../controllers/reviewsController");
const reviewsMiddleware = require("../middlewares/reviewsMiddleware");

router.get("/reviews/:id", reviewsController.showReviews);
router.post(
  "/reviews",
  reviewsMiddleware.validateBodyReq,
  reviewsController.createReview
);
router.put(
  "/reviews/:id",
  reviewsMiddleware.validateBodyReq,
  reviewsController.updateReview
);
router.delete("/reviews/:id", reviewsController.removeReview);

module.exports = router;
