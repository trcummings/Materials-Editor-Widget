import React from "react";

export default function MaterialsListItem({
  material,
  isSelected,
  selectMaterial,
}) {
  return (
    <li
      title={material.name}
      className={"materials-list-item" + (isSelected ? " selected" : "")}
      onClick={() => selectMaterial(material.id)}
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
