'use client';

import { useSession } from 'next-auth/react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';

const TripsPage = () => {
  const session = useSession();

  return (
    <div>
      TripsPage
    </div>
  );
};

export const TripsPage;
