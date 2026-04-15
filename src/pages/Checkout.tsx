import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, Truck, MapPin } from 'lucide-react';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <h1 className="text-[24px] font-bold text-slate-900 mb-8">Оформление заказа</h1>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          
          {/* Form Fields */}
          <div className="w-full lg:w-2/3 space-y-6">
            
            {/* Contact Details */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-[16px] font-bold text-slate-900 mb-4 border-l-4 border-orange-500 pl-3">Контактные данные</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-1">Имя *</label>
                  <input required type="text" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="Иван" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-1">Фамилия *</label>
                  <input required type="text" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="Иванов" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-1">Телефон *</label>
                  <input required type="tel" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="+7 (999) 000-00-00" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-1">Email *</label>
                  <input required type="email" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="ivan@example.com" />
                </div>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-[16px] font-bold text-slate-900 mb-4 border-l-4 border-orange-500 pl-3">Способ получения</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <label className={`border rounded-lg p-4 cursor-pointer flex items-start gap-3 transition-colors ${deliveryMethod === 'delivery' ? 'border-orange-500 bg-orange-50/30' : 'border-slate-200 hover:border-slate-300'}`}>
                  <input 
                    type="radio" 
                    name="deliveryMethod" 
                    value="delivery" 
                    checked={deliveryMethod === 'delivery'} 
                    onChange={() => setDeliveryMethod('delivery')}
                    className="mt-1 text-orange-500 focus:ring-orange-500"
                  />
                  <div>
                    <div className="font-bold text-[14px] text-slate-900 flex items-center gap-2"><Truck size={16} /> Доставка курьером</div>
                    <div className="text-[12px] text-slate-500 mt-1">От 1 до 3 дней. Стоимость: $9.99</div>
                  </div>
                </label>
                <label className={`border rounded-lg p-4 cursor-pointer flex items-start gap-3 transition-colors ${deliveryMethod === 'pickup' ? 'border-orange-500 bg-orange-50/30' : 'border-slate-200 hover:border-slate-300'}`}>
                  <input 
                    type="radio" 
                    name="deliveryMethod" 
                    value="pickup" 
                    checked={deliveryMethod === 'pickup'} 
                    onChange={() => setDeliveryMethod('pickup')}
                    className="mt-1 text-orange-500 focus:ring-orange-500"
                  />
                  <div>
                    <div className="font-bold text-[14px] text-slate-900 flex items-center gap-2"><MapPin size={16} /> Самовывоз</div>
                    <div className="text-[12px] text-slate-500 mt-1">Забрать из магазина. Бесплатно</div>
                  </div>
                </label>
              </div>

              {deliveryMethod === 'delivery' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-1">Город *</label>
                    <input required type="text" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="Москва" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-1">Адрес (Улица, дом, квартира) *</label>
                    <input required type="text" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="ул. Ленина, д. 1, кв. 1" />
                  </div>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-[16px] font-bold text-slate-900 mb-4 border-l-4 border-orange-500 pl-3">Способ оплаты</h2>
              <div className="space-y-3">
                <label className="border border-slate-200 rounded-lg p-4 cursor-pointer flex items-center gap-3 hover:border-slate-300 transition-colors">
                  <input type="radio" name="paymentMethod" value="card" defaultChecked className="text-orange-500 focus:ring-orange-500" />
                  <CreditCard size={20} className="text-slate-500" />
                  <span className="font-bold text-[14px] text-slate-900">Банковской картой онлайн</span>
                </label>
                <label className="border border-slate-200 rounded-lg p-4 cursor-pointer flex items-center gap-3 hover:border-slate-300 transition-colors">
                  <input type="radio" name="paymentMethod" value="cash" className="text-orange-500 focus:ring-orange-500" />
                  <span className="font-bold text-[14px] text-slate-900">Наличными или картой при получении</span>
                </label>
              </div>
            </div>

            {/* Comment */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-[16px] font-bold text-slate-900 mb-4 border-l-4 border-orange-500 pl-3">Комментарий к заказу</h2>
              <textarea 
                className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px] min-h-[100px]" 
                placeholder="Уточнения по доставке или заказу..."
              ></textarea>
            </div>

          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-[16px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Ваш заказ</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-slate-200 text-[13px]">
                <div className="flex justify-between text-slate-600">
                  <span>Товары (3)</span>
                  <span className="font-bold text-slate-900">$104.48</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Доставка</span>
                  <span className="font-bold text-slate-900">{deliveryMethod === 'delivery' ? '$9.99' : 'Бесплатно'}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Налог</span>
                  <span className="font-bold text-slate-900">$8.36</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-[16px] font-bold text-slate-900">Итого</span>
                <span className="text-[24px] font-bold text-slate-900">${deliveryMethod === 'delivery' ? '122.83' : '112.84'}</span>
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded transition-colors flex items-center justify-center gap-2 mb-4 text-[14px] uppercase tracking-wider">
                Подтвердить заказ
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-semibold">
                <Lock size={14} /> Ваши данные надежно защищены
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
