import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

export const OrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex text-[11px] font-semibold tracking-wide uppercase text-slate-500 mb-6">
          <Link to="/profile" className="hover:text-orange-500 transition-colors">Мой аккаунт</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Заказ #{id}</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8">
          <div>
            <h1 className="text-[24px] font-bold text-slate-900 mb-1">Заказ #{id}</h1>
            <p className="text-[13px] text-slate-500">Оформлен 12 Октября, 2023</p>
          </div>
          <div className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded text-[13px] uppercase tracking-wider inline-block">
            Доставлен
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3 space-y-6">
            
            {/* Status History */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-[16px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Статус заказа</h2>
              
              <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pb-4">
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white"></div>
                  <div className="font-bold text-[14px] text-slate-900">Доставлен</div>
                  <div className="text-[12px] text-slate-500">15 Окт, 14:30</div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white"></div>
                  <div className="font-bold text-[14px] text-slate-900">Передан курьеру</div>
                  <div className="text-[12px] text-slate-500">15 Окт, 09:00</div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white"></div>
                  <div className="font-bold text-[14px] text-slate-900">В пути</div>
                  <div className="text-[12px] text-slate-500">14 Окт, 18:45</div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white"></div>
                  <div className="font-bold text-[14px] text-slate-900">Заказ оформлен</div>
                  <div className="text-[12px] text-slate-500">12 Окт, 10:15</div>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-[16px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Товары в заказе</h2>
              
              <div className="divide-y divide-slate-200">
                <div className="py-4 flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-20 h-20 bg-slate-50 rounded border border-slate-200 overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=200" alt="Brake pads" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="text-[10px] text-orange-500 font-bold mb-1 uppercase tracking-wider">BrakeMaster</div>
                    <Link to="/product/p1" className="font-bold text-[14px] text-slate-900 hover:text-orange-500 transition-colors">
                      Комплект керамических тормозных колодок премиум-класса
                    </Link>
                    <div className="text-[12px] text-slate-500 mt-1">Артикул: BM-CP-9021</div>
                  </div>
                  <div className="text-center sm:text-right">
                    <div className="text-[12px] text-slate-500 mb-1">2 шт x $45.99</div>
                    <div className="font-bold text-[16px] text-slate-900">$91.98</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Summary */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-[16px] font-bold text-slate-900 mb-4 border-l-4 border-orange-500 pl-3">Сумма</h2>
              <div className="space-y-3 mb-4 pb-4 border-b border-slate-200 text-[13px]">
                <div className="flex justify-between text-slate-600">
                  <span>Товары (2)</span>
                  <span className="font-bold text-slate-900">$91.98</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Доставка</span>
                  <span className="font-bold text-slate-900">$9.99</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Налог</span>
                  <span className="font-bold text-slate-900">$3.01</span>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[16px] font-bold text-slate-900">Итого</span>
                <span className="text-[24px] font-bold text-slate-900">$104.98</span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-[16px] font-bold text-slate-900 mb-4 border-l-4 border-orange-500 pl-3">Доставка</h2>
              <div className="text-[13px] text-slate-600 space-y-1 mb-4">
                <div className="font-bold text-slate-900">Иван Иванов</div>
                <div>ул. Ленина, д. 1, кв. 1</div>
                <div>Москва, 101000</div>
                <div>+7 (999) 000-00-00</div>
              </div>
              <div className="bg-slate-50 p-3 rounded text-[12px] text-slate-600 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Комментарий:</span>
                Позвонить за час до доставки.
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
