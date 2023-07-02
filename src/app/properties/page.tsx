'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import { getReservations } from '@/services/reservationService';

import TripsClient from './TripsClient';

const PropertiesPage = () => {
  const session = useSession();
  const [listings, setListings] = useState([]);

  const user = session?.data?.user.email;

  const fetchListings = useCallback(async () => {
    try {
      const { data } = await getReservations(user);
      setListings(data);
    } catch (err: any) {
      console.log(err);
    }
  }, [user]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  if (session.status === 'unauthenticated') {
    return (
      <ClientOnly>
        <EmptyState title='Unauthorized' subtitle='Please login' />
      </ClientOnly>
    );
  }

  if (listings.length === 0) {
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

export default PropertiesPage;
