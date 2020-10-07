import React from "react";

/**
 * @typedef {import('../helpers/makeDefaultMaterial.js').Material} Material
 *
 * @typedef {Object} Props
 * @param {Material} material - Material given for list item to render
 * @param {boolean} isSelected - Lets list item know if it's selected or not
 * @param {function} selectMaterial - Callback function that takes a Material.id
 */

/**
 * List item that displays a Material's name, volume, and chosen color.
 * When clicked, it fires a click handler that passes the material.id
 * to be selected.
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
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
