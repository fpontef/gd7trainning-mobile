import axios from 'axios';

export const api = axios.create({
  /* Android emulator use ip addr: 10.0.2.2 instead of localhost */
  //baseURL: 'http://10.0.2.2:8000/api/',
  baseURL: 'https://60da7a8a5f7bf10017547af6.mockapi.io/api/',
});
