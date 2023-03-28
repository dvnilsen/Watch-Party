import sendRequest from "./send-request";
const BASE_URL = '/api/movies';

export async function search(searchTerm) {
  return sendRequest(`${BASE_URL}/?Search=${searchTerm}`);
}

