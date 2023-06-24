import http from './httpService';

const apiEndpoint = '/favorites';

export const deleteFavorite = (listingId: string) =>
  http.delete(`${apiEndpoint}/${listingId}`);
