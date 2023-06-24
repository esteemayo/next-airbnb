import http from './httpService';

const apiEndpoint = '/favorites';

export const createFavorite = (listingId: string) =>
  http.post(`${apiEndpoint}/${listingId}`);

export const deleteFavorite = (listingId: string) =>
  http.delete(`${apiEndpoint}/${listingId}`);
