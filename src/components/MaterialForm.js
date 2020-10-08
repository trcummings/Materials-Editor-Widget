import React from "react";

function validateField(name, value) {
  switch (name) {
    case "volume":
    case "cost":
      // Volume and cost must be non-negative numbers no matter what
      return Math.abs(value);

    default:
      return value;
  }
}

export default function MaterialForm({ material, updateMaterial = () => {} }) {
  // Do not render if we do not have a material
  if (!material) return null;

  // simple function to decompose the event and validate field input
  function wrappedUpdate(event) {
    const { name, value } = event.target;
    const newValue = validateField(name, value);

    updateMaterial(material.id, name, newValue);
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
}
