const router = require("express").Router();
const booksController = require("../controllers/booksController");
const booksMiddleware = require("../middlewares/booksMiddleware");

router.get("/books", booksController.showAllBooks);
router.post(
  "/books",
  booksMiddleware.validateBodyReq,
  booksController.createBook
);

module.exports = router;
