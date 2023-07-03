import http from './httpService';

const apiEndpoint = '/listings';

const listingUrl = (listingId: string) => `${apiEndpoint}/${listingId}`;

export const getListings = () => http.get(apiEndpoint);

export const getListing = (listingId: string) =>
  http.get(listingUrl(listingId));

export const createListing = (listing: any) => http.post(apiEndpoint, listing);

export const deleteListing = (listingId: string) =>
  http.delete(`${apiEndpoint}/${listingId}`);
