import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './data/products';

interface StoreState {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (product) => {
        const { favorites } = get();
        const isFav = favorites.find((p) => p.id === product.id);
        if (isFav) {
          set({ favorites: favorites.filter((p) => p.id !== product.id) });
        } else {
          set({ favorites: [...favorites, product] });
        }
      },
      isFavorite: (productId) => {
        return !!get().favorites.find((p) => p.id === productId);
      },
    }),
    {
      name: 'optparts-storage',
    }
  )
);
