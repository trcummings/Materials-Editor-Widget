import React from "react";

export default function MaterialForm({ material, updateMaterial = () => {} }) {
  // Do not render if we do not have a material
  if (!material) return null;

  function wrappedUpdate(event) {
    updateMaterial(material.id, event.target.name, event.target.value);
  }

  return (
    <div className="material-form group">
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
    </div>
  );
}
