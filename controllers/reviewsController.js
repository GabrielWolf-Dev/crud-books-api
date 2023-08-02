const reviewsModel = require("../models/reviews");
const booksModel = require("../models/books");

const showReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await reviewsModel.selectReviews(id);

    if (reviews.length !== 0) {
      res.status(200).json({
        message: `Request for all successful book reviews with id: ${id}`,
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

const createReview = async (req, res) => {
  const review = req.body;
  const searchReview = await reviewsModel.selectSpecificReview(review);
  const bookIdSearch = await booksModel.selectBookId(review.book_id);

  if (bookIdSearch === null) {
    res.status(400).json({
      status: 400,
      message:
        "This book does not exist, please enter an id of an existing book in the bank.",
    });

    return;
  }

  try {
    if (searchReview !== null) {
      const reviewResult = await reviewsModel.insertReview(review);

      res.status(201).json({
        message: `Review of ${review.name} inserted successfully!`,
        status: 201,
        results: reviewResult,
      });
    } else {
      res.status(400).json({
        status: 400,
        message:
          "This review is already in the database, please insert another one.",
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

module.exports = { showReviews, createReview };
