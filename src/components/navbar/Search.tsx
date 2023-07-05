'use client';

import { BiSearch } from 'react-icons/bi';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { differenceInDays } from 'date-fns';

import useCountries from '@/hooks/useCountries';
import useSearchModal from '@/hooks/useSearchModal';

const Search = () => {
  const params = useSearchParams();

  const searchModal = useSearchModal();
  const { getByValue } = useCountries();

  const locationValue = params.get('locationValue');
  const startDate = params.get('startDate');
  const endDate = params.get('endDate');
  const guestCount = params.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Anywhere';
  }, [getByValue, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      let diff = differenceInDays(end - start);
  
      if (diff === 0) {
        diff = 1;
      }
  
      return `${diff} Days`;
    }

    return 'Any Week';
  }, [startDate, endDate]);

  return (
    <div
      onClick={searchModal.onOpen}
      className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'
    >
      <div className='flex flex-row items-center justify-between'>
        <div className='text-sm font-semibold px-6'>{ locationValue}</div>
        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
          Any Week
        </div>
        <div className='text-sm pl-6 pr-2 text-gray-500 flex flex-row items-center gap-3'>
          <div className='hidden sm:block'>Add Guests</div>
          <div className='p-2 bg-rose-500 rounded-full text-white'>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
