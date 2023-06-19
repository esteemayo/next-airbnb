'use client';

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
