const connection = require("./connection");

const selectReviews = async (id) => {
  const query = "SELECT * FROM reviews WHERE reviews.book_id = ?";
  const [reviews] = await connection.execute(query, [id]);

  return reviews;
};

module.exports = {
  selectReviews,
};
