import React, { useState, useEffect } from "react";

import MaterialForm from "./components/MaterialForm";
import MaterialsList from "./components/MaterialsList";
import TotalCost from "./components/TotalCost";

import getTodaysDate from "./helpers/getTodaysDate";

const defaultMaterial = {
  name: "New Material",
  cost: 0,
  volume: 0,
  color: "#44d7b6",
  deliveryDate: getTodaysDate(),
};

const API_STRING = "http://localhost:3000/materials";

export default function App() {
  const [materials, setMaterials] = useState({});
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  function getAllMaterials() {
    fetch(API_STRING, {
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
  }

  function addMaterial() {
    fetch(API_STRING, {
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
  }

  function updateMaterial(id, field, value) {
    fetch(`${API_STRING}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [field]: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMaterials(
          Object.assign({}, materials, {
            [id]: data,
          })
        );
      })
      .catch((error) => console.error(error));
  }

  function deleteMaterial(id) {
    fetch(`${API_STRING}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Response is the deleted material
        const _id = data.id;
        // Create new materials object and remove the returned object from it
        const newMaterials = Object.assign({}, materials);
        delete newMaterials[_id];
        // First, update selected material to be a different material, if any exist
        const newKeys = Object.keys(newMaterials);
        if (newKeys.length > 0) setSelectedMaterial(newKeys[0]);
        else setSelectedMaterial(null);
        // Then, set new materials in app state
        setMaterials(newMaterials);
      })
      .catch((error) => console.error(error));
  }

  // On Mount, grab all materials from the API and populate the state with them
  // NB: adding the empty array as a second argument to useEffect prevents
  // it from firing on every subsequent state update.
  useEffect(() => {
    getAllMaterials();
  }, []);

  return (
    <div>
      <h2>Materials</h2>
      <div className="material-buttons">
        <button
          className="rounded-button blue"
          title="Add"
          onClick={() => addMaterial()}
        >
          <i className="fas fa-plus"></i>
          Add
        </button>
        <button
          className="rounded-button red"
          title="Delete"
          onClick={() => deleteMaterial(selectedMaterial)}
          disabled={Object.keys(materials).length === 0}
        >
          <i className="fas fa-trash"></i>
          Delete
        </button>
      </div>
      <div className="materials-editor">
        <div className="materials-list">
          <MaterialsList
            materials={materials}
            selectedMaterial={selectedMaterial}
            setSelectedMaterial={setSelectedMaterial}
          />
          <TotalCost materials={materials} />
        </div>
        <div className="material-display">
          {selectedMaterial && (
            <MaterialForm
              material={materials[selectedMaterial]}
              updateMaterial={(event) =>
                updateMaterial(
                  selectedMaterial,
                  event.target.name,
                  event.target.value
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
