'use client';

import { useRouter } from 'next/navigation';

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
  return <div>ListingCard</div>;
};

export default ListingCard;
