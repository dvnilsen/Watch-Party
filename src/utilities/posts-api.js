import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getAllPosts() {
  return sendRequest(BASE_URL);
}

export async function createPost(data) {
    return sendRequest(`${BASE_URL}`, 'POST', data);
  }

export async function deletePost(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}