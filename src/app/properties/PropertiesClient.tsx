'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useCallback, useState } from 'react';

import Heading from '@/components/Heading';
import ListingCard from '@/components/listings/ListingCard';
import Container from '@/components/Container';
import { deleteReservation } from '@/services/reservationService';

interface PropertiesClientProps {
  listings: [];
  currentUser?: object | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback(
    async (id: string) => {
      setDeletingId(id);

      try {
        await deleteReservation(id);
        toast.success('listing deleted');
        router.refresh();
      } catch (err: any) {
        toast.error(err?.response?.data?.error);
      } finally {
        setDeletingId('');
      }
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title='Properties'
        subtitle='List of your properties'
      />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing._id}
              data={listing.listing}
              actionId={listing._id}
              onAction={onCancel}
              disabled={deletingId === listing._id}
              actionLabel='Cancel listing'
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default PropertiesClient;
