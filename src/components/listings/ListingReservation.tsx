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

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {price}</div>
        <div className='font-light text-neutral-500'>night</div>
      </div>
      <hr />
    </div>
  );
};

export default ListingReservation;
