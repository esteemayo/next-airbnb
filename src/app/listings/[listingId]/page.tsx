'use client';

import { toast } from 'react-hot-toast';
import { useCallback, useEffect, useState } from 'react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';

import ListingClient from './ListingClient';
import { getListing } from '@/services/listingService';

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const [listing, setListing] = useState({});

  const fetchListing = useCallback(async () => {
    try {
      const { data } = await getListing(params.listingId);
      setListing(data);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  }, [params.listingId]);

  useEffect(() => {
    params.listingId && fetchListing();
  }, [params.listingId, fetchListing]);

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient listing={listing} />
    </ClientOnly>
  );
};

export default ListingPage;
