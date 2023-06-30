require("dotenv").config();
const app = require("./app");

// server
const port = 5000 || 8000;

// testing api
app.get("/", async (req, res) => {
  res.send("Server is running!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
