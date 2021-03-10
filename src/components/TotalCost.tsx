/**
 * Functional component that displays the total cost of all materials
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import React from "react";

import calculateTotalCost from "../helpers/calculateTotalCost";

import { Materials } from "../types";

interface TotalCost {
  materials: Materials;
}

/**
 * TotalCost
 *
 * @param {Props} props Component props
 * @param {Materials} props.materials - Materials dictionary
 */
export const TotalCost: React.FunctionComponent<TotalCost> = ({
  materials = {},
}) => (
  <div className="total-cost">
    <p>Total Cost: </p>
    <p>{"$" + calculateTotalCost(materials)}</p>
  </div>
);
