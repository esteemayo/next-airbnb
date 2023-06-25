'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Heading from '../Heading';
import HeartButton from '../HeartButton';

import useCountries from '@/hooks/useCountries';

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  id,
  title,
  locationValue,
  imageSrc,
}) => {
  const session = useSession();
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className='w-full h-[60vh] overflow-hidden rounded-xl relative'>
        <Image
          src={imageSrc}
          fill
          alt='Image'
          className='object-cover w-full'
        />
        <div className='absolute top-5 right-5'>
          <HeartButton />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
