import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://127.0.0.1:8000/api/',
  baseURL: 'https://60da7a8a5f7bf10017547af6.mockapi.io/api/',
});
