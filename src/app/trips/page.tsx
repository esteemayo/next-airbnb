'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import { getReservations } from '@/services/reservationService';

import TripsClient from './TripsClient';

const TripsPage = () => {
  const session = useSession();
  const [reservations, setReservations] = useState([]);

  const user = session?.data?.user.email;

  const fetchReservations = useCallback(async () => {
    try {
      const { data } = await getReservations(user);
      setReservations(data);
    } catch (err: any) {
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
          title='No trips found'
          subtitle='Looks like you havent reserved any trips.'
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={session} />
    </ClientOnly>
  );
};

export default TripsPage;
