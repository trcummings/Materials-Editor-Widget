/**
 * File that contains API call helper for all fetch requests
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */

export const API_GET = "GET";
export const API_POST = "POST";
export const API_PATCH = "PATCH";
export const API_DELETE = "DELETE";

/**
 * API call helper function using the Fetch API
 *
 * @function
 * @param {string} method -- GET, POST, PATCH, or DELETE
 * @param {Object} body -- a material, or a couple of material fields
 * @param {string} id -- (NONREQUIRED) Id of the material being
 * @returns {Promise}
 *
 */
export default function apiCall(method, body = {}, id) {
  // If given an ID, append it as a URL param
  const baseApiString = `http://localhost:${process.env.PORT}/materials`;
  const apiString = id ? `${baseApiString}/${id}` : baseApiString;

  // Create a request object for the Fetch API
  const req = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  // Remove the "body" parameter if we are making a GET request
  if (method === API_GET) delete req.body;

  return fetch(apiString, req).then((res) => res.json());
}
