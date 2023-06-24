'use client';

import { useMemo } from 'react';
import { useSession } from 'next-auth/react';

import Container from '@/components/Container';
import { categories } from '@/data';
import ListingHead from '@/components/listings/ListingHead';

interface ListingClientProps {
  reservations?: Array;
  listing: object;
}

const ListingClient: React.FC<ListingClientProps> = ({
  reservations,
  listing,
}) => {
  const session = useSession();

  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className='max-w-screen-lg max-auto'>
        <div className='flex flex-col gap-6'>
          <ListingHead
            id={listing._id}
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
