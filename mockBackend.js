const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Mock materials for pseudo-API calls
let materials = {
  "305c8183-9c3b-48d6-b053-a89b4b3451cf": {
    id: "305c8183-9c3b-48d6-b053-a89b4b3451cf",
    name: "Gravel",
    color: "#FFF000",
    volume: 100000,
    cost: 0.1703004,
    deliveryDate: "2020-12-01",
  },
  "445d61a3-4007-44fb-b3dd-83873b516da4": {
    id: "445d61a3-4007-44fb-b3dd-83873b516da4",
    name: "Sand",
    color: "#ddd289",
    volume: 50000,
    cost: 0.2,
    deliveryDate: "2020-09-01",
  },
};

// For CORS
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
// For parsing application/json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Configure Routes
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
  const newId = createGuid();
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
  console.log(`Mock Backend listening at http://localhost:${port}`);
});

/**
 * Creates a Globally unique identifier (GUID) string.  A GUID is 128 bits long, and can guarantee uniqueness across space and time.
 *
 * @function
 *
 * @returns {String}
 *
 *
 * @example
 * const guid = createGuid();
 *
 * @see {@link http://www.ietf.org/rfc/rfc4122.txt|RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace}
 */
function createGuid() {
  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}
