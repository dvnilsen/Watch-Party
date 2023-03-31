import sendRequest from "./send-request";
const BASE_URL = '/api/movies';

export async function search(searchTerm) {
  return sendRequest(`${BASE_URL}/?Search=${searchTerm}`);
}

export async function createMovie(data) {
    return sendRequest(`${BASE_URL}`, 'POST', data);
  }

export async function getMovieDetail(imdbID) {
return sendRequest(`${BASE_URL}/${imdbID}`);
}

export async function getLibrary() {
    return sendRequest(`${BASE_URL}/library`);
  }

