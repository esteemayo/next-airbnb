'use client';

import Container from '@/components/Container';
import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import getListings from '@/actions/getListings';

const Home = async () => {
  const listings = await getListings();

  const isEmpty = true;

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
        <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          <div>My future listings</div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
