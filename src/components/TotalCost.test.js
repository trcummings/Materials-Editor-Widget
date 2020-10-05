import React from "react";
import { shallow } from "enzyme";

import TotalCost from "./TotalCost";

describe("TotalCost Component", () => {
  it("Should render without crashing and show Total Cost: $0 when given no materials", () => {
    const component = shallow(<TotalCost />);
    const wrapper = component.find(".total-cost");

    expect(wrapper.text()).toBe("Total Cost: $0");
  });

  it.todo("Should display the correct Total Cost when given materials");
});
