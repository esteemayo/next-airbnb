import http from './httpService';

const apiEndpoint = '/auth/register';

export const registerUser = (credentials: any) =>
  http.post(apiEndpoint, credentials);
