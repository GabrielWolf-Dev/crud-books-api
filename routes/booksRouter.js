const router = require("express").Router();
const booksController = require("../controllers/booksController");
const booksMiddleware = require("../middlewares/booksMiddleware");

router.get("/books", booksController.showBooks);
router.get("/books/:title", booksController.showSpecificBook);
router.post(
  "/books",
  booksMiddleware.validateBodyReq,
  booksController.createBook
);
router.delete("/books/:id", booksController.removeBook);
router.put(
  "/books/:id",
  booksMiddleware.validateBodyReq,
  booksController.updateBook
);

module.exports = router;
