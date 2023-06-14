import http from './httpService';

const apiEndpoint = '/auth/register';

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export const registerUser = (credentials: RegisterInput) =>
  http.post(apiEndpoint, credentials);
