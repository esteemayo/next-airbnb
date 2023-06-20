import http from './httpService';

const apiEndpoint = '/listings';

export const createListing = (listing: any) =>
  http.post(apiEndpoint, listing);
