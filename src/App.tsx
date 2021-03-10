/**
 * The main component. Manages application state with React hooks, provides
 * materials data to all subcomponents, and provides callback handlers
 * to handle CRUD actions. It also provides the general layout of the app.
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import React, { useState, useEffect } from "react";

import MaterialForm from "./components/MaterialForm";
import { MaterialsList } from "./components/MaterialsList";
import { TotalCost } from "./components/TotalCost";

import { makeDefaultMaterial } from "./helpers/makeDefaultMaterial";

import apiCall, {
  API_GET,
  API_POST,
  API_PATCH,
  API_DELETE,
} from "./helpers/apiCall";

import { MaterialID, Materials } from "./types";

export const App: React.FunctionComponent = () => {
  // Create state variables and update functions with useState hooks
  const [materials, setMaterials] = useState({} as Materials);
  const [selectedMaterial, setSelectedMaterial] = useState("" as MaterialID);

  // Action functions for GET, POST, PATCH, and DELETE
  function getAllMaterials() {
    apiCall(API_GET)
      .then((data) => {
        // Set materials
        setMaterials(data);
        // Set selected to first material
        if (!selectedMaterial) setSelectedMaterial(Object.keys(data)[0]);
      })
      .catch(console.error);
  }

  function addMaterial() {
    apiCall(API_POST, makeDefaultMaterial())
      .then((data) => {
        const id = Object.keys(data)[0];
        setMaterials(Object.assign({}, materials, { [id]: data[id] }));
        // Select our newly created material to edit it.
        setSelectedMaterial(id);
      })
      .catch(console.error);
  }

  function updateMaterial(id: MaterialID, field: string, value: string) {
    const body = { [field]: value };
    const oldMaterial = materials[id];

    apiCall(API_PATCH, body, id)
      .then((data) => {
        // Pack receieved material into shape of materials state
        const newMaterials = { [id]: { ...oldMaterial, ...data[id] } };
        // Add it into our materials state
        setMaterials(Object.assign({}, materials, newMaterials));
      })
      .catch(console.error);
  }

  function deleteMaterial(id: MaterialID) {
    apiCall(API_DELETE, {}, id)
      .then((data) => {
        // Response is the deleted material, which is the only material in the dictionary
        const _id = Object.keys(data)[0];
        // Create new materials object and remove the returned object from it
        const newMaterials = Object.assign({}, materials);
        delete newMaterials[_id];
        // First, update selected material to be a different material, if any exist
        const newKeys = Object.keys(newMaterials);
        if (newKeys.length > 0) setSelectedMaterial(newKeys[0]);
        else setSelectedMaterial("");
        // Then, set new materials in app state
        setMaterials(newMaterials);
      })
      .catch(console.error);
  }

  /**
   * On Mount, grab all materials from the API and populate the state.
   *
   * NB: adding the empty array as a second argument to useEffect prevents
   * it from firing on every subsequent state update.
   */
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
          onClick={addMaterial}
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
        </div>
        <div className="material-display">
          <MaterialForm
            material={materials[selectedMaterial]}
            updateMaterial={updateMaterial}
          />
        </div>
      </div>
      <TotalCost materials={materials} />
    </div>
  );
};
