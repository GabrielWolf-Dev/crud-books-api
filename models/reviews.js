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

const insertReview = async (review) => {
  const { name, text, book_id } = review;
  const query = "INSERT INTO reviews (name, text, book_id) VALUES(?, ?, ?)";
  const [reviewResult] = await connection.execute(query, [name, text, book_id]);

  return {
    id: reviewResult.insertId,
    ...review,
  };
};

module.exports = {
  selectReviews,
  selectSpecificReview,
  insertReview,
};
