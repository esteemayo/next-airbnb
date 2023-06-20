import http from './httpService';

const apiEndpoint = '/listings';

export const createListing = (listing: string) =>
  http.post(apiEndpoint, listing);
