import { create, StateCreator } from 'zustand';

// Define the store state and its type
type BooleanState = {
  isTrue: boolean;
  toggleState: () => void;
};

// Create a store with Zustand
const useOpenShoppingCard = create<BooleanState>((set) => ({
  isTrue: false,

  toggleState: () => set((state) => ({ isTrue: !state.isTrue })),
}));

export default useOpenShoppingCard;