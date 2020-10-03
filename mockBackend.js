const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Mock materials for pseudo-API calls
const materials = {
  "1": {
    id: "1",
    name: "Gravel",
    color: "#FFF000",
    volume: 100000,
    cost: 0.1703004,
    deliveryDate: "2020-12-01",
  },
  "2": {
    id: "2",
    name: "Sand",
    color: "#ddd289",
    volume: 50000,
    cost: 0.2,
    deliveryDate: "2020-09-01",
  },
};

// Configure CORS
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

// Configure Routes
app.get("/materials", (req, res) => {
  res.send(materials);
});

app.get("/materials/:id", (req, res) => {
  const id = req.params.id;

  res.send("hello world");
});

app.post("/materials", (req, res) => {
  res.send("hello world");
});

app.patch("/materials/:id", (req, res) => {
  const id = req.params.id;

  res.send("hello world");
});

app.delete("/materials/:id", (req, res) => {
  const id = req.params.id;

  res.send("hello world");
});

// Start App
app.listen(port, () => {
  console.log(`Mock Backend listening at http://localhost:${port}`);
});
