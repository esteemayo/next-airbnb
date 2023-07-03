import { create } from 'zustand';

interface SearchModalStore {
  isOpen: boolen;
  onOpen(): void;
  onClose(): void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSearchModal;
