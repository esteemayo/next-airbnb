'use client';

import { toast } from 'react-hot-toast';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import Heading from '@/components/Heading';
import ListingCard from '@/components/listings/ListingCard';
import Container from '@/components/Container';
import { deleteReservation } from '@/services/reservationService';

interface ReservationsClientProps {
  reservations: [];
  currentUser: object;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback(
    async (id: string) => {
      setDeletingId(id);

      try {
        await deleteReservation(id);
        toast.success('Reservation cancelled');
        router.refresh();
      } catch (err) {
        toast.error('Something went wrong.');
      } finally {
        setDeletingId('');
      }
    },
    [router]
  );

  return (
    <Container>
      <Heading title='Reservations' subtitle='Bookings on your properties' />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {reservations.map((reservation) => {
          return (
            <ListingCard
              key={reservation._id}
              data={reservation.listing}
              reservation={reservation}
              actionId={reservation._id}
              onAction={onCancel}
              disabled={deletingId === reservation._id}
              actionLabel='Cancel guest reservation'
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ReservationsClient;
