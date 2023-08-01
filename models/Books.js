const connection = require("./connection");

const selectAll = async () => {
  const query = "SELECT * FROM books";
  const [books] = await connection.execute(query);

  return books;
};

const selectSpecificBook = async (titleBook) => {
  const query = "SELECT id, title FROM books WHERE books.title = ?";
  const [book] = await connection.execute(query, [titleBook]);
  const bookNull = {
    title: null,
  };

  return book.length === 0 ? bookNull : book[0];
};

const insertBook = async (book) => {
  const { title, image, pages, author, publisher, rating } = book;
  const query =
    "INSERT INTO books (title, image, pages, author, publisher, rating) VALUES(?, ?, ?, ?, ?, ?)";
  const arrayObjValues = [title, image, pages, author, publisher, rating];

  const [bookResult] = await connection.execute(query, arrayObjValues);

  return {
    id: bookResult.insertId,
    title,
    image,
    pages,
    author,
    publisher,
    rating,
  };
};

const deleteBook = async (id) => {
  const query =
    "DELETE books FROM books JOIN reviews ON books.id = reviews.book_id WHERE books.id = ?";
  const removedBook = await connection.execute(query, [id]);

  return removedBook;
};

const updateBook = async (id, book) => {
  const { title, image, pages, author, publisher, rating } = book;

  const query =
    "UPDATE books SET title = ?, image = ?, pages = ?, author = ?, publisher = ?, rating = ? WHERE id = ?";

  const updatedBook = await connection.execute(query, [
    title,
    image,
    pages,
    author,
    publisher,
    rating,
    id,
  ]);

  return updatedBook;
};

module.exports = {
  selectAll,
  selectSpecificBook,
  insertBook,
  deleteBook,
  updateBook,
};
