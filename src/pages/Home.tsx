import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Clock, Wrench, Search, ArrowRight, Settings, Disc, Filter, Lightbulb, Battery, Activity, Droplet } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Engine': return '⚙️';
      case 'Brakes': return '🛑';
      case 'Lighting': return '💡';
      case 'Suspension': return '🔄';
      case 'Batteries': return '🔋';
      case 'Electrical': return '🔋';
      case 'Fluids': return '🛢️';
      case 'Filters': return '🌪️';
      default: return '⚙️';
    }
  };

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
        
        {/* Catalog Categories */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[16px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900">Категории</h2>
          <Link to="/catalog" className="text-[12px] font-semibold text-orange-500 hover:text-orange-600 transition-colors">
            Все категории →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/catalog?category=${cat.name}`}
              className="bg-white border border-slate-200 rounded-lg p-3 text-center transition-transform hover:border-orange-500 group"
            >
              <div className="h-10 w-10 bg-slate-100 rounded-full mx-auto mb-2 flex items-center justify-center text-[18px]">
                {getCategoryIcon(cat.name)}
              </div>
              <div className="text-[12px] font-semibold text-slate-900">{cat.name}</div>
            </Link>
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
