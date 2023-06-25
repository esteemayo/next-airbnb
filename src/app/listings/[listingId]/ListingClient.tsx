'use client';

import { useMemo } from 'react';
import { useSession } from 'next-auth/react';

import Container from '@/components/Container';
import { categories } from '@/data';

import ListingHead from '@/components/listings/ListingHead';
import ListingInfo from '@/components/listings/ListingInfo';

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
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
