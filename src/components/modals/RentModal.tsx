'use client';

import Modal from './Modal';
import useRentModal from '@/hooks/useRentModal';

const RentModal = () => {
  const rentModal = useRentModal();

  return <Modal isOpen={rentModal.isOpen} title='Airbnb your home!' />;
};

export default RentModal;
