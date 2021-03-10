import React from "react";
import { shallow } from "enzyme";

import MaterialsList from "./MaterialsList";
import { MaterialsListItem } from "./MaterialsListItem";
import { generateFakeMaterials } from "../helpers/testHelpers";

describe("MaterialsList Component", () => {
  it("Renders 'No Materials' when no materials are passed in", () => {
    const component = shallow(<MaterialsList />);
    const wrapper = component.find(".materials-list-box");

    expect(wrapper.text()).toBe("No Materials");
  });

  it("Renders the correct number of MaterialListItems when given materials", () => {
    const materials = generateFakeMaterials(5);
    const component = shallow(<MaterialsList materials={materials} />);
    const wrapper = component.find(MaterialsListItem);

    expect(wrapper).toHaveLength(5);
  });

  it("Passes the selected MaterialListItem a 'true' isSelected prop", () => {
    const materials = generateFakeMaterials(5);
    // Pick the first generated material and grab its ID
    const selectedMaterialId = Object.keys(materials)[0];

    const component = shallow(
      <MaterialsList
        materials={materials}
        selectedMaterial={selectedMaterialId}
      />
    );

    // Find the MaterialsListItem with isSelected={true}
    const selectedItem = component
      .find(MaterialsListItem)
      .findWhere((n) => n.props().isSelected);

    expect(selectedItem.props().material.id).toBe(selectedMaterialId);
  });
});
