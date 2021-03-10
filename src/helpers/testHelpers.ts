/**
 * File that contains helpers for generating test data with Faker.js
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import faker from "faker";

import { formatDateInput } from "./getTodaysDate";

import { Material, MaterialID } from "../types";

/**
 * Function to generate a dictionary of fake materials keyed by id for
 * testing purposes. returns an empty dictionary if given 0 numMaterials
 * or a negative amount (who does that?)
 *
 * @function
 * @param {number} numMaterials
 * @returns {Object.<MaterialID, Material>}
 * @example
 * const fakeMaterialsEmpty = generateFakeMaterials(0);
 * const fakeMaterials = generateFakeMaterials(5);
 */
export function generateFakeMaterials(
  numMaterials: number = 0
): Record<MaterialID, Material> {
  let _numMaterials = numMaterials;
  if (_numMaterials < 0) _numMaterials = 0;

  const result: Record<MaterialID, Material> = {};

  for (let i = 0; i < _numMaterials; i++) {
    const material = generateFakeMaterial();
    result[material.id] = material;
  }

  return result;
}

/**
 * Function to generate a fake materials for testing purposes
 *
 * @function
 * @returns {Material}
 * @example
 * const fakeMaterial = generateFakeMaterial();
 */
export function generateFakeMaterial(): Material {
  return {
    id: faker.random.uuid() as MaterialID,
    name: faker.random.word(),
    color: faker.internet.color(),
    cost: parseFloat(`${faker.random.float()}`.slice(-4)),
    volume: faker.random.number(),
    deliveryDate: formatDateInput(faker.date.future()),
  };
}
