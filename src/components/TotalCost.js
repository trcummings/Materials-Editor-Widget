import React from "react";

export default function TotalCost({ materials = [] }) {
  return (
    <div className="total-cost">
      <p>Total Cost: </p>
      <p>
        {"$" +
          Object.keys(materials).reduce(
            (acc, id) => acc + materials[id].cost * materials[id].volume,
            0
          )}
      </p>
    </div>
  );
}
