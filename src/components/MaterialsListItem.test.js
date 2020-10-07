import React from "react";
import { shallow } from "enzyme";

import MaterialsListItem from "./MaterialsListItem";
import { generateFakeMaterial } from "../helpers/testHelpers";

describe("MaterialsListItem Component", () => {
  // generate test material to check against
  const material = generateFakeMaterial();

  it("Should display as selected when told it is selected and vice versa", () => {
    const selectedComponent = shallow(
      <MaterialsListItem material={material} isSelected />
    ).find(".selected");

    const nonSelectedComponent = shallow(
      <MaterialsListItem material={material} isSelected={false} />
    ).find(".selected");

    expect(selectedComponent).toHaveLength(1);
    expect(nonSelectedComponent).toHaveLength(0);
  });

  it("Should render the proper material-color component with its given color", () => {
    const component = shallow(<MaterialsListItem material={material} />);

    // find our material color display
    const wrapper = component.find("div.material-color");
    const materialColorStyle = wrapper.props().style;

    expect(materialColorStyle.backgroundColor).toBe(material.color);
  });

  it("Should run selectMaterial callback with its material id when clicked and not selected", () => {
    const mockSelectMaterial = jest.fn((v) => v).mockName("selectMaterial");
    const component = shallow(
      <MaterialsListItem
        material={material}
        selectMaterial={mockSelectMaterial}
        isSelected={false}
      />
    );

    // click our component
    component.simulate("click");

    // check if the function was called with the material id
    const clickResult = mockSelectMaterial.mock.results[0].value;
    expect(clickResult).toBe(material.id);
  });

  it("Should not run its selectMaterial callback when selected", () => {
    const mockSelectMaterial = jest.fn().mockName("selectMaterial");
    const component = shallow(
      <MaterialsListItem
        material={material}
        selectMaterial={mockSelectMaterial}
        isSelected
      />
    );

    // click our component
    component.simulate("click");

    // check how many times the mock function was run
    const numClicks = mockSelectMaterial.mock.results.length;
    expect(numClicks).toBe(0);
  });
});
