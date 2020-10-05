import React from "react";

export default function MaterialsListItem({
  material,
  isSelected,
  selectMaterial,
}) {
  // No need to fire selectMaterial function if already selected
  const onClick = isSelected ? () => {} : () => selectMaterial(material.id);

  return (
    <li
      title={material.name}
      className={"materials-list-item" + (isSelected ? " selected" : "")}
      onClick={onClick}
    >
      <div
        className="material-color"
        style={{ backgroundColor: material.color }}
      />
      <div className="material-info">
        <p>{material.name}</p>
        <span>
          {material.volume.toLocaleString()} m<sup>3</sup>
        </span>
      </div>
    </li>
  );
}
