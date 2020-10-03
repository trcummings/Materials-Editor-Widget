import React, { useState, useEffect } from "react";

import MaterialForm from "./components/MaterialForm";
import MaterialsListItem from "./components/MaterialsListItem";
import TotalCost from "./components/TotalCost";

import getTodaysDate from "./helpers/getTodaysDate";

const defaultMaterial = {
  name: "New Material",
  cost: 0,
  volume: 0,
  color: "#44d7b6",
  deliveryDate: getTodaysDate(),
};

export default function App() {
  const [materials, setMaterials] = useState({});
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/materials", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Set materials
        setMaterials(data);
        // Set selected to first material
        if (!selectedMaterial) setSelectedMaterial(Object.keys(data)[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  const materialKeys = Object.keys(materials);

  return (
    <div>
      <div name="Title">
        <h2>Materials</h2>
      </div>
      <div className="material-buttons">
        <button
          className="rounded-button blue"
          title="Add"
          onClick={() => {
            fetch(`http://localhost:3000/materials`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(defaultMaterial),
            })
              .then((res) => res.json())
              .then((data) => {
                // Data is the newly created object, so add it into the
                // existing app state
                setMaterials(Object.assign({}, materials, { [data.id]: data }));
                // Select our newly created material to edit it.
                setSelectedMaterial(data.id);
              })
              .catch((error) => console.error(error));
          }}
        >
          <i className="fas fa-plus"></i>
          Add
        </button>
        <button
          className="rounded-button red"
          title="Delete"
          onClick={() => {
            fetch(`http://localhost:3000/materials/${selectedMaterial}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                // Response is the deleted material
                const id = data.id;
                // Create new materials object and remove the returned object from it
                const newMaterials = Object.assign({}, materials);
                delete newMaterials[id];
                // First, update selected material to be a different material, if any exist
                const newKeys = Object.keys(newMaterials);
                if (newKeys.length > 0) setSelectedMaterial(newKeys[0]);
                // Then, set new materials in app state
                setMaterials(newMaterials);
              })
              .catch((error) => console.error(error));
          }}
        >
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
              updateMaterial={(event) => {
                fetch(`http://localhost:3000/materials/${selectedMaterial}`, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    [event.target.name]: event.target.value,
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    setMaterials(
                      Object.assign({}, materials, {
                        [selectedMaterial]: data,
                      })
                    );
                  })
                  .catch((error) => console.error(error));
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
