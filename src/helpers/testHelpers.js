/**
 * File that contains helpers for generating test data with Faker.js
 *
 * @version 1.0.1
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */

/**
 * NB: write imports in non-ES6 import style so the mockBackend can use
 * it without runtime Babel transpilation
 */
const faker = require("faker");

const { formatDateInput } = require("./getTodaysDate");

/**
 * Material typedef
 * @typedef {Object} Material
 * @property {string} name - Name of material
 * @property {number} cost - Cost per cubic meter of material
 * @property {number} volume - Volume in cubic meters of material
 * @property {string} color - Chosen color for material display
 * @property {string} deliveryDate - Volume in cubic meters of material
 */
/**
 * Function to generate a dictionary of fake materials keyed by id for
 * testing purposes. returns an empty dictionary if given 0 numMaterials
 * or a negative amount (who does that?)
 *
 * @function
 * @param {number} numMaterials
 * @returns {Object.<string, Material>}
 * @example
 * const fakeMaterialsEmpty = generateFakeMaterials(0);
 * const fakeMaterials = generateFakeMaterials(5);
 */
function generateFakeMaterials(numMaterials = 0) {
  let _numMaterials = numMaterials;
  if (_numMaterials < 0) _numMaterials = 0;

  const result = {};

  for (let i = 0; i < _numMaterials; i++) {
    const material = generateFakeMaterial();
    result[material.id] = material;
  }

  return result;
}

/**
 * Function to generate a fake materials for testing purposes
 *
 * @function
 * @returns {Material}
 * @example
 * const fakeMaterial = generateFakeMaterial();
 */
function generateFakeMaterial() {
  return {
    id: faker.random.uuid(),
    name: faker.random.word(),
    color: faker.internet.color(),
    cost: parseFloat(`${faker.random.float()}`.slice(-4)),
    volume: faker.random.number(),
    deliveryDate: formatDateInput(faker.date.future()),
  };
}

module.exports = { generateFakeMaterial, generateFakeMaterials };
