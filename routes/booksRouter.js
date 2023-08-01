const router = require("express").Router();
const booksController = require("../controllers/booksController");
const booksMiddleware = require("../middlewares/booksMiddleware");

router.get("/books", booksController.showBooks);
router.post(
  "/books",
  booksMiddleware.validateBodyReq,
  booksController.createBook
);
router.delete("/books/:id", booksController.removeBook);

module.exports = router;
