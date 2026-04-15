import React, { useState } from 'react';
import { User, Package, Heart, MapPin, Settings, LogOut, Car } from 'lucide-react';

export const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('garage');

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <h1 className="text-[24px] font-bold text-slate-900 mb-8">Мой аккаунт</h1>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-slate-200 text-center">
                <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ИИ
                </div>
                <h2 className="font-bold text-slate-900">Иван Иванов</h2>
                <p className="text-[13px] text-slate-500">ivan.ivanov@example.com</p>
              </div>
              <nav className="p-2">
                <button 
                  onClick={() => setActiveTab('garage')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded text-[13px] font-bold transition-colors ${activeTab === 'garage' ? 'bg-orange-50 text-orange-600 border-l-2 border-orange-500' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <Car size={18} /> Мой гараж
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded text-[13px] font-bold transition-colors ${activeTab === 'orders' ? 'bg-orange-50 text-orange-600 border-l-2 border-orange-500' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <Package size={18} /> История заказов
                </button>
                <button 
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded text-[13px] font-bold transition-colors ${activeTab === 'favorites' ? 'bg-orange-50 text-orange-600 border-l-2 border-orange-500' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <Heart size={18} /> Сохраненные товары
                </button>
                <button 
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded text-[13px] font-bold transition-colors ${activeTab === 'addresses' ? 'bg-orange-50 text-orange-600 border-l-2 border-orange-500' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <MapPin size={18} /> Адреса
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded text-[13px] font-bold transition-colors ${activeTab === 'settings' ? 'bg-orange-50 text-orange-600 border-l-2 border-orange-500' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <Settings size={18} /> Настройки аккаунта
                </button>
                <div className="my-2 border-t border-slate-200"></div>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded text-[13px] font-bold text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut size={18} /> Выйти
                </button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8">
              
              {activeTab === 'garage' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[18px] font-bold text-slate-900 border-l-4 border-orange-500 pl-3">Мой гараж</h2>
                    <button className="text-[13px] font-bold text-orange-500 hover:underline">
                      + Добавить авто
                    </button>
                  </div>
                  <p className="text-[14px] text-slate-500 mb-6">Сохраните свои автомобили, чтобы быстро находить подходящие запчасти.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border-2 border-orange-500 rounded p-4 relative bg-orange-50/30">
                      <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Основной</div>
                      <Car className="text-orange-500 mb-3" size={32} />
                      <h3 className="font-bold text-slate-900 text-[16px]">2018 Honda Civic</h3>
                      <p className="text-[13px] text-slate-500 mb-4">EX-L 1.5L Turbo</p>
                      <div className="flex gap-3">
                        <button className="text-[13px] font-bold text-orange-500 hover:underline">Каталог запчастей</button>
                        <button className="text-[13px] font-bold text-slate-500 hover:text-slate-900">Изменить</button>
                      </div>
                    </div>
                    
                    <div className="border border-slate-200 rounded p-4 hover:border-slate-300 transition-colors">
                      <Car className="text-slate-400 mb-3" size={32} />
                      <h3 className="font-bold text-slate-900 text-[16px]">2015 Ford F-150</h3>
                      <p className="text-[13px] text-slate-500 mb-4">XLT 5.0L V8</p>
                      <div className="flex gap-3">
                        <button className="text-[13px] font-bold text-orange-500 hover:underline">Каталог запчастей</button>
                        <button className="text-[13px] font-bold text-slate-500 hover:text-slate-900">Изменить</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-[18px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">История заказов</h2>
                  <div className="space-y-4">
                    <div className="border border-slate-200 rounded p-4 md:p-6">
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4 pb-4 border-b border-slate-200">
                        <div>
                          <div className="text-[11px] text-slate-500 mb-1 uppercase tracking-wider font-bold">Заказ #AG-84729</div>
                          <div className="font-bold text-[14px] text-slate-900">Оформлен 12 Окт, 2023</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-[11px] text-slate-500 mb-1 uppercase tracking-wider font-bold">Итого</div>
                            <div className="font-bold text-[14px] text-slate-900">$104.98</div>
                          </div>
                          <span className="bg-green-100 text-green-800 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded">Доставлен</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-slate-50 rounded border border-slate-200 overflow-hidden shrink-0">
                           <img src="https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=200" alt="Brake pads" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[14px] text-slate-900">Комплект керамических тормозных колодок премиум-класса</h4>
                          <p className="text-[13px] text-slate-500">Кол-во: 2</p>
                        </div>
                        <button className="hidden sm:block text-[13px] font-bold text-orange-500 hover:underline">Купить снова</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-[18px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Настройки аккаунта</h2>
                  <form className="max-w-md space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-bold text-slate-700 mb-1">Имя</label>
                        <input type="text" defaultValue="Иван" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-slate-700 mb-1">Фамилия</label>
                        <input type="text" defaultValue="Иванов" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-slate-700 mb-1">Электронная почта</label>
                      <input type="email" defaultValue="ivan.ivanov@example.com" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" />
                    </div>
                    <div className="pt-4">
                      <button type="button" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded transition-colors text-[13px] uppercase">
                        Сохранить изменения
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
