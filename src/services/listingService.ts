import http from './httpService';

const apiEndpoint = '/listings';

export const getListings = () => http.get(apiEndpoint);

export const getListing = (listingId: string) =>
  http.get(`${apiEndpoint}/${listingId}`);

export const createListing = (listing: any) => http.post(apiEndpoint, listing);
