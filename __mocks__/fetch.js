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
        json: () => Promise.resolve(generateFakeMaterials(5)),
      });

    case API_POST:
      return Promise.resolve({
        json: () => {
          const id = faker.random.uuid();
          return Promise.resolve({
            [id]: Object.assign({}, JSON.parse(req.body), { id }),
          });
        },
      });

    case API_PATCH:
      return Promise.resolve({
        json: () => Promise.resolve(JSON.parse(req.body)),
      });

    case API_DELETE:
      // get id from url
      const splitUrl = url.split("/");
      const id = splitUrl[splitUrl.length - 1];

      return Promise.resolve({
        json: () =>
          Promise.resolve({
            [id]: Object.assign({}, JSON.parse(req.body), {
              id,
            }),
          }),
      });

    default:
      return Promise.reject("Garbage input for fetch call");
  }
}
