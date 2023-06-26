'use client';

import { Range } from 'react-date-range';

interface ListingReservationProps {
  price: number,
  dateRange: Range;
  totalPrice: number;
  onChangeDate(value: Range): void;
  onSubmit(): void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation = () => {
  return (
    <div className=''>
      Listing Reservation
    </div>
  );
};

export default ListingReservation;
