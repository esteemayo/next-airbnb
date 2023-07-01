'use client';

import Heading from '@/components/Heading';
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
    </Container>
  );
};

export default FavoritesClient;
