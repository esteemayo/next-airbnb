'use client';

import { useSession } from 'next-auth/react';

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({ id, title, locationValue, imageSrc, }) => {
  const session = useSession();
  
  return <div>ListingHead</div>;
};

export default ListingHead;
