const express = require("express");
const path = require("path");
const cors = require("cors");
const faker = require("faker");

const {
  generateFakeMaterial,
  generateFakeMaterials,
} = require("./src/helpers/testHelpers");

const app = express();
const port = 3000;

// Mock materials for pseudo-API calls
let materials = generateFakeMaterials(3);

// for serving static Content
app.use(express.static("public"));

// For CORS
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// For parsing application/json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Configure Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/materials", (req, res) => {
  // Reply with all our materials
  res.send(materials);
});

// Don't need this one for this project at the moment
// app.get("/materials/:id", (req, res) => {
//   const id = req.params.id;
//   // Find our material in the "database" and respond with it
//   res.send(materials[id]);
// });

app.post("/materials", (req, res) => {
  // Create guid and fill out new material object with req body
  const newId = faker.random.uuid();
  const newMaterial = { id: newId, ...req.body };
  // Add new material to the materials "database"
  materials[newId] = newMaterial;
  // Respond with newly created material
  res.send(newMaterial);
});

app.patch("/materials/:id", (req, res) => {
  const id = req.params.id;
  const material = materials[id];
  // create an updated version of the materials object
  const newMaterial = Object.assign({}, material, req.body);
  // update our 'materials database'
  materials[id] = newMaterial;
  // respond with updated object
  res.send(newMaterial);
});

app.delete("/materials/:id", (req, res) => {
  const id = req.params.id;
  const deletedMaterial = materials[id];
  // Create new materials object and remove the returned object from it
  const newMaterials = Object.assign({}, materials);
  delete newMaterials[id];
  // update our "database"
  materials = newMaterials;
  // respond with deleted material
  res.send(deletedMaterial);
});

// Start App
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
