import React from "react";
import { shallow } from "enzyme";

import TotalCost from "./TotalCost";
import { generateFakeMaterials } from "../helpers/testHelpers";
import calculateTotalCost from "../helpers/calculateTotalCost";

describe("TotalCost Component", () => {
  it("Should render without crashing and show Total Cost: $0 when given no materials", () => {
    const component = shallow(<TotalCost />);
    const wrapper = component.find(".total-cost");

    expect(wrapper.text()).toBe("Total Cost: $0");
  });

  it("Should display the correct Total Cost when given materials", () => {
    const materials = generateFakeMaterials(5);
    const component = shallow(<TotalCost materials={materials} />);
    const wrapper = component.find(".total-cost");

    // Regex for matching floats in text strings
    const regex = /[+-]?\d+(\.\d+)?/g;
    // Grab string from internal text, match on regex, and parse it
    const renderedTotalCost = wrapper
      .text()
      .match(regex)
      .map((t) => parseFloat(t))[0];

    // Calculate the total cost from the helper function
    const totalCost = calculateTotalCost(materials);

    expect(renderedTotalCost).toBe(totalCost);
  });
});
