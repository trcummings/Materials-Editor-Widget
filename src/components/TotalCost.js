import React from "react";

import calculateTotalCost from "../helpers/calculateTotalCost";

export default function TotalCost({ materials = {} }) {
  return (
    <div className="total-cost">
      <p>Total Cost: </p>
      <p>{"$" + calculateTotalCost(materials)}</p>
    </div>
  );
}
