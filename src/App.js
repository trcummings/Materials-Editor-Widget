import React, { useState, useEffect } from "react";

import MaterialForm from "./components/MaterialForm";
import MaterialsListItem from "./components/MaterialsListItem";
import TotalCost from "./components/TotalCost";

const defaultMaterial = {
  name: "New Material",
  cost: 0,
  volume: 0,
  color: "#44d7b6",
  deliveryDate: null,
};

export default function App() {
  const [materials, setMaterials] = useState({});
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/materials", {
      method: "GET",
      header: new Headers(),
    })
      .then((res) => res.json())
      .then((data) => {
        // Set materials
        setMaterials(data);
        // Set selected to first material
        if (!selectedMaterial) setSelectedMaterial(Object.keys(materials)[0]);
      })
      .catch((error) => console.error(error));
  }, [selectedMaterial]);

  const materialKeys = Object.keys(materials);

  return (
    <div>
      <div name="Title">
        <h2>Materials</h2>
      </div>
      <div className="material-buttons">
        <button className="rounded-button blue" title="Add">
          <i className="fas fa-plus"></i>
          Add
        </button>
        <button className="rounded-button red" title="Delete">
          <i className="fas fa-trash"></i>
          Delete
        </button>
      </div>
      <div className="materials-editor">
        <div className="materials-list">
          <ul>
            {materialKeys.length > 0 ? (
              materialKeys.map((id) => (
                <MaterialsListItem
                  key={id}
                  material={materials[id]}
                  isSelected={id === selectedMaterial}
                  selectMaterial={setSelectedMaterial}
                />
              ))
            ) : (
              <p>No Materials</p>
            )}
          </ul>
          <TotalCost materials={materials} />
        </div>
        <div className="material-display">
          {selectedMaterial && (
            <MaterialForm
              material={materials[selectedMaterial]}
              updateMaterial={(event) =>
                console.log(event.target.name + " " + event.target.value)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
