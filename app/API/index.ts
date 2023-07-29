import axios, { AxiosInstance } from 'axios';
import { baseURL, isRTL } from '../common';

 export const AXIOS = (token = '', isForm = false): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
    },
  });

  if (isForm) {
    instance.defaults.headers['Content-Type'] = 'multipart/form-data';
  } else {
    instance.defaults.headers['Content-Type'] = 'application/json';
  }

  // Add an authorization interceptor
  instance.interceptors.request.use(
    (config) => {
      console.log(JSON.stringify(config));
      
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error('Request Interceptor - Error:', error);
      return Promise.reject(error);
    },
  );

  return instance;
};
