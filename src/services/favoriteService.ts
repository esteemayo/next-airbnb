import http from './httpService';

const apiEndpoint = '/favorites';

const favoriteUrl = (listingId: string) => `${apiEndpoint}/${listingId}`;

export const getFavorites = () => http.get(apiEndpoint);

export const createFavorite = (listingId: string) =>
  http.post(favoriteUrl(listingId));

export const deleteFavorite = (listingId: string) =>
  http.delete(favoriteUrl(listingId));
