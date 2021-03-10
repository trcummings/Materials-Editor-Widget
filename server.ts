const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const faker = require("faker");

const { PORT } = require("./config");
const { generateFakeMaterials } = require("./src/helpers/testHelpers");

const app = express();

// for serving static Content
app.use(express.static("public"));

// For CORS
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// For safety response headers
app.use(helmet());
// For parsing application/json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Mock materials for pseudo-API calls
let materials = generateFakeMaterials(3);

// Configure Routes
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/materials", (req: Request, res: Response) => {
  // Reply with all our materials
  res.send(materials);
});

// Don't need this one for this project at the moment
// app.get("/materials/:id", (req, res) => {
//   const id = req.params.id;
//   // Find our material in the "database" and respond with it
//   res.send(materials[id]);
// });

app.post("/materials", (req: Request, res: Response) => {
  // Create guid and fill out new material object with req body
  const newId = faker.random.uuid();
  const newMaterial = { id: newId, ...req.body };
  // Add new material to the materials "database"
  materials[newId] = newMaterial;
  // Respond with newly created material
  res.send({ [newId]: newMaterial });
});

app.patch("/materials/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const material = materials[id];
  // create an updated version of the materials object
  const newMaterial = Object.assign({}, material, req.body);
  // update our 'materials database'
  materials[id] = newMaterial;
  // respond with updated object
  res.send({ [id]: newMaterial });
});

app.delete("/materials/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedMaterial = materials[id];
  // Create new materials object and remove the returned object from it
  const newMaterials = Object.assign({}, materials);
  delete newMaterials[id];
  // update our "database"
  materials = newMaterials;
  // respond with deleted material
  res.send({ [id]: deletedMaterial });
});

// Start App
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
