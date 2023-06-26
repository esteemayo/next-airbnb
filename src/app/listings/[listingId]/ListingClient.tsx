'use client';

import { useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import ListingHead from '@/components/listings/ListingHead';
import Container from '@/components/Container';
import ListingInfo from '@/components/listings/ListingInfo';

import { categories } from '@/data';
import useLoginModal from '@/hooks/useLoginModal';

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

interface ListingClientProps {
  reservations?: Array;
  listing: object;
}

const ListingClient: React.FC<ListingClientProps> = ({
  reservations = [],
  listing,
}) => {
  const router = useRouter();
  const session = useSession();

  const loginModal = useLoginModal();

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
