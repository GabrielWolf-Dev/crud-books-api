const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/booksRouter");

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Routes
app.use(booksRouter);

module.exports = app;
