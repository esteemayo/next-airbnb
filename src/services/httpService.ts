import axios from 'axios';
import { toast } from 'react-hot-toast';

import logger from './logService';

const authFetch = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

authFetch.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error('An unexpected error occurred');
  }

  return Promise.reject(error);
});

const http = {
  get: authFetch.get,
  post: authFetch.post,
  patch: authFetch.patch,
  delete: authFetch.delete,
};

export default http;
