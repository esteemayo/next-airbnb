import http from './httpService';

const apiEndpoint = '/reservations';

export const getReservations = (query: any) => http.get(apiEndpoint, query);

export const createReservation = (reservation: any) =>
  http.post(apiEndpoint, reservation);

export const deleteReservation = (reservationId: string) =>
  http.delete(`${apiEndpoint}/${reservationId}`);
