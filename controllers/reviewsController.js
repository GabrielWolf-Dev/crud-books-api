const reviewsModel = require("../models/reviews");

const showReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await reviewsModel.selectReviews(id);

    if (reviews.length !== 0) {
      res.status(200).json({
        message: "Request for all reviews succeeded",
        status: 200,
        results: reviews,
      });
    } else {
      res.status(404).json({
        message: "The review you are looking for does not exist.",
        status: 404,
      });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred on the server",
      status: 500,
      error: error.message,
    });
  }
};

module.exports = { showReviews };
