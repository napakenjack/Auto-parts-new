import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Heart, MapPin } from 'lucide-react';
import { useStore } from '../store';

const POPULAR_CITIES = ['Астана', 'Алматы', 'Шымкент', 'Караганда', 'Актобе', 'Тараз', 'Павлодар', 'Усть-Каменогорск', 'Семей', 'Костанай'];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const city = useStore(state => state.city);
  const setCity = useStore(state => state.setCity);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white text-slate-800 sticky top-0 z-50 border-b border-slate-200">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white h-8 text-[11px] hidden sm:flex items-center justify-between px-6 tracking-wide relative z-50">
        <div className="flex items-center gap-4 text-slate-300">
          <button 
            onClick={() => setIsCityModalOpen(true)}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-1"
          >
            <MapPin size={13} />
            <span className="font-bold underline decoration-slate-500 underline-offset-2">{city}</span>
          </button>
          <span className="hidden md:inline">Доставка по всему Казахстану • Возможна доставка на следующий день</span>
        </div>
        <div className="flex gap-5">
          <span>Поддержка: +7 (7172) 12-34-56</span>
          <Link to="/profile" className="hover:text-orange-400 transition-colors">B2B Портал</Link>
          <span>Язык: RU</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="h-[72px] flex items-center px-4 md:px-6 gap-4 md:gap-6 max-w-[1920px] mx-auto w-full">
        {/* Logo */}
        <Link to="/" className="font-extrabold text-[20px] flex items-center gap-1 shrink-0 tracking-tight">
          <span className="text-slate-900">Opt</span><span className="text-orange-500">Parts</span>
        </Link>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex flex-grow relative">
          <form onSubmit={handleSearch} className="w-full relative flex items-center">
            <input
              type="text"
              placeholder="Поиск по названию детали, артикулу, OEM-номеру или модели авто..."
              className="w-full py-2.5 px-4 border border-slate-200 rounded-md text-[14px] outline-none focus:border-orange-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="bg-slate-900 text-white px-5 h-full absolute right-0 rounded-r-md border-none font-semibold text-[13px] hover:bg-slate-800 transition-colors">
              ПОИСК
            </button>
          </form>
        </div>

        {/* Actions */}
        <div className="flex gap-5 shrink-0 ml-auto md:ml-0">
          <Link to="/favorites" className="hidden sm:flex flex-col items-center text-[11px] font-semibold text-slate-800 hover:text-orange-500 transition-colors">
            <Heart size={18} className="mb-0.5" />
            <span>Избранное</span>
          </Link>
          <Link to="/auth" className="hidden sm:flex flex-col items-center text-[11px] font-semibold text-slate-800 hover:text-orange-500 transition-colors">
            <User size={18} className="mb-0.5" />
            <span>Войти</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center text-[11px] font-semibold text-slate-800 hover:text-orange-500 transition-colors">
            <ShoppingCart size={18} className="mb-0.5" />
            <span>142.50 ₸</span>
          </Link>
          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Bar (Mobile) */}
      <div className="md:hidden px-4 pb-4">
        <form onSubmit={handleSearch} className="w-full relative flex">
          <input
            type="text"
            placeholder="Поиск запчастей..."
            className="w-full py-2.5 px-4 border border-slate-200 rounded-l-md text-[14px] outline-none focus:border-orange-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="bg-slate-900 text-white px-4 rounded-r-md flex items-center justify-center font-semibold text-[13px]">
            ПОИСК
          </button>
        </form>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 absolute w-full left-0 shadow-xl z-50">
          <ul className="flex flex-col py-2">
            <li>
              <button 
                onClick={() => setIsCityModalOpen(true)}
                className="w-full text-left px-6 py-3 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 flex items-center gap-2 border-b border-slate-100"
              >
                <MapPin size={16} className="text-slate-500" />
                Город: <span className="text-orange-500">{city}</span>
              </button>
            </li>
            <li><Link to="/catalog" className="block px-6 py-3 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Все категории</Link></li>
            <li><Link to="/profile" className="block px-6 py-3 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Мой аккаунт</Link></li>
            <li><Link to="/favorites" className="block px-6 py-3 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Сохраненные товары</Link></li>
            <li><Link to="/about" className="block px-6 py-3 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>О нас</Link></li>
          </ul>
        </div>
      )}

      {/* City Dialog Modal */}
      {isCityModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <MapPin size={18} className="text-orange-500" />
                Укажите ваш город
              </h3>
              <button onClick={() => setIsCityModalOpen(false)} className="text-slate-400 hover:text-orange-500 transition-colors p-1 rounded-full hover:bg-orange-50">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-2">
                {POPULAR_CITIES.map(c => (
                  <button 
                    key={c}
                    onClick={() => { setCity(c); setIsCityModalOpen(false); setIsMenuOpen(false); }}
                    className={`text-left px-4 py-2.5 rounded-lg text-[14px] transition-all border ${city === c ? 'bg-orange-50 border-orange-500 text-orange-600 font-bold' : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-700'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
