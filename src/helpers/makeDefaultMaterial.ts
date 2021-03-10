/**
 * File that contains helpers to create a generic new material
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import { getTodaysDate } from "./getTodaysDate";

import { Material } from "../types";

/**
 * Creates a generic Material (to be used to create a new one via POST request).
 *
 * @function
 * @returns {Material}
 * @example
 * const newMaterial = makeDefaultMaterial();
 */
export function makeDefaultMaterial(): Partial<Material> {
  return {
    name: "New Material",
    cost: 0,
    volume: 0,
    color: "#44d7b6",
    deliveryDate: getTodaysDate(),
  };
}
