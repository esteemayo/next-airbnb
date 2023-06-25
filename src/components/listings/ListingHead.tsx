'use client';

import { useSession } from 'next-auth/react';

import Heading from '../Heading';
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
    </>
  );
};

export default ListingHead;
