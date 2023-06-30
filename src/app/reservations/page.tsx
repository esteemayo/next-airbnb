'use client';

import { useSession } from 'next-auth/react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';

import { getReservations } from '@/services/reservationService';

const ReservationsPage = () => {
  return (
    <div>
      Reservations Page
    </div>
  );
};

export default ReservationsPage;
