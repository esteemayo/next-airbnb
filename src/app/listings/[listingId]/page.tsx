'use client';

import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

import ClientOnly from '@/components/ClientOnly';
import { getListing } from '@/services/listingService';
import ListingClient from './ListingClient';
import EmptyState from '@/components/EmptyState';

interface IParams {
  listingId?: string;
}

const ListingPage = ({ params }: { params: IParams }) => {
  const { listingId } = params;
  const [listing, setListing] = useState({});

  const fetchListing = async () => {
    try {
      const { data } = await getListing(listingId);
      setListing(data);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    listingId && fetchListing();
  }, [listingId]);

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
