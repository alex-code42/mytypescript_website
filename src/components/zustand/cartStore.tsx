import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Item } from '../../../types';


// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   images: Image[]
// };

type CartStore = {
  items: Item[];
  addToCart: (product: Item) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>((set) => ({
  items: (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '[]') : []),
  addToCart: (product) =>
    set((state) => {
      const updatedCart = [...state.items, { ...product, id: uuidv4() }];
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
      return { items: updatedCart };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.items.filter((item) => item.id !== productId);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
      return { items: updatedCart };
    }),
    
  clearCart: () =>
    set(() => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
      }
      return { items: [] };
    }),
    
}));


  

export default useCartStore;

