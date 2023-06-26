'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { differenceInCalendarDays, eachDayOfInterval } from 'date-fns';
import { toast } from 'react-hot-toast';

import ListingHead from '@/components/listings/ListingHead';
import Container from '@/components/Container';
import ListingReservation from '@/components/listings/ListingReservation';
import ListingInfo from '@/components/listings/ListingInfo';

import { categories } from '@/data';
import { createReservation } from '@/services/reservationService';
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

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const onCreateReservation = useCallback(async () => {
    if (session.status === 'unauthenticated') {
      return loginModal.onOpen();
    }

    setIsLoading(true);

    const newReservation = {
      totalPrice,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      listing: listing?._id,
    };

    try {
      await createReservation(newReservation);
      toast.success('Listing reserved!');
      router.refresh();
    } catch (err: any) {
      toast.error('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [dateRange, listing, loginModal, session, totalPrice, router]);

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate,
      );

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

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
            <div className='order-first mb-10 md:order-last md:col-span-3'>
              
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
