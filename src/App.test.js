import React from "react";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";

import { App } from "./App";
import { MaterialsList } from "./components/MaterialsList";
import MaterialForm from "./components/MaterialForm";

// Mock the Fetch API using our fake fetch.js in the __mocks__ folder
// jest.mock("fetch");

describe("App Component", () => {
  it("Should disable the delete button when there are no materials", () => {
    const component = shallow(<App />);

    const deleteButton = component.find(".rounded-button.red");

    expect(deleteButton.props().disabled).toBeTruthy();
  });

  describe("Async tests", () => {
    let component;

    beforeEach(async () => {
      // Mount and let it run its initial useEffect fetch
      await act(async () => {
        component = mount(<App />);
      });

      // Update to ensure App has the materials
      act(() => {
        component.update();
      });
    });

    // On GET check that the materials are there and that the selected material is the first ID
    it("Should pass materials from its state and the first material.id to MaterialsList's props", async () => {
      // Grab the props from the materials list
      const materialsListProps = component.find(MaterialsList).props();
      const firstMaterialId = Object.keys(materialsListProps.materials)[0];

      expect(materialsListProps.selectedMaterial).toBe(firstMaterialId);
      expect(Object.keys(materialsListProps.materials).length).toBeGreaterThan(
        0
      );
    });

    // On POST check the new material is in the state, and that the selected material is the new material
    it("Should create a new material on Add button click, and select that material", async () => {
      // Grab current materials and selectedMaterial
      const materialsListPropsPreAdd = component.find(MaterialsList).props();
      const preAddMaterials = materialsListPropsPreAdd.materials;
      const preAddSelectedMaterial = materialsListPropsPreAdd.selectedMaterial;

      // Grab Add button
      const addButton = component.find(".rounded-button.blue");

      // Simulate a click
      await act(async () => {
        return addButton.prop("onClick")();
      });

      // Update MaterialList props
      component.find(MaterialsList).update();

      // Grab new materials and selectedMaterial
      const materialsListPropsPostAdd = component.find(MaterialsList).props();
      const postAddMaterials = materialsListPropsPostAdd.materials;
      const postAddSelectedMaterial =
        materialsListPropsPostAdd.selectedMaterial;

      expect(preAddSelectedMaterial).not.toBe(postAddSelectedMaterial);
      expect(Object.keys(postAddMaterials).length).toBeGreaterThan(
        Object.keys(preAddMaterials).length
      );
    });

    // On PATCH check that the updated material is in the state
    it("Should update the selected material and reflect that change in the material state", async () => {
      // Get the current selected material
      const oldMaterialListProps = component.find(MaterialsList).props();
      const oldMaterial =
        oldMaterialListProps.materials[oldMaterialListProps.selectedMaterial];

      // Grab a form field
      const nameFormField = component.find(MaterialForm).find("[name='name']");

      // Simulate a name update
      await act(async () => {
        const event = { target: { name: "name", value: "Hggghg!!!ssadkj" } };
        return nameFormField.prop("onChange")(event);
      });

      // Update the materials list props
      component.find(MaterialsList).update();

      const newMaterialListProps = component.find(MaterialsList).props();
      const currentMateral =
        newMaterialListProps.materials[newMaterialListProps.selectedMaterial];

      expect(oldMaterial).not.toBe(currentMateral);
    });

    // On DELETE check, check that it's gone from the materials and the selected material is something else
    it("Should delete the selected material and select the first one in the new material state", async () => {
      // Grab current materials and selectedMaterial
      const materialsListPropsPreDelete = component.find(MaterialsList).props();
      const preDeleteMaterials = materialsListPropsPreDelete.materials;
      const preDeleteSelectedMaterial =
        materialsListPropsPreDelete.selectedMaterial;

      // Grab Delete button
      const deleteButton = component.find(".rounded-button.red");

      // simulate a click
      await act(async () => {
        return deleteButton.prop("onClick")();
      });

      // update MaterialList props
      component.find(MaterialsList).update();

      // Grab new materials and selectedMaterial
      const materialsListPropsPostDelete = component
        .find(MaterialsList)
        .props();
      const postDeleteMaterials = materialsListPropsPostDelete.materials;
      const postDeleteSelectedMaterial =
        materialsListPropsPostDelete.selectedMaterial;

      expect(preDeleteSelectedMaterial).not.toBe(postDeleteSelectedMaterial);
      expect(Object.keys(postDeleteMaterials).length).toBeLessThan(
        Object.keys(preDeleteMaterials).length
      );
    });
  });
});
