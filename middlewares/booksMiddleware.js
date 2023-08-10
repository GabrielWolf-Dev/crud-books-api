const validateBodyReq = (req, res, next) => {
  const { title, image, pages, author, publisher, rating } = req.body;
  const isFieldsUndefined =
    title === undefined ||
    image === undefined ||
    pages === undefined ||
    author === undefined ||
    publisher === undefined ||
    rating === undefined;
  const isFieldsEmpty = title === "" || author === "" || publisher === "";

  if (isFieldsUndefined) {
    return res
      .status(400)
      .json({ status: 400, message: "Fields are required" });
  }

  if (isFieldsEmpty) {
    return res
      .status(400)
      .json({ status: 400, message: "Fields cannot have empty strings" });
  }

  if (pages <= 5) {
    return res.status(400).json({
      status: 400,
      message:
        "Enter the correct number of pages. It must be longer than 5 pages.",
    });
  }

  if (rating === 0) {
    return res
      .status(400)
      .json({ status: 400, message: "Enter a rating greater than 0" });
  }

  if (typeof title !== "string") {
    return res
      .status(400)
      .json({ status: 400, message: "Title must be a string" });
  }

  if (typeof image !== "string") {
    return res
      .status(400)
      .json({ status: 400, message: "Image must be a string" });
  }

  if (typeof pages !== "number") {
    return res
      .status(400)
      .json({ status: 400, message: "Pages must be a number" });
  }

  if (typeof author !== "string") {
    return res
      .status(400)
      .json({ status: 400, message: "Author must be a string" });
  }

  if (typeof publisher !== "string") {
    return res
      .status(400)
      .json({ status: 400, message: "Publisher must be a string" });
  }

  if (typeof rating !== "number") {
    return res
      .status(400)
      .json({ status: 400, message: "Rating must be a number" });
  }

  next();
};

module.exports = { validateBodyReq };
