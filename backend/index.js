const express = require("express");
const dbConnect = require("./db");
const app = express();
dbConnect();

//get post update delete--CRUD

const port = 5000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello sagar");
});

app.use("/api/auth", require("./routes/Auth"));
app.use("/api/product", require("./routes/Product"));
app.listen(port, () => {
  console.log(`api is listening on port ${port}`);
});
