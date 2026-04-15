import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Trust Badges */}
      <div className="h-auto md:h-[60px] py-4 md:py-0 bg-white border-t border-slate-200 flex flex-col md:flex-row justify-around items-center px-6 gap-4 text-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="text-[20px] text-orange-500">🛡️</div>
          <div>
            <h4 className="text-[12px] font-bold text-slate-900">Оригинальные запчасти</h4>
            <p className="text-[10px] text-slate-500">100% гарантия подлинности</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="text-[20px] text-orange-500">🚚</div>
          <div>
            <h4 className="text-[12px] font-bold text-slate-900">Быстрая доставка</h4>
            <p className="text-[10px] text-slate-500">Отправка в течение 24 часов</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="text-[20px] text-orange-500">↩️</div>
          <div>
            <h4 className="text-[12px] font-bold text-slate-900">Легкий возврат</h4>
            <p className="text-[10px] text-slate-500">Возврат денег в течение 30 дней</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="text-[20px] text-orange-500">💬</div>
          <div>
            <h4 className="text-[12px] font-bold text-slate-900">Экспертная поддержка</h4>
            <p className="text-[10px] text-slate-500">Сертифицированные механики онлайн</p>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-8 border-t border-slate-800 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-extrabold text-[20px] text-white flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
              AUTOPART PRO
            </Link>
            <p className="text-sm mb-6 leading-relaxed">
              Ваш надежный источник высококачественных автозапчастей. Мы предоставляем надежные компоненты для механиков и автовладельцев по всей стране.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Каталог запчастей</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/catalog?category=Brakes" className="hover:text-orange-500 transition-colors">Тормоза и роторы</Link></li>
              <li><Link to="/catalog?category=Filters" className="hover:text-orange-500 transition-colors">Фильтры и клапаны</Link></li>
              <li><Link to="/catalog?category=Lighting" className="hover:text-orange-500 transition-colors">Освещение и электрика</Link></li>
              <li><Link to="/catalog?category=Batteries" className="hover:text-orange-500 transition-colors">Аккумуляторы и питание</Link></li>
              <li><Link to="/catalog?category=Suspension" className="hover:text-orange-500 transition-colors">Подвеска и рулевое управление</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Обслуживание клиентов</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/profile" className="hover:text-orange-500 transition-colors">Мой аккаунт</Link></li>
              <li><Link to="/profile" className="hover:text-orange-500 transition-colors">История заказов</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Доставка и возврат</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Частые вопросы</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Связаться с нами</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Связаться с нами</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <span>123 Путь Автозапчастей<br />Детройт, Мичиган 48201</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <span>1-800-AUTOPART</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span>support@autopartpro.example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} AutoPart Pro. Все права защищены.</p>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/about" className="hover:text-white transition-colors">Условия обслуживания</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
