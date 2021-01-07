const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 8080;

// for serving static Content
app.use(express.static("public"));

// For CORS
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Start App
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
