import axios from 'axios';

export const request = (config) => {
  const instance = axios.create({
    baseURL: 'http://admintest.happymmall.com',
    timeout: 5000,
  })
  return instance(config);
}
