import React from "react";

import MaterialsListItem from "./MaterialsListItem";

export default function MaterialsList({
  materials,
  selectedMaterial,
  setSelectedMaterial,
}) {
  const materialIds = Object.keys(materials);

  if (materialIds.length === 0) {
    return (
      <div className="materials-list-box">
        <p>No Materials</p>
      </div>
    );
  }

  return (
    <ul className="materials-list-box">
      {materialIds.map((id) => (
        <MaterialsListItem
          key={id}
          material={materials[id]}
          isSelected={id === selectedMaterial}
          selectMaterial={setSelectedMaterial}
        />
      ))}
    </ul>
  );
}
