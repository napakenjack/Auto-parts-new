import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShieldCheck, ArrowRight, Lock } from 'lucide-react';
import { products } from '../data/products';

export const Cart: React.FC = () => {
  // Mock cart items
  const cartItems = [
    { product: products[0], quantity: 2 },
    { product: products[1], quantity: 1 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% mock tax
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <h1 className="text-[24px] font-bold text-slate-900 mb-8">Корзина</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <div className="col-span-6">Товар</div>
                <div className="col-span-2 text-center">Цена</div>
                <div className="col-span-2 text-center">Количество</div>
                <div className="col-span-2 text-right">Итого</div>
              </div>

              {/* Items */}
              <div className="divide-y divide-slate-200">
                {cartItems.map((item, index) => (
                  <div key={index} className="p-4 sm:p-6 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center">
                    
                    {/* Product Info */}
                    <div className="col-span-6 flex items-center gap-4 w-full">
                      <div className="w-20 h-20 bg-slate-50 rounded border border-slate-200 overflow-hidden shrink-0">
                        <img src={item.product.image} alt={item.product.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] text-orange-500 font-bold mb-1 uppercase tracking-wider">{item.product.brand}</div>
                        <Link to={`/product/${item.product.id}`} className="font-bold text-[13px] text-slate-900 hover:text-orange-500 line-clamp-2 mb-1 transition-colors">
                          {item.product.title}
                        </Link>
                        <div className="text-[11px] text-slate-500">Артикул: {item.product.sku}</div>
                        
                        {/* Mobile Price & Actions */}
                        <div className="sm:hidden flex items-center justify-between mt-4">
                          <div className="font-bold text-[14px] text-slate-900">${item.product.price.toFixed(2)}</div>
                          <div className="flex items-center gap-4">
                            <select className="border border-slate-200 rounded p-1 text-[13px] bg-white text-slate-800" defaultValue={item.quantity}>
                              {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                            </select>
                            <button className="text-slate-400 hover:text-red-500"><Trash2 size={18} /></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Price */}
                    <div className="col-span-2 text-center hidden sm:block font-bold text-[14px] text-slate-900">
                      ${item.product.price.toFixed(2)}
                    </div>

                    {/* Desktop Quantity */}
                    <div className="col-span-2 flex justify-center hidden sm:flex">
                      <select className="border border-slate-200 rounded p-2 text-[13px] bg-white outline-none focus:border-orange-500 text-slate-800" defaultValue={item.quantity}>
                        {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>

                    {/* Desktop Total & Remove */}
                    <div className="col-span-2 flex items-center justify-end gap-4 hidden sm:flex">
                      <div className="font-bold text-[14px] text-slate-900">${(item.product.price * item.quantity).toFixed(2)}</div>
                      <button className="text-slate-400 hover:text-red-500 transition-colors" aria-label="Remove item">
                        <Trash2 size={18} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link to="/catalog" className="text-[13px] text-orange-500 font-bold hover:underline flex items-center gap-2">
                &larr; Продолжить покупки
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-[16px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Сумма заказа</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-slate-200 text-[13px]">
                <div className="flex justify-between text-slate-600">
                  <span>Подытог</span>
                  <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Доставка</span>
                  <span className="font-bold text-slate-900">{shipping === 0 ? 'Бесплатно' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <div className="text-[11px] text-orange-600 bg-orange-50 border border-orange-200 p-2 rounded">
                    Добавьте еще на ${(50 - subtotal).toFixed(2)} в корзину для бесплатной доставки!
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Расчетный налог</span>
                  <span className="font-bold text-slate-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-[16px] font-bold text-slate-900">Итого</span>
                <span className="text-[24px] font-bold text-slate-900">${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded transition-colors flex items-center justify-center gap-2 mb-4 text-[13px] uppercase">
                Перейти к оформлению <ArrowRight size={18} />
              </Link>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-semibold">
                <Lock size={14} /> Безопасная оплата
              </div>

              {/* Trust */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-orange-500 shrink-0" size={24} />
                  <div className="text-[13px]">
                    <span className="font-bold text-slate-900 block">Возврат в течение 30 дней</span>
                    <span className="text-[11px] text-slate-500">Не подошло? Легко верните.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
