/**
 * List item that displays a Material's name, volume, and chosen color.
 * When clicked, it fires a click handler that passes the material.id
 * to be selected.
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import React from "react";

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
 * MaterialsListItem
 *
 * @param {Props} props Component props
 * @param {Material} props.material - Material given for list item to render
 * @param {boolean} props.isSelected - Lets list item know if it's selected or not
 * @param {function} props.selectMaterial - Callback function that takes a Material.id
 */
export default function MaterialsListItem({
  material = {},
  isSelected = false,
  selectMaterial = () => {},
}) {
  // No need to fire selectMaterial function if already selected
  const onClick = isSelected ? () => {} : () => selectMaterial(material.id);
  // In the unlikely event we don't have a material, we don't want to hard crash
  const volume = material.volume || "";

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
          {volume.toLocaleString()} m<sup>3</sup>
        </span>
      </div>
    </li>
  );
}
