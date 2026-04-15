import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, ShieldCheck, Heart, Share2, CheckCircle, AlertCircle, Minus, Plus, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id) || products[0]; // Fallback to first product for demo
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex text-[11px] font-semibold tracking-wide uppercase text-slate-500 mb-8">
          <Link to="/" className="hover:text-orange-500 transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <Link to={`/catalog?category=${product.category}`} className="hover:text-orange-500 transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 truncate">{product.title}</span>
        </nav>

        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row">
            
            {/* Image Gallery */}
            <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
              <div className="relative aspect-square bg-slate-50 rounded-lg overflow-hidden mb-4 flex-1 border border-slate-200">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`aspect-square rounded-lg border-2 overflow-hidden cursor-pointer ${i === 1 ? 'border-orange-500' : 'border-slate-200 hover:border-slate-300'}`}>
                    <img src={product.image} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <div className="flex justify-between items-start mb-2">
                <div className="text-[12px] text-orange-500 font-bold uppercase tracking-wider">
                  {product.brand}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-full hover:bg-slate-100">
                    <Heart size={20} />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-orange-500 transition-colors rounded-full hover:bg-slate-100">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-1">
                  <Star size={18} className="fill-orange-400 text-orange-400" />
                  <Star size={18} className="fill-orange-400 text-orange-400" />
                  <Star size={18} className="fill-orange-400 text-orange-400" />
                  <Star size={18} className="fill-orange-400 text-orange-400" />
                  <Star size={18} className="fill-orange-400 text-orange-400" />
                  <span className="text-[13px] font-bold text-slate-700 ml-1">{product.rating}</span>
                  <span className="text-[13px] text-orange-500 hover:underline cursor-pointer ml-1 font-semibold">({product.reviews} отзывов)</span>
                </div>
                <div className="text-[13px] text-slate-500 font-mono">
                  Артикул: {product.sku}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-4xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="text-lg text-slate-400 line-through mb-1">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
                {product.inStock ? (
                  <div className="flex items-center gap-1.5 text-[13px] font-bold text-green-600">
                    <CheckCircle size={16} className="text-green-500" /> В наличии и готово к отправке
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[13px] font-bold text-red-600">
                    <AlertCircle size={16} className="text-red-500" /> Нет в наличии
                  </div>
                )}
              </div>

              {/* Compatibility Check */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-8">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-[14px]">
                  <CheckCircle size={18} className="text-green-500" /> Подходит ли это для вашего авто?
                </h3>
                <div className="flex gap-2">
                  <select className="flex-1 border border-slate-200 rounded p-2.5 text-[13px] outline-none focus:border-orange-500 bg-white text-slate-800">
                    <option>Выберите автомобиль</option>
                  </select>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 rounded text-[13px] font-bold transition-colors uppercase">
                    Проверить
                  </button>
                </div>
              </div>

              {/* Supplier Offers Table */}
              <div className="mb-8">
                <h3 className="font-bold text-slate-900 mb-4 text-[16px] border-l-4 border-orange-500 pl-3">Предложения поставщиков</h3>
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left border-collapse text-[13px]">
                    <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="py-3 px-4 font-bold">Склад / Город</th>
                        <th className="py-3 px-4 font-bold">Срок доставки</th>
                        <th className="py-3 px-4 font-bold">Наличие</th>
                        <th className="py-3 px-4 font-bold">Цена</th>
                        <th className="py-3 px-4 font-bold text-right">Действие</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {/* Recommended Offer */}
                      <tr className="bg-orange-50/50 relative">
                        <td className="py-4 px-4 font-semibold text-slate-900">
                          <div className="flex items-center gap-2">
                            <Star size={14} className="text-orange-500 fill-orange-500" />
                            Центральный склад (Москва)
                          </div>
                        </td>
                        <td className="py-4 px-4 text-slate-600">1-2 дня</td>
                        <td className="py-4 px-4 text-green-600 font-semibold">В наличии (&gt;10 шт)</td>
                        <td className="py-4 px-4 font-bold text-slate-900 text-[15px]">${product.price.toFixed(2)}</td>
                        <td className="py-4 px-4 text-right">
                          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-bold transition-colors uppercase text-[11px] flex items-center gap-2 ml-auto">
                            <ShoppingCart size={14} /> В корзину
                          </button>
                        </td>
                      </tr>
                      {/* Other Offers */}
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4 text-slate-700">Склад Партнера (СПб)</td>
                        <td className="py-4 px-4 text-slate-600">3-5 дней</td>
                        <td className="py-4 px-4 text-slate-600">4 шт</td>
                        <td className="py-4 px-4 font-bold text-slate-900 text-[15px]">${(product.price * 0.95).toFixed(2)}</td>
                        <td className="py-4 px-4 text-right">
                          <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded font-bold transition-colors uppercase text-[11px] flex items-center gap-2 ml-auto">
                            <ShoppingCart size={14} /> В корзину
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4 text-slate-700">Склад Партнера (Екатеринбург)</td>
                        <td className="py-4 px-4 text-slate-600">7-10 дней</td>
                        <td className="py-4 px-4 text-slate-600">Под заказ</td>
                        <td className="py-4 px-4 font-bold text-slate-900 text-[15px]">${(product.price * 0.9).toFixed(2)}</td>
                        <td className="py-4 px-4 text-right">
                          <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded font-bold transition-colors uppercase text-[11px] flex items-center gap-2 ml-auto">
                            <ShoppingCart size={14} /> В корзину
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <Truck className="text-orange-500" size={24} />
                  <div>
                    <div className="text-[13px] font-bold text-slate-900">Бесплатная доставка</div>
                    <div className="text-[11px] text-slate-500">При заказе от $50</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-orange-500" size={24} />
                  <div>
                    <div className="text-[13px] font-bold text-slate-900">Гарантия 1 год</div>
                    <div className="text-[11px] text-slate-500">Гарантированное качество</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="flex border-b border-slate-200 overflow-x-auto">
            <button 
              className={`px-8 py-4 font-bold text-[13px] whitespace-nowrap ${activeTab === 'description' ? 'text-orange-500 border-b-2 border-orange-500 bg-orange-50/30' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
              onClick={() => setActiveTab('description')}
            >
              Описание
            </button>
            <button 
              className={`px-8 py-4 font-bold text-[13px] whitespace-nowrap ${activeTab === 'compatibility' ? 'text-orange-500 border-b-2 border-orange-500 bg-orange-50/30' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
              onClick={() => setActiveTab('compatibility')}
            >
              Совместимость
            </button>
            <button 
              className={`px-8 py-4 font-bold text-[13px] whitespace-nowrap ${activeTab === 'specs' ? 'text-orange-500 border-b-2 border-orange-500 bg-orange-50/30' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
              onClick={() => setActiveTab('specs')}
            >
              Характеристики
            </button>
          </div>
          <div className="p-8 lg:p-12">
            {activeTab === 'description' && (
              <div className="prose max-w-none text-slate-600 text-[14px] leading-relaxed">
                <p className="mb-4">
                  Улучшите производительность и надежность вашего автомобиля с помощью этого премиального компонента: {product.title.toLowerCase()}. Произведенный {product.brand}, надежным именем в автомобильной промышленности, этот компонент разработан в соответствии со спецификациями OEM или превосходит их.
                </p>
                <p className="mb-4">
                  Независимо от того, являетесь ли вы профессиональным механиком или автолюбителем, вы оцените точность проектирования и высококачественные материалы, используемые в этой детали. Это обеспечивает оптимальную посадку, долговечность и длительную работу в различных условиях вождения.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-6">
                  <li>Прямая замена для идеальной посадки каждый раз</li>
                  <li>Изготовлен из высококачественных материалов для долговечности</li>
                  <li>Тщательно протестирован для надежной работы</li>
                  <li>Поддерживается 1-летней гарантией производителя</li>
                </ul>
              </div>
            )}
            {activeTab === 'compatibility' && (
              <div>
                <h3 className="font-bold text-slate-900 mb-4 text-[15px]">Известные совместимые автомобили</h3>
                <ul className="space-y-2 text-[14px]">
                  {product.compatibility.map((vehicle, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle size={16} className="text-green-500" /> {vehicle}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="text-orange-600 shrink-0 mt-0.5" size={20} />
                  <p className="text-[13px] text-orange-800">
                    <strong>Примечание:</strong> Этот список может быть неполным. Мы настоятельно рекомендуем использовать наш инструмент проверки совместимости выше или свериться с руководством к вашему автомобилю для подтверждения совместимости перед покупкой.
                  </p>
                </div>
              </div>
            )}
            {activeTab === 'specs' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[14px]">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <th className="py-3 px-4 bg-slate-50 font-bold text-slate-900 w-1/3">Бренд</th>
                      <td className="py-3 px-4 text-slate-600">{product.brand}</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="py-3 px-4 bg-slate-50 font-bold text-slate-900">Артикул (SKU)</th>
                      <td className="py-3 px-4 text-slate-600">{product.sku}</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="py-3 px-4 bg-slate-50 font-bold text-slate-900">Категория</th>
                      <td className="py-3 px-4 text-slate-600">{product.category}</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="py-3 px-4 bg-slate-50 font-bold text-slate-900">Состояние</th>
                      <td className="py-3 px-4 text-slate-600">Новое</td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 bg-slate-50 font-bold text-slate-900">Гарантия</th>
                      <td className="py-3 px-4 text-slate-600">1 год (ограниченная)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
