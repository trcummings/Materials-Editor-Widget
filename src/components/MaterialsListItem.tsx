/**
 * List item that displays a Material's name, volume, and chosen color.
 * When clicked, it fires a click handler that passes the material.id
 * to be selected.
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import React from "react";

import { Material, MaterialID } from "../types";

interface MaterialsListItem {
  material: Material;
  isSelected: boolean;
  selectMaterial: (id: MaterialID) => void;
}

/**
 * MaterialsListItem
 *
 * @param {Props} props Component props
 * @param {Material} props.material - Material given for list item to render
 * @param {boolean} props.isSelected - Lets list item know if it's selected or not
 * @param {function} props.selectMaterial - Callback function that takes a Material.id
 */
export const MaterialsListItem: React.FunctionComponent<MaterialsListItem> = ({
  material,
  isSelected = false,
  selectMaterial = () => {},
}) => {
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
};
