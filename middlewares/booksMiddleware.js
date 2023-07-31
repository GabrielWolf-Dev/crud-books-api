const validateBodyReq = (req, res, next) => {
  const { title, image, pages, author, publisher, rating } = req.body;

  if (title === undefined) {
    return res
      .status(400)
      .json({ status: 400, message: "The field title is required" });
  }

  if (image === undefined) {
    return res
      .status(400)
      .json({ status: 400, message: "The field image is required" });
  }

  if (pages === undefined) {
    return res
      .status(400)
      .json({ status: 400, message: "The field pages is required" });
  }

  if (author === undefined) {
    return res
      .status(400)
      .json({ status: 400, message: "The field author is required" });
  }

  if (publisher === undefined) {
    return res
      .status(400)
      .json({ status: 400, message: "The field publisher is required" });
  }

  if (rating === undefined) {
    return res
      .status(400)
      .json({ status: 400, message: "The field rating is required" });
  }

  if (title === "") {
    return res
      .status(400)
      .json({ status: 400, message: "Title cannot be empty" });
  }

  if (pages <= 5) {
    return res.status(400).json({
      status: 400,
      message:
        "Enter the correct number of pages. It must be longer than 5 pages.",
    });
  }

  if (author === "") {
    return res
      .status(400)
      .json({ status: 400, message: "Author cannot be empty" });
  }

  if (publisher === "") {
    return res
      .status(400)
      .json({ status: 400, message: "Publisher cannot be empty" });
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
