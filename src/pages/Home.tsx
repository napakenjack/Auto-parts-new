import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ALL_CATEGORIES } from '../data/categories';
import { useStore } from '../store';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);
  const news = useStore(state => state.news);

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-12 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"></div>
        <div className="relative z-10 w-full max-w-3xl">
          <h1 className="text-[28px] md:text-[36px] font-bold mb-3">Быстрый поиск автозапчастей</h1>
          <p className="text-[14px] md:text-[16px] opacity-80 mb-8">Найдите подходящие детали для вашего автомобиля по артикулу, VIN или названию</p>
          
          <div className="flex w-full mb-4 shadow-lg">
            <input 
              type="text" 
              placeholder="Например: тормозные колодки Ford Focus или VIN..." 
              className="flex-1 bg-white text-slate-900 px-4 py-3 md:py-4 rounded-l-lg outline-none text-[14px] md:text-[16px]"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-r-lg font-bold transition-colors flex items-center justify-center">
              <Search size={20} className="md:mr-2" />
              <span className="hidden md:inline">Найти</span>
            </button>
          </div>
          
          <div className="text-[12px] text-slate-300 flex flex-wrap justify-center gap-2 items-center">
            <span className="opacity-70">Популярные запросы:</span>
            <Link to="/catalog?category=Тормоза" className="hover:text-orange-400 underline decoration-slate-500 underline-offset-2">Тормозные диски</Link>
            <Link to="/catalog?category=Фильтры" className="hover:text-orange-400 underline decoration-slate-500 underline-offset-2">Масляный фильтр</Link>
            <Link to="/catalog?category=Освещение" className="hover:text-orange-400 underline decoration-slate-500 underline-offset-2">Лампы H7</Link>
            <Link to="/catalog?category=Аккумуляторы" className="hover:text-orange-400 underline decoration-slate-500 underline-offset-2">Аккумулятор 60Ah</Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="p-4 md:p-6 lg:p-8 flex-grow max-w-[1920px] mx-auto w-full">
        
        {/* News Feed Section */}
        {news.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[20px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900">Лента новостей</h2>
              <Link to="/news" className="text-[13px] font-bold text-orange-500 hover:text-orange-600 uppercase tracking-wider hidden sm:block">
                Смотреть ленту →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {news.slice(0, 4).map((item) => (
                <Link key={item.id} to={`/news/${item.id}`} className="bg-white border border-slate-200 rounded-lg overflow-hidden flex h-[80px] group hover:border-orange-500 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <div className="w-[100px] sm:w-[120px] h-full shrink-0 relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3 flex flex-col justify-center flex-1 min-w-0">
                    <div className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wide">{new Date(item.date).toLocaleDateString('ru-RU')}</div>
                    <h3 className="text-[13px] font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/news" className="w-full sm:hidden mt-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[13px] font-bold py-3 rounded-lg flex justify-center text-center transition-colors">
              Смотреть всю ленту
            </Link>
          </div>
        )}

        {/* Catalog Categories - List Style */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[20px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900">Каталог автозапчастей</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ALL_CATEGORIES.map((categoryGroup, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-5 hover:border-orange-500 transition-colors hover:shadow-sm group">
              <h3 className="text-[15px] font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 group-hover:text-orange-600 transition-colors">{categoryGroup.group}</h3>
              <ul className="space-y-2.5">
                {categoryGroup.items.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={`/catalog?category=${encodeURIComponent(item)}`}
                      className="text-[13px] text-slate-600 hover:text-orange-500 hover:underline flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200 inline-block group-hover:bg-orange-200 transition-colors"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Deals */}
        <div className="flex justify-between items-center mb-4 mt-8">
          <h2 className="text-[16px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900">Лучшие предложения</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </main>
    </div>
  );
};
