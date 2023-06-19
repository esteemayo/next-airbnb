'use client';

import { useState } from 'react';
import Modal from './Modal';
import useRentModal from '@/hooks/useRentModal';

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      title='Airbnb your home!'
      actionLabel='Submit'
    />
  );
};

export default RentModal;
