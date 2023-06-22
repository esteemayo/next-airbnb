'use client';

import { useRouter } from 'next/navigation';
import useCountries from '@/hooks/useCountries';
interface ListingCardProps {
  listing: object;
  reservation: string;
  onAction?(id: string): void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  listing,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId
 }) => {
  const router = useRouter();

  return <div>ListingCard</div>;
};

export default ListingCard;
