import React from "react";
import { shallow } from "enzyme";

import App from "./App";

// Mock the Fetch API using our fake fetch.js in the __mocks__ folder
jest.mock("fetch");

describe("App", () => {
  it("Should have a default test in its .test.js file", () => {
    const component = shallow(<App />);

    expect(1).toBe(1);
  });
});
