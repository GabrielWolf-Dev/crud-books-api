const connection = require("./connection");

const selectReviews = async (id) => {
  const query = "SELECT * FROM reviews WHERE reviews.book_id = ?";
  const [reviews] = await connection.execute(query, [id]);

  return reviews;
};

const selectSpecificReview = async (review) => {
  const { name, text, book_id } = review;
  const query =
    "SELECT * FROM reviews WHERE name = ? AND text = ? AND book_id = ?";
  const [reviewResult] = await connection.execute(query, [name, text, book_id]);
  const reviewNull = null;

  return reviewResult.length !== 0 ? reviewNull : reviewResult[0];
};

const selectReviewId = async (id) => {
  const query = "SELECT * FROM reviews WHERE reviews.id = ?";
  const [review] = await connection.execute(query, [id]);
  const reviewNull = null;

  return review.length === 0 ? reviewNull : review[0];
};

const insertReview = async (review) => {
  const { name, text, book_id } = review;
  const query = "INSERT INTO reviews (name, text, book_id) VALUES(?, ?, ?)";
  const [reviewResult] = await connection.execute(query, [name, text, book_id]);

  return {
    id: reviewResult.insertId,
    ...review,
  };
};

const updateReview = async (id, review) => {
  const { name, text, book_id } = review;
  const query =
    "UPDATE reviews SET name = ?, text = ?, book_id = ? WHERE id = ?";
  const updatedReview = await connection.execute(query, [
    name,
    text,
    book_id,
    id,
  ]);

  return updatedReview;
};

const deleteReview = async (id) => {
  const query = "DELETE FROM reviews WHERE id = ?";
  const removedReviews = await connection.execute(query, [id]);

  return removedReviews;
};

module.exports = {
  selectReviews,
  selectSpecificReview,
  selectReviewId,
  insertReview,
  updateReview,
  deleteReview,
};
