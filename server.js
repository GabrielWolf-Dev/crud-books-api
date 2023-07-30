require("dotenv").config();
const app = require("./app");

app.listen(3000, () => {
  console.log("----- The server is running! -----");
  console.log("You can access: http://localhost:3000/books");
});
