require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
  console.log("----- The server is running! -----");
  console.log(`You can access: http://localhost:${PORT}/books`);
});
