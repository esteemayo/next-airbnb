import http from './httpService';

const apiEndpoint = '/reservations';

export const createReservation = (reservation: any) =>
  http.post(apiEndpoint, reservation);
