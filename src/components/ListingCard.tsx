'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import useCountries from '@/hooks/useCountries';
interface ListingCardProps {
  data: object;
  reservation: string;
  onAction?(id: string): void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId
 }) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  return <div>ListingCard</div>;
};

export default ListingCard;
