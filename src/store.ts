import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, products } from './data/products';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
}

interface StoreState {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  news: NewsItem[];
  addNews: (newsItem: NewsItem) => void;
  updateNews: (newsItem: NewsItem) => void;
  deleteNews: (id: string) => void;
  city: string;
  setCity: (city: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      city: 'Астана',
      setCity: (city) => set({ city }),
      favorites: [products[0]], // Добавляем один товар в избранное по умолчанию
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
      news: [
        {
          id: '1',
          title: 'Приглашаем компании к сотрудничеству',
          content: 'Мы расширяем партнерскую сеть и готовы предложить <i style="color:#f97316;">лучшие условия</i> для B2B-клиентов. <br/><br/>Свяжитесь с нами для получения оптового прайс-листа и закрепления персонального менеджера.',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600',
          date: new Date().toISOString()
        },
        {
          id: '2',
          title: 'Появились запчасти на китайские авто',
          content: 'В нашем каталоге теперь доступен <b style="font-size: 1.1em;">огромный ассортимент</b> деталей для Geely, Haval, Chery, Changan и других популярных марок из поднебесной.',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600',
          date: new Date(Date.now() - 86400000 * 2).toISOString()
        }
      ],
      addNews: (newsItem) => set((state) => ({ news: [newsItem, ...state.news] })),
      updateNews: (newsItem) => set((state) => ({ 
        news: state.news.map(n => n.id === newsItem.id ? newsItem : n) 
      })),
      deleteNews: (id) => set((state) => ({ news: state.news.filter(n => n.id !== id) })),
    }),
    {
      name: 'optparts-storage',
    }
  )
);
