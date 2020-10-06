// write imports in non-ES6 import style so the mockBackend can use it
const faker = require("faker");

const { formatDateInput } = require("./getTodaysDate");

// function to generate a fake dictionary of materials
function generateFakeMaterials(numMaterials = 0) {
  const result = {};

  for (let i = 0; i < numMaterials; i++) {
    const material = generateFakeMaterial();
    result[material.id] = material;
  }

  return result;
}

// function to generate a single fake material
function generateFakeMaterial() {
  return {
    id: faker.random.uuid(),
    name: faker.random.word(),
    color: faker.internet.color(),
    cost: faker.random.float(),
    volume: faker.random.number(),
    deliveryDate: formatDateInput(faker.date.future()),
  };
}

module.exports = { generateFakeMaterial, generateFakeMaterials };
