export interface Product {
  id: string;
  title: string;
  brand: string;
  sku: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  compatibility: string[];
  deliveryTime: string;
}

export const products: Product[] = [
  {
    id: 'p1',
    title: 'Комплект керамических тормозных колодок премиум-класса',
    brand: 'BrakeMaster',
    sku: 'BM-CP-9021',
    price: 45.99,
    oldPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1706288456423-72b5bb3a7bc6?q=80&w=687&auto=format&fit=crop',
    category: 'Тормоза',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    compatibility: ['Honda Civic 2015-2021', 'Toyota Corolla 2014-2020'],
    deliveryTime: '1-2 дня'
  },
  {
    id: 'p2',
    title: 'Высокоэффективный масляный фильтр',
    brand: 'FilterPro',
    sku: 'FP-OF-105',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1642075223291-f9ec545889fa?q=80&w=687&auto=format&fit=crop',
    category: 'Фильтры',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    compatibility: ['Универсальный (Большинство японских моделей)'],
    deliveryTime: 'В наличии'
  },
  {
    id: 'p3',
    title: 'Светодиодные лампы для фар H11 (Пара)',
    brand: 'LumiDrive',
    sku: 'LD-H11-LED',
    price: 34.99,
    oldPrice: 49.99,
    image: 'https://plus.unsplash.com/premium_photo-1694206014287-19bab1b68dca?q=80&w=1470&auto=format&fit=crop',
    category: 'Освещение',
    inStock: false,
    rating: 4.5,
    reviews: 210,
    compatibility: ['Ford F-150 2015-2022', 'Chevrolet Silverado 2014-2021'],
    deliveryTime: 'Под заказ (5-7 дней)'
  },
  {
    id: 'p4',
    title: 'Синтетическое моторное масло 5W-30 (5 кварт)',
    brand: 'LubeMax',
    sku: 'LM-5W30-5Q',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1552195634-fdabf904f26e?q=80&w=1470&auto=format&fit=crop',
    category: 'Жидкости',
    inStock: true,
    rating: 4.9,
    reviews: 450,
    compatibility: ['Универсальное'],
    deliveryTime: 'В наличии'
  },
  {
    id: 'p5',
    title: 'Сверхмощный автомобильный аккумулятор 12В',
    brand: 'VoltTech',
    sku: 'VT-12V-HD',
    price: 129.99,
    oldPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600',
    category: 'Аккумуляторы',
    inStock: true,
    rating: 4.7,
    reviews: 65,
    compatibility: ['Honda Accord 2013-2020', 'Nissan Altima 2014-2021'],
    deliveryTime: '1-3 дня'
  },
  {
    id: 'p6',
    title: 'Стойка передней подвески в сборе',
    brand: 'RideSmooth',
    sku: 'RS-SA-F1',
    price: 89.50,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600',
    category: 'Подвеска',
    inStock: true,
    rating: 4.6,
    reviews: 42,
    compatibility: ['Toyota Camry 2012-2017'],
    deliveryTime: '2-4 дня'
  }
];

export const categories = [
  { id: 'c1', name: 'Тормоза', icon: 'Disc' },
  { id: 'c2', name: 'Фильтры', icon: 'Filter' },
  { id: 'c3', name: 'Освещение', icon: 'Lightbulb' },
  { id: 'c4', name: 'Аккумуляторы', icon: 'Battery' },
  { id: 'c5', name: 'Подвеска', icon: 'Activity' },
  { id: 'c6', name: 'Жидкости', icon: 'Droplet' }
];
