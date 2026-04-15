import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

export const OrderSuccess: React.FC = () => {
  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm">
        
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-500" size={40} />
        </div>
        
        <h1 className="text-[28px] font-bold text-slate-900 mb-2">Заказ успешно оформлен!</h1>
        <p className="text-[14px] text-slate-500 mb-8">
          Спасибо за покупку. Мы отправили подтверждение заказа и детали доставки на ваш email.
        </p>
        
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-8 text-left">
          <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-200">
            <Package className="text-slate-400" size={20} />
            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Номер заказа</div>
              <div className="text-[16px] font-bold text-slate-900">#{orderNumber}</div>
            </div>
          </div>
          <div className="flex justify-between text-[13px] mb-2">
            <span className="text-slate-500">Дата:</span>
            <span className="font-bold text-slate-900">{new Date().toLocaleDateString('ru-RU')}</span>
          </div>
          <div className="flex justify-between text-[13px]">
            <span className="text-slate-500">Сумма:</span>
            <span className="font-bold text-slate-900">122.83 ₸</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <Link to="/profile" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded transition-colors text-[13px] uppercase">
            Перейти в личный кабинет
          </Link>
          <Link to="/catalog" className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 px-6 rounded transition-colors text-[13px] uppercase flex items-center justify-center gap-2">
            Продолжить покупки <ArrowRight size={16} />
          </Link>
        </div>
        
      </div>
    </div>
  );
};
