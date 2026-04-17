import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Filter, ChevronDown, Check, ChevronRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { CAR_BRANDS, TOYOTA_MODELS, TOYOTA_YEARS, ALL_CATEGORIES } from '../data/categories';

export const Catalog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  const brandParam = searchParams.get('brand');
  const modelParam = searchParams.get('model');
  const yearParam = searchParams.get('year');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryParam || 'All');
  }, [categoryParam]);

  // Filter products based on URL params and selected category
  const filteredProducts = products.filter(p => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (searchParam && !p.title.toLowerCase().includes(searchParam.toLowerCase()) && !p.sku.toLowerCase().includes(searchParam.toLowerCase())) return false;
    return true;
  });

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    navigate(`/catalog?${newParams.toString()}`);
  };

  const clearSelection = (level: 'brand' | 'model' | 'year') => {
    const newParams = new URLSearchParams(searchParams);
    if (level === 'brand') {
      newParams.delete('brand');
      newParams.delete('model');
      newParams.delete('year');
    } else if (level === 'model') {
      newParams.delete('model');
      newParams.delete('year');
    } else if (level === 'year') {
      newParams.delete('year');
    }
    navigate(`/catalog?${newParams.toString()}`);
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-[1920px] w-full mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Breadcrumbs & Title */}
        <div className="mb-6">
          <div className="text-[11px] text-slate-500 mb-2 font-semibold tracking-wide uppercase flex flex-wrap gap-1 items-center">
            <button onClick={() => navigate('/catalog')} className="hover:text-orange-500">Автомобили</button>
            {brandParam && (
              <>
                <ChevronRight size={12} />
                <button onClick={() => clearSelection('model')} className="hover:text-orange-500">{brandParam}</button>
              </>
            )}
            {modelParam && (
              <>
                <ChevronRight size={12} />
                <button onClick={() => clearSelection('year')} className="hover:text-orange-500">{modelParam}</button>
              </>
            )}
            {yearParam && (
              <>
                <ChevronRight size={12} />
                <span className="text-slate-800">{yearParam}</span>
              </>
            )}
            {selectedCategory !== 'All' && (
              <>
                <ChevronRight size={12} />
                <span className="text-orange-500">{selectedCategory}</span>
              </>
            )}
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-[24px] font-bold text-slate-900">
                {searchParam ? `Результаты поиска для "${searchParam}"` : (selectedCategory === 'All' ? 'Все запчасти' : selectedCategory)}
              </h1>
              <p className="text-[13px] text-slate-500 mt-1">Показано {filteredProducts.length} товаров</p>
            </div>
            
            {/* Search Bar */}
            <div className="w-full md:w-[400px] lg:w-[600px] relative">
              <input 
                type="text" 
                placeholder="Поиск в каталоге..." 
                defaultValue={searchParam || ''}
                className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-[14px] outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const val = e.currentTarget.value;
                    if (val) {
                      window.location.hash = `/catalog?search=${encodeURIComponent(val)}`;
                    } else {
                      window.location.hash = `/catalog`;
                    }
                  }
                }}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden w-full bg-white border border-slate-200 py-3 px-4 rounded-lg flex justify-between items-center font-bold text-slate-800"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <div className="flex items-center gap-2">
              <Filter size={18} />
              <span>Фильтры</span>
            </div>
            <ChevronDown size={18} className={`transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Sidebar Filters */}
          <aside className={`w-full lg:w-64 shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white border border-slate-200 rounded-lg p-5 sticky top-24">
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-[16px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900 mb-4">Категории</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setSelectedCategory('All')}
                      className={`text-[13px] w-full text-left flex justify-between items-center ${selectedCategory === 'All' ? 'text-orange-500 font-bold' : 'text-slate-600 hover:text-orange-500'}`}
                    >
                      Все запчасти
                      {selectedCategory === 'All' && <Check size={14} />}
                    </button>
                  </li>
                  {ALL_CATEGORIES.flatMap(group => group.items).slice(0, 15).map((catName, idx) => (
                    <li key={idx}>
                      <button 
                        onClick={() => setSelectedCategory(catName)}
                        className={`text-[13px] w-full text-left flex justify-between items-center ${selectedCategory === catName ? 'text-orange-500 font-bold' : 'text-slate-600 hover:text-orange-500'}`}
                      >
                        {catName}
                        {selectedCategory === catName && <Check size={14} />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-slate-200 my-6" />

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-[16px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900 mb-4">Цена</h3>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="Мин" className="w-full border border-slate-200 rounded px-2 py-1.5 text-[13px] outline-none focus:border-orange-500" />
                  <span className="text-slate-400">-</span>
                  <input type="number" placeholder="Макс" className="w-full border border-slate-200 rounded px-2 py-1.5 text-[13px] outline-none focus:border-orange-500" />
                </div>
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded mt-3 text-[12px] transition-colors">
                  Применить
                </button>
              </div>

              <hr className="border-slate-200 my-6" />

              {/* Availability */}
              <div>
                <h3 className="text-[16px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900 mb-4">Наличие</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" defaultChecked />
                  <span className="text-[13px] text-slate-700">Только в наличии</span>
                </label>
              </div>

              <hr className="border-slate-200 my-6" />

              {/* Mock Filters (Ось, Расположение, etc) */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-[13px] font-bold text-slate-900 mb-2">Ось</h3>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Передняя ось</label>
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Задняя ось</label>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[13px] font-bold text-slate-900 mb-2">Расположение</h3>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Справа</label>
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Слева</label>
                  </div>
                </div>

                <div>
                  <h3 className="text-[13px] font-bold text-slate-900 mb-2">Вентиляция</h3>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Вентилируемые</label>
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Невентилируемые</label>
                  </div>
                </div>

                <div>
                  <h3 className="text-[13px] font-bold text-slate-900 mb-2">Насечки и перфорация</h3>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> С перфорацией</label>
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> С насечками</label>
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Обе опции</label>
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> С несквозным сверлением (ямками)</label>
                  </div>
                </div>

                <div>
                  <h3 className="text-[13px] font-bold text-slate-900 mb-2">Покрытие</h3>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> С антикоррозионным покрытием</label>
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Без покрытия</label>
                  </div>
                </div>

                <div>
                  <h3 className="text-[13px] font-bold text-slate-900 mb-2">Сплав (легирование)</h3>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Высокоуглеродистый</label>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[13px] font-bold text-slate-900 mb-2">Конструкция</h3>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-600 hover:text-orange-500"><input type="checkbox" className="rounded border-slate-300 text-orange-500 focus:ring-orange-500" /> Сдвоенные</label>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid / Navigation Space */}
          <div className="flex-1">

            {/* Vehicle Selection Navigation */}
            {!brandParam ? (
              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-orange-500 pl-3">Выберите марку автомобиля</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                  {CAR_BRANDS.map(brand => (
                    <button 
                      key={brand}
                      onClick={() => updateParam('brand', brand)}
                      className="text-[13px] border border-slate-200 p-2 text-center rounded hover:border-orange-500 hover:text-orange-600 transition-colors bg-slate-50 hover:bg-orange-50"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            ) : brandParam && !modelParam ? (
              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-lg font-bold text-slate-900 border-l-4 border-orange-500 pl-3">Модели {brandParam}</h2>
                  <button onClick={() => clearSelection('brand')} className="text-[12px] text-slate-500 hover:text-orange-500 underline">Все марки</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                  {/* Using TOYOTA_MODELS as a mock for all brands, in real app it would fetch based on brand */}
                  {TOYOTA_MODELS.map(model => (
                    <button 
                      key={model}
                      onClick={() => updateParam('model', model)}
                      className="text-[13px] border border-slate-200 p-2 text-center rounded hover:border-orange-500 hover:text-orange-600 transition-colors bg-slate-50 hover:bg-orange-50"
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>
            ) : brandParam && modelParam && !yearParam ? (
              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-lg font-bold text-slate-900 border-l-4 border-orange-500 pl-3">Год выпуска: {brandParam} {modelParam}</h2>
                  <button onClick={() => clearSelection('model')} className="text-[12px] text-slate-500 hover:text-orange-500 underline">Назад к моделям</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {TOYOTA_YEARS.map(year => (
                    <button 
                      key={year}
                      onClick={() => updateParam('year', year)}
                      className="text-[13px] border border-slate-200 p-2 text-center rounded hover:border-orange-500 hover:text-orange-600 transition-colors bg-slate-50 hover:bg-orange-50 font-bold"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Content Display */}
            {yearParam || searchParam || categoryParam !== null ? (
              <>
                {/* Toolbar */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 mb-6 flex justify-between items-center">
              <div className="text-[13px] text-slate-500">
                Показано <span className="font-bold text-slate-900">{filteredProducts.length}</span> результатов
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-slate-500">Сортировка:</span>
                <select className="border border-slate-200 rounded px-2 py-1.5 text-[13px] outline-none focus:border-orange-500 text-slate-800 font-medium">
                  <option>Рекомендуемые</option>
                  <option>Цена: по возрастанию</option>
                  <option>Цена: по убыванию</option>
                  <option>Новинки</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-lg p-12 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Товары не найдены</h3>
                <p className="text-slate-500 mb-6">Мы не смогли найти запчасти, соответствующие вашим фильтрам.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('All');
                    window.history.pushState({}, '', '/#/catalog');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-colors"
                >
                  Сбросить все фильтры
                </button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex gap-1">
                  <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded bg-white text-slate-500 hover:bg-slate-50 hover:text-orange-500 transition-colors">
                    &laquo;
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-orange-500 rounded bg-orange-500 text-white font-bold">
                    1
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded bg-white text-slate-700 hover:bg-slate-50 hover:text-orange-500 transition-colors font-medium">
                    2
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded bg-white text-slate-700 hover:bg-slate-50 hover:text-orange-500 transition-colors font-medium">
                    3
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded bg-white text-slate-500 hover:bg-slate-50 hover:text-orange-500 transition-colors">
                    &raquo;
                  </button>
                </div>
              </div>
            )}
              </>
            ) : (
              <div className="bg-white border border-slate-200 rounded-lg p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Выберите параметры автомобиля</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  Для точного подбора запчастей выберите марку, модель и год выпуска вашего транспортного средства.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
