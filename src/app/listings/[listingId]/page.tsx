'use client';

import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

import { getListing } from '@/services/listingService';

interface IParams {
  listingId?: string;
}

const ListingPage = ({ params }: { params: IParams }) => {
  const [listing, setListing] = useState({});
  const { listingId } = params;

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

  return <div>ListingPage</div>;
};

export default ListingPage;
