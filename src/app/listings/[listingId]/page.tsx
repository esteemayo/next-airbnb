'use client';

import { toast } from 'react-hot-toast';
import { useCallback, useEffect, useState } from 'react';

import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';

import ListingClient from './ListingClient';
import { getReservations } from '@/services/reservationService';
import { getListing } from '@/services/listingService';

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const [listing, setListing] = useState({});
  const [reservations, setReservations] = useState([]);

  const fetchListing = useCallback(async () => {
    try {
      const { data } = await getListing(params.listingId);
      setListing(data);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  }, [params.listingId]);

  const fetchReservation = useCallback(async () => {
    try {
      const { data } = await getReservations(params);
      setReservations(data);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  }, [params]);

  useEffect(() => {
    params.listingId && fetchListing();
  }, [params.listingId, fetchListing]);

  useEffect(() => {
    params && fetchReservation();
  }, [params, fetchReservation]);

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
