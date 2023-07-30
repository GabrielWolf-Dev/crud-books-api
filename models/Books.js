const conn = require("./conn");

const selectAll = (res) => {
  const query = "SELECT * FROM books;";

  conn.query(query, (error, results) => {
    if (error) {
      console.error(error);
    }

    res.json(results);
  });
};

module.exports = { selectAll };
