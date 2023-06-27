'use client';

import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';

const TripsPage = () => {
  const session = useSession();
  const [reservations, setReservations] = useState([]);

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

export const TripsPage;
