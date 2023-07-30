const connection = require("./connection");

const selectAll = async () => {
  const query = "SELECT * FROM books";
  const [books] = await connection.execute(query);

  return books;
};

module.exports = { selectAll };
