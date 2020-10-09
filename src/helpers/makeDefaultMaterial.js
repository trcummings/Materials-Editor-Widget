import { getTodaysDate } from "./getTodaysDate";

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
 * Creates a generic Material (to be used to create a new one via POST request).
 *
 * @function
 * @returns {Material}
 * @example
 * const newMaterial = makeDefaultMaterial();
 */
export function makeDefaultMaterial() {
  return {
    name: "New Material",
    cost: 0,
    volume: 0,
    color: "#44d7b6",
    deliveryDate: getTodaysDate(),
  };
}
