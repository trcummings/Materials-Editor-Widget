/**
 * File that contains API call helper for all fetch requests
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */
import { Material } from "../types";

export const API_GET = "GET";
export const API_POST = "POST";
export const API_PATCH = "PATCH";
export const API_DELETE = "DELETE";

type APIResult = Material | { string: Material };

/**
 * API call helper function using the Fetch API
 *
 * @function
 * @param {string} method -- GET, POST, PATCH, or DELETE
 * @param {Object} body -- a material, or a couple of material fields
 * @param {string} id -- Id of the material being
 * @returns {Promise}
 *
 */
export default function apiCall(
  method: string,
  body?: Partial<Material>,
  id?: string
): Promise<APIResult> {
  // If given an ID, append it as a URL param
  const apiString = id ? `materials/${id}` : "/materials";

  // Create a request object for the Fetch API
  const headers = {
    "Content-Type": "application/json",
  };

  if (method === API_GET) {
    return fetch(apiString, {
      method,
      headers,
    }).then((res) => res.json());
  }

  return fetch(apiString, {
    method,
    headers,
    body: JSON.stringify(body || {}),
  }).then((res) => res.json());
}
