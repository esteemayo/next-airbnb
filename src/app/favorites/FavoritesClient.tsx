'use client';

import React from 'react';

interface FavoritesClientProps {
  listings: [];
  currentUser: object;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({ listings, currentUser }) => {
  return (
    <div>FavoritesClient</div>
  );
};

export default FavoritesClient;
