import React from "react";
import { shallow } from "enzyme";

import MaterialForm from "./MaterialForm";
import { generateFakeMaterial } from "../helpers/testHelpers";

describe("MaterialForm Component", () => {
  const material = generateFakeMaterial();

  it("Does not render when given no material", () => {
    const component = shallow(<MaterialForm />);

    expect(component.html()).toBe(null);
  });

  it("Propagates id of material, name of field, and changed value on input field change", () => {
    const updateSpy = jest.fn((...args) => ({ ...args }));

    const component = shallow(
      <MaterialForm material={material} updateMaterial={updateSpy} />
    );

    Object.keys(material).forEach((key) => {
      // Can't edit id! Ignore it.
      if (key === "id") return;

      // Test each call by making a new material and using its field
      const field = component.find(`[name="${key}"]`);
      const newMaterial = generateFakeMaterial();
      const newField = newMaterial[key];

      // Simulate change event
      const fakeEvent = { target: { name: key, value: newMaterial[key] } };
      field.prop("onChange")(fakeEvent);

      // Check our spy function to see if the function passes through the correct values
      const [newId, newName, newValue] = Object.values(
        updateSpy.mock.results.pop().value
      );

      expect(newId).toBe(material.id);
      expect(newName).toBe(key);
      // NB: this test can theoretically fail if faker outputs the same
      // random string twice. It's not likely, but if you're reading this
      // because this test randomly failed, that might be why. Run it
      // again to be sure
      expect(newValue).not.toBe(material[key]);
    });
  });

  it("Doesn't allow for negative cost or volume values", () => {
    const newMaterial = Object.assign({}, material);
    // Create a spy to ad-hoc update the newMaterial for simulated onChange
    const updateSpy = jest.fn((id, name, value) => {
      newMaterial[name] = value;
    });

    const component = shallow(
      <MaterialForm material={material} updateMaterial={updateSpy} />
    );

    // Test cost field
    const costField = component.find('[name="cost"]');
    // Simulate change event
    const fakeCostEvent = { target: { name: "cost", value: -1 } };
    costField.prop("onChange")(fakeCostEvent);
    // Check that the amount is non-negative
    expect(newMaterial.cost).toBe(1);

    // Test volume field
    const volumeField = component.find('[name="volume"]');
    // Simulate change event
    const fakeVolumeEvent = { target: { name: "volume", value: -1 } };
    volumeField.prop("onChange")(fakeVolumeEvent);
    // Check that the amount is non-negative
    expect(newMaterial.volume).toBe(1);
  });
});
