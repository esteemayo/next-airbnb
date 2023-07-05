import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';

import useLoginModal from './useLoginModal';
import { createFavorite, deleteFavorite } from '@/services/favoriteService';

interface IUseFavorite {
  listingId: string;
  currentUser?: object | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes[listingId];
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => deleteFavorite(listingId);
        } else {
          request = () => createFavorite(listingId);
        }

        await request();
        router.refresh();
        toast.success('Success');
      } catch (err: any) {
        console.log(err.message);
        toast.error('Something went wrong.');
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
