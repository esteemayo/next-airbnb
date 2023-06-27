'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import { getReservations } from '@/services/reservationService';

const TripsPage = () => {
  const session = useSession();
  const [reservations, setReservations] = useState([]);

  const fetchReservations = useCallback(async () => {
    try {
      const { data } = await getReservations({ user: session?.data?.user.email });
      setReservation(data);
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchReservations();
  }, []);

  if (session.status === 'unauthenticated') {
    return (
      <ClientOnly>
        <EmptyState
          title='Unauthorized'
          subtitle='Please login'
        />
      </ClientOnly>
    );
  }

  return (
    <div>
      TripsPage
    </div>
  );
};

export default TripsPage;
