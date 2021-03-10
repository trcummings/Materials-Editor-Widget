/**
 * Simple functional form for editing a material, or rendering nothing
 * if not given a material
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import React from "react";

import { Material, MaterialID } from "../types";

/**
 * Dead simple form field validation function to pass along properly formatted
 * input to our updateMaterial function.
 *
 * @param {string} name -- Name of field (named property of Material)
 * @param {string|number} value - Updated value of field
 * @returns {string|number}
 */
function validateField(name: string, value: string | number): string | number {
  switch (name) {
    case "volume":
    case "cost":
      // Volume and cost must be non-negative numbers no matter what
      return Math.abs(value as number);

    default:
      return value;
  }
}

interface MaterialForm {
  material: Material;
  updateMaterial: (
    id: MaterialID,
    name: string,
    value: string | number
  ) => void;
}

/**
 * MaterialForm
 *
 * @param {Props} props Component props
 * @param {Material} props.material - The material we are currently editing
 * @param {function} props.updateMaterial - Callback function that takes a Material.id, the name of the field in question, and its updated value
 */
export const MaterialForm: React.FunctionComponent<MaterialForm> = ({
  material,
  updateMaterial,
}) => {
  // Do not render if we do not have a material
  if (!material) return null;

  // simple function to decompose the event and validate field input
  function wrappedUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target) {
      const { name, value } = event.target;
      const newValue = validateField(name, value);

      updateMaterial(material.id, name, newValue);
    }
  }

  return (
    <form className="material-form group">
      <div className="material-form-field">
        <label>
          Name
          <input
            name="name"
            type="text"
            value={material.name}
            onChange={wrappedUpdate}
          />
        </label>
      </div>
      <div className="material-form-field">
        <label>
          Color
          <input
            name="color"
            type="color"
            value={material.color}
            onChange={wrappedUpdate}
          />
        </label>
      </div>
      <div className="material-form-field">
        <label>
          Volume (m<sup>3</sup>)
          <input
            name="volume"
            type="number"
            min="0"
            value={material.volume}
            onChange={wrappedUpdate}
          />
        </label>
      </div>
      <div className="material-form-field">
        <label>
          Cost (USD per m<sup>3</sup>)
          <input
            name="cost"
            type="number"
            min="0"
            value={material.cost}
            onChange={wrappedUpdate}
          />
        </label>
      </div>
      <div className="material-form-field">
        <label>
          Delivery Date
          <input
            name="deliveryDate"
            type="date"
            value={material.deliveryDate}
            onChange={wrappedUpdate}
          />
        </label>
      </div>
    </form>
  );
};
