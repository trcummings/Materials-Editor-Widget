/**
 * Simple functional wrapper for rendering all material list items, or
 * "No Materials" if there are no materials
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import React from "react";

import { MaterialsListItem } from "./MaterialsListItem";

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
 * MaterialsList
 *
 * @param {Props} props Component props
 * @param {Object.<string, Material>} props.materials - Materials dictionary
 * @param {boolean} props.selectedMaterial - The currently selected material id
 * @param {function} props.setSelectedMaterial - Callback function that takes a Material.id
 */
export default function MaterialsList({
  materials = {},
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
