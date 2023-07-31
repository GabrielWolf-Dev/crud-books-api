const validateUndefinedFields = (res, fields, isReady) => {
  if (fields.title === undefined) {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "The field title is required" });
  }

  if (fields.image === undefined) {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "The field image is required" });
  }

  if (fields.pages === undefined) {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "The field pages is required" });
  }

  if (fields.author === undefined) {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "The field author is required" });
  }

  if (fields.publisher === undefined) {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "The field publisher is required" });
  }

  if (fields.rating === undefined) {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "The field rating is required" });
  }
};

const validateEmptyFields = (res, fields, isReady) => {
  if (fields.title === "") {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Title cannot be empty" });
  }

  if (fields.pages <= 5) {
    isReady = false;

    return res.status(400).json({
      status: 400,
      message:
        "Enter the correct number of pages. It must be longer than 5 pages.",
    });
  }

  if (fields.author === "") {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Author cannot be empty" });
  }

  if (fields.publisher === "") {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Publisher cannot be empty" });
  }

  if (fields.rating === 0) {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Enter a rating greater than 0" });
  }
};

const validateBodyReq = (req, res, next) => {
  const { title, image, pages, author, publisher, rating } = req.body;
  let isReady = true;

  validateUndefinedFields(res, req.body, isReady);
  validateEmptyFields(res, req.body, isReady);

  if (typeof title !== "string") {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Title must be a string" });
  }

  if (typeof image !== "string") {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Image must be a string" });
  }

  if (typeof pages !== "number") {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Pages must be a number" });
  }

  if (typeof author !== "string") {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Author must be a string" });
  }

  if (typeof publisher !== "string") {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Publisher must be a string" });
  }

  if (typeof rating !== "number") {
    isReady = false;

    return res
      .status(400)
      .json({ status: 400, message: "Rating must be a number" });
  }

  if (isReady) {
    next();
  }
};

module.exports = { validateBodyReq };
