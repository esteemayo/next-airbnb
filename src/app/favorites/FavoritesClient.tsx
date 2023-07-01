'use client';

import Heading from '@/components/Heading';
import ListingCard from '@/components/listings/ListingCard';
import Container from '@/components/Container';

interface FavoritesClientProps {
  listings: [];
  currentUser: object;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({ listings, currentUser }) => {
  return (
    <Container>
      <Heading
        title='Favorites'
        subtitle='List of places you have favorited!'
      />
      <div classname='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols- gap-8'>
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing._id}
              currentUser={currentUser}
              data={listing}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default FavoritesClient;
