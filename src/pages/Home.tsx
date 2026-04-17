import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Wrench, Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ALL_CATEGORIES } from '../data/categories';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

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

      {/* Trust Block */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap justify-center md:justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-[13px] font-bold text-slate-900">Гарантия качества</div>
              <div className="text-[11px] text-slate-500">Только проверенные поставщики</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Truck size={20} />
            </div>
            <div>
              <div className="text-[13px] font-bold text-slate-900">Быстрая доставка</div>
              <div className="text-[11px] text-slate-500">Отправка в день заказа</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Wrench size={20} />
            </div>
            <div>
              <div className="text-[13px] font-bold text-slate-900">Точный подбор</div>
              <div className="text-[11px] text-slate-500">Проверка совместимости по VIN</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-5 md:p-6 flex-grow max-w-7xl mx-auto w-full">
        
        {/* Catalog Categories - List Style */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[20px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900">Каталог автозапчастей</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ALL_CATEGORIES.map((categoryGroup, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="text-[15px] font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">{categoryGroup.group}</h3>
              <ul className="space-y-2.5">
                {categoryGroup.items.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={`/catalog?category=${encodeURIComponent(item)}`}
                      className="text-[13px] text-slate-600 hover:text-orange-500 hover:underline flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200 inline-block"></span>
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
