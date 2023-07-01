'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';

import { getFavorites } from '@/services/favoriteService';

const ListingPage = () => {
  const [listings, setListings] = useState([]);

  const fetchListings = useCallback(async () => {
    try {
      const { data } = await getFavorites();
      setListings(data);
    } catch (err: any) {
      console.log(err);
    }
  }, []);

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
