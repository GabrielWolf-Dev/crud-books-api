const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/booksRouter");
const reviewsRouter = require("./routes/reviewsRouter");

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Routes
app.use(booksRouter);
app.use(reviewsRouter);

module.exports = app;
