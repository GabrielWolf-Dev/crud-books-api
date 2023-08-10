const validateBodyReq = (req, res, next) => {
  const { name, text, book_id } = req.body;
  const isFieldsUndefined =
    name === undefined || text === undefined || book_id === undefined;
  const isFieldsEmpty = name === "" || text === "";

  if (isFieldsUndefined) {
    return res.status(400).json({
      status: 400,
      message: "Fields are required",
    });
  }

  if (isFieldsEmpty) {
    return res
      .status(400)
      .json({ status: 400, message: "Fields cannot have empty strings" });
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
