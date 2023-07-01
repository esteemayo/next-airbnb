'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';

const ListingPage = () => {
  const [listings, setListings] = useState([]);

  return (
    <ClientOnly>
      <EmptyState
        title='No favorites found'
        subtitle='Looks like you have no favorite listings.'
      />
    </ClientOnly>
  );
};

export default ListingPage;
