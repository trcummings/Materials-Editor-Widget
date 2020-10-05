import React from "react";

import MaterialsListItem from "./MaterialsListItem";

export default function MaterialsList({
  materials,
  selectedMaterial,
  setSelectedMaterial,
}) {
  const materialIds = Object.keys(materials);

  if (materialIds.length === 0) return <p>No Materials</p>;

  return (
    <ul>
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
