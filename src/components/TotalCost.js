/**
 * Functional component that displays the total cost of all materials
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import React from "react";

import calculateTotalCost from "../helpers/calculateTotalCost";

/**
 * Material typedef
 *
 * @typedef {Object} Material
 * @property {string} name - Name of material
 * @property {number} cost - Cost per cubic meter of material
 * @property {number} volume - Volume in cubic meters of material
 * @property {string} color - Chosen color for material display
 * @property {string} deliveryDate - Volume in cubic meters of material
 */

/**
 * TotalCost
 *
 * @param {Props} props Component props
 * @param {Object.<string, Material>} props.materials - Materials dictionary
 */
export default function TotalCost({ materials = {} }) {
  return (
    <div className="total-cost">
      <p>Total Cost: </p>
      <p>{"$" + calculateTotalCost(materials)}</p>
    </div>
  );
}
