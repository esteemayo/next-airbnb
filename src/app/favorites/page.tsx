'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';

import FavoritesClient from './FavoritesClient';
import { getFavorites } from '@/services/favoriteService';

const ListingPage = () => {
  const session = useSession();
  const [listings, setListings] = useState([]);

  const fetchListings = useCallback(async () => {
    try {
      const { data } = await getFavorites();
      setListings(data);
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No favorites found'
          subtitle='Looks like you have no favorite listings.'
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={session}
      />
    </ClientOnly>
  );
};

export default ListingPage;
