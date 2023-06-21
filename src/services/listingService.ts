import http from './httpService';

const apiEndpoint = '/listings';

export const getListings = () => http.get(apiEndpoint);

export const createListing = (listing: any) => http.post(apiEndpoint, listing);
