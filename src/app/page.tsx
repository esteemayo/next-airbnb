'use client';

import { useEffect, useState } from 'react';

import Container from '@/components/Container';
import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import { getListings } from '@/services/listingService';
import ListingCard from '@/components/listings/ListingCard';

const Home = () => {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    try {
      const { data } = await getListings();
      console.log(data);
      setListings(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {listings.map((listing: any) => {
            return <ListingCard key={listing._id} data={listing} />;
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
