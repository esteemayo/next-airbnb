'use client';

interface ListingCardProps {
  listing: object;
  reservation: string;
  onAction?(id: string): void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return <div>ListingCard</div>;
};

export default ListingCard;
