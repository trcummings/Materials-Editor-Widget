/**
 * File that contains helpers for TotalCost component
 *
 * @version 1.0.1
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */

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
 * Calculate the total cost of all materials
 *
 * @function
 * @param {Object.<string, Material>} materials
 * @returns {string} -- in format "0.00"
 *
 */
export default function calculateTotalCost(materials = {}) {
  // calculate the total
  const total = Object.keys(materials).reduce(
    (acc, id) => acc + materials[id].cost * materials[id].volume,
    0
  );

  // format it so there are only ever two decimal places
  return Number.parseFloat(total).toFixed(2);
}
