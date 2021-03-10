/**
 * Simple functional wrapper for rendering all material list items, or
 * "No Materials" if there are no materials
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import React from "react";

import { MaterialsListItem } from "./MaterialsListItem";

import { MaterialID, Materials } from "../types";

interface MaterialsList {
  materials: Materials;
  selectedMaterial: MaterialID;
  setSelectedMaterial: (id: MaterialID) => void;
}

/**
 * MaterialsList
 *
 * @param {Props} props Component props
 * @param {Materials} props.materials - Materials dictionary
 * @param {boolean} props.selectedMaterial - The currently selected material id
 * @param {function} props.setSelectedMaterial - Callback function that takes a Material.id
 */
export const MaterialsList: React.FunctionComponent<MaterialsList> = ({
  materials = {},
  selectedMaterial,
  setSelectedMaterial,
}) => {
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
};
