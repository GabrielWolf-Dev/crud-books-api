const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");

dotEnv.config();
const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Public folder for images
app.use(express.static("public"));

// Routes
const BookRoutes = require("./routes/BookRoutes");

app.use("/", BookRoutes);

app.listen(5000, () => {
  console.log("----- The server is running! -----");
});
