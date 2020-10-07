import faker from "faker";

import { generateFakeMaterials } from "../src/helpers/testHelpers";
import {
  API_GET,
  API_POST,
  API_PATCH,
  API_DELETE,
} from "../src/helpers/apiCall";

// Mock the fetch function
export default function fetch(url, req) {
  switch (req.method) {
    case API_GET:
      return Promise.resolve({
        json: () => Promise.resolve(this.materials),
      });

    case API_POST:
      const id = faker.random.uuid();

      return Promise.resolve({
        json: () => Promise.resolve(Object.assign({}, req.body, { id })),
      });

    case API_PATCH:
    case API_DELETE:
      return Promise.resolve({
        json: () => Promise.resolve(req.body),
      });

    default:
      return Promise.reject("Garbage input for fetch call");
  }
}

// Generate the test materials at runtime so we can check them against
// App.js's GET request
fetch.materials = generateFakeMaterials(5);
