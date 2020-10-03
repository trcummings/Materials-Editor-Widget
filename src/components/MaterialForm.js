import React from "react";

import useDebounce from "../helpers/useDebounce";

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )
 */
export default function MaterialForm({ material, updateMaterial }) {
  // const debouncedUpdate = useDebounce(updateMaterial, 40);

  return (
    <div className="material-form">
      <div className="material-form-field">
        <label>
          Name
          <input
            name="name"
            type="text"
            value={material.name}
            onChange={updateMaterial}
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
            onChange={updateMaterial}
          />
        </label>
      </div>
      <div className="material-form-field">
        <label>
          Volume (m<sup>3</sup>)
          <input
            name="volume"
            type="number"
            value={material.volume}
            onChange={updateMaterial}
          />
        </label>
      </div>
      <div className="material-form-field">
        <label>
          Cost (USD per m<sup>3</sup>)
          <input
            name="cost"
            type="number"
            value={material.cost}
            onChange={updateMaterial}
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
            onChange={updateMaterial}
          />
        </label>
      </div>
    </div>
  );
}
