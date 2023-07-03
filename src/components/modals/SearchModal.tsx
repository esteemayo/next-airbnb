'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Modal from './Modal';
import useSearchModal from '@/hooks/useSearchModal';

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const router = useRouter();
  const params = useSearchParams();
  const searchModal = useSearchModal();

  const [step, setStep] = useState(STEPS.LOCATION);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);

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
