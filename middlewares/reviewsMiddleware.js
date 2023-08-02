const validateBodyReq = (req, res, next) => {
  const { name, text, book_id } = req.body;

  if (name === undefined) {
    return res.status(400).json({
      status: 400,
      message: "The field name is required",
    });
  }

  if (text === undefined) {
    return res
      .status(400)
      .json({ status: 400, message: "The field text is required" });
  }

  if (book_id === undefined) {
    return res
      .status(400)
      .json({ status: 400, message: "The field book_id is required" });
  }

  if (name === "") {
    return res
      .status(400)
      .json({ status: 400, message: "Name cannot be empty" });
  }

  if (text === "") {
    return res
      .status(400)
      .json({ status: 400, message: "Text review cannot be empty" });
  }

  if (book_id === 0) {
    return res.status(400).json({
      status: 400,
      message: "The book_id field cannot be equal to zero",
    });
  }

  if (typeof name !== "string") {
    return res
      .status(400)
      .json({ status: 400, message: "Name must be a string" });
  }

  if (typeof text !== "string") {
    return res
      .status(400)
      .json({ status: 400, message: "Text review must be a string" });
  }

  if (typeof book_id !== "number") {
    return res
      .status(400)
      .json({ status: 400, message: "The book_id field must be a number" });
  }

  next();
};

module.exports = { validateBodyReq };
