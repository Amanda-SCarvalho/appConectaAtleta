import axios from 'axios';

// eslint-disable-next-line import/no-named-as-default-member
export const api = axios.create({
  baseURL: 'http://192.168.0.10:3333',
});