'use client';

import { useRouter } from 'next/navigation';

import Modal from './Modal';
import useSearchModal from '@/hooks/useSearchModal';

const SearchModal = () => {
  const router = useRouter();
  const searchModal = useSearchModal();

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={searchModal.onOpen}
      title='Filters'
      actionLabel='Search'
    />
  );
};

export default SearchModal;
