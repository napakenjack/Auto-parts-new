import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white text-slate-800 sticky top-0 z-50 border-b border-slate-200">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white h-8 text-[11px] hidden sm:flex items-center justify-between px-6 tracking-wide">
        <div>Доставка по всей Европе • Возможна доставка на следующий день</div>
        <div className="flex gap-5">
          <span>Поддержка: +1 (800) 555-0199</span>
          <Link to="/profile" className="hover:text-orange-400 transition-colors">B2B Портал</Link>
          <span>Язык: RU</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="h-[72px] flex items-center px-4 md:px-6 gap-4 md:gap-6 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link to="/" className="font-extrabold text-[20px] text-slate-900 flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 bg-orange-500 rounded"></div>
          AUTOPART PRO
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
          <Link to="/profile" className="hidden sm:flex flex-col items-center text-[11px] font-semibold text-slate-800 hover:text-orange-500 transition-colors">
            <User size={18} className="mb-0.5" />
            <span>Аккаунт</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center text-[11px] font-semibold text-slate-800 hover:text-orange-500 transition-colors">
            <ShoppingCart size={18} className="mb-0.5" />
            <span>$142.50</span>
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
            <li><Link to="/catalog" className="block px-6 py-3 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Все категории</Link></li>
            <li><Link to="/profile" className="block px-6 py-3 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Мой аккаунт</Link></li>
            <li><Link to="/favorites" className="block px-6 py-3 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Сохраненные товары</Link></li>
            <li><Link to="/about" className="block px-6 py-3 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>О нас</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};
