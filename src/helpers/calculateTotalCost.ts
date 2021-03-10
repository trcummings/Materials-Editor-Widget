/**
 * File that contains helpers for TotalCost component
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */

import { Material } from "../types";

/**
 * Calculate the total cost of all materials
 *
 * @function
 * @param {Object.<string, Material>} materials
 * @returns {string} -- in format "0.00"
 *
 */
export default function calculateTotalCost(
  materials: Record<string, Material>
): string {
  // calculate the total
  const total = Object.keys(materials).reduce(
    (acc, id) => acc + materials[id].cost * materials[id].volume,
    0
  );

  // format it so there are only ever two decimal places
  return total.toFixed(2).toString();
}
