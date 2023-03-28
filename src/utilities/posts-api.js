import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getAllPosts() {
  return sendRequest(BASE_URL);
}

export async function createPost(data) {
    return sendRequest(`${BASE_URL}/new`, 'POST', data);
  }