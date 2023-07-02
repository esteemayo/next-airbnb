'use client';

import { useEffect, useState } from 'react';

import ClientOnly from '@/components/ClientOnly';
import Container from '@/components/Container';
import ListingCard from '@/components/listings/ListingCard';
import EmptyState from '@/components/EmptyState';

import { getListings } from '@/services/listingService';
import { IListingsParams } from '@/actions/getListings';

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = ({ searchParams }: HomeProps) => {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    try {
      const { data } = await getListings(searchParams);
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
