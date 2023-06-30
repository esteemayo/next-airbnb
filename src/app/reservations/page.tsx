'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import ReservationsClient from './ReservationsClient';

import { getReservations } from '@/services/reservationService';

const ReservationsPage = () => {
  const session = useSession();
  const [reservations, setReservations] = useState([]);

  const user = session?.data?.user.email;

  const fetchReservations = useCallback(async () => {
    try {
      const { data } = await getReservations({ authorId: user });
      setReservations(data);
    } catch(err: any) {
      console.log(err);
    }
  }, [user]);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  if (session.status === 'unauthenticated') {
    return (
      <ClientOnly>
        <EmptyState title='Unauthorized' subtitle='Please login' />
      </ClientOnly>
    );
  }
  
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No reservations found'
          subtitle='Looks like you have no reservations on your property'
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={session}
      />
    </ClientOnly>
  );
};

export default ReservationsPage;
