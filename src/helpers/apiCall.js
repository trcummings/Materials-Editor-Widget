export const API_STRING = "http://localhost:3000/materials";

export const API_GET = "GET";
export const API_POST = "POST";
export const API_PATCH = "PATCH";
export const API_DELETE = "DELETE";

export default function apiCall(method, body = {}, id) {
  // If given an ID, append it as a URL param
  const apiString = id ? `${API_STRING}/${id}` : API_STRING;

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