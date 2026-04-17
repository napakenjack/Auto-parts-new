import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Truck, Percent, GitMerge, ShoppingCart, Activity,
  ArrowLeft, Search, Filter, Edit, CheckCircle, XCircle,
  Plus, Save, LogOut, Newspaper, Trash2
} from 'lucide-react';
import { useStore, NewsItem } from '../store';

export const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingSupplier, setEditingSupplier] = useState<any>(null);
  const [viewingOrder, setViewingOrder] = useState<any>(null);
  const [editingNews, setEditingNews] = useState<Partial<NewsItem> | null>(null);
  const navigate = useNavigate();
  const { news, addNews, updateNews, deleteNews } = useStore();

  const renderDashboard = () => (
    <div>
      <h2 className="text-[18px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Общая статистика</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Заказы */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-orange-500 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Заказы (сегодня)</div>
              <div className="text-[36px] font-bold text-slate-900 leading-none">156</div>
            </div>
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center">
              <ShoppingCart size={24} />
            </div>
          </div>
          <div className="flex gap-4 text-[13px]">
            <div className="text-green-600 font-bold flex items-center gap-1">↑ 12% со вчера</div>
            <div className="text-slate-500">На сумму 450,000 ₸</div>
          </div>
        </div>

        {/* Интеграции */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-red-500 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Ошибки интеграции</div>
              <div className="text-[36px] font-bold text-slate-900 leading-none">3</div>
            </div>
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
              <XCircle size={24} />
            </div>
          </div>
          <div className="text-[13px] text-slate-600 mb-2">Последнее: <span className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded text-red-600">Timeout globalspares.net</span></div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1 mt-3">
            <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
          </div>
          <div className="text-[11px] text-slate-500 text-right">Успешность запросов: 99.8%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Активные поставщики</div>
          <div className="text-[28px] font-bold text-slate-900">8</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Статус очереди</div>
          <div className="text-[28px] font-bold text-green-500">Норма</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Новых клиентов</div>
          <div className="text-[28px] font-bold text-slate-900">24</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Доставлено сегодня</div>
          <div className="text-[28px] font-bold text-slate-900">92</div>
        </div>
      </div>
    </div>
  );

  const renderSuppliers = () => {
    if (editingSupplier) return renderSupplierEdit();

    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[18px] font-bold text-slate-900 border-l-4 border-orange-500 pl-3">Поставщики</h2>
          <button onClick={() => setEditingSupplier({})} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-[13px] font-bold flex items-center gap-2">
            <Plus size={16} /> Добавить поставщика
          </button>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4 font-bold">Название</th>
                <th className="p-4 font-bold">API URL</th>
                <th className="p-4 font-bold">Статус</th>
                <th className="p-4 font-bold text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-4 font-bold text-slate-900">AutoParts Wholesale</td>
                <td className="p-4 text-slate-500">api.autoparts-w.com/v1</td>
                <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-[10px] font-bold uppercase">Активен</span></td>
                <td className="p-4 text-right">
                  <button onClick={() => setEditingSupplier({ id: 1 })} className="text-slate-400 hover:text-orange-500"><Edit size={16} /></button>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900">Global Spares</td>
                <td className="p-4 text-slate-500">api.globalspares.net/rest</td>
                <td className="p-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold uppercase">Неактивен</span></td>
                <td className="p-4 text-right">
                  <button onClick={() => setEditingSupplier({ id: 2 })} className="text-slate-400 hover:text-orange-500"><Edit size={16} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderSupplierEdit = () => (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setEditingSupplier(null)} className="text-slate-400 hover:text-slate-900"><ArrowLeft size={20} /></button>
        <h2 className="text-[18px] font-bold text-slate-900 border-l-4 border-orange-500 pl-3">Редактирование поставщика</h2>
      </div>
      <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1">Название поставщика</label>
            <input type="text" defaultValue="AutoParts Wholesale" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1">API URL</label>
            <input type="text" defaultValue="https://api.autoparts-w.com/v1" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1">API Ключи (JSON / Bearer)</label>
            <textarea className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px] font-mono h-20" defaultValue="sk_live_123456789"></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-1">Лимиты (запросов/сек)</label>
              <input type="number" defaultValue="10" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-1">Таймаут (мс)</label>
              <input type="number" defaultValue="5000" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" />
            </div>
          </div>
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1">Политика повторов (Retry policy)</label>
            <select className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]">
              <option>Exponential Backoff (3 попытки)</option>
              <option>Linear (2 попытки)</option>
              <option>Без повторов</option>
            </select>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <input type="checkbox" id="active-switch" defaultChecked className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-slate-300 rounded" />
            <label htmlFor="active-switch" className="text-[14px] font-bold text-slate-900">Активен</label>
          </div>
          <div className="pt-6 flex gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded text-[13px] font-bold flex items-center gap-2">
              <Save size={16} /> Сохранить
            </button>
            <button onClick={() => setEditingSupplier(null)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-2.5 rounded text-[13px] font-bold">
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarkup = () => (
    <div>
      <h2 className="text-[18px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Управление наценками</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h3 className="font-bold text-slate-900 mb-4">Глобальные настройки</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-1">Глобальная наценка (%)</label>
              <input type="number" defaultValue="25" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-1">Минимальная маржа (₸)</label>
              <input type="number" defaultValue="5" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-1">Правила округления</label>
              <select className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]">
                <option>Математическое (до сотых)</option>
                <option>До целого (вверх)</option>
                <option>До .99</option>
              </select>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-[13px] font-bold mt-2">Сохранить глобальные</button>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h3 className="font-bold text-slate-900 mb-4">Специфичные наценки</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-2">Наценка по сумме заказа</label>
              <div className="border border-slate-200 rounded divide-y divide-slate-200">
                <div className="flex items-center gap-4 p-3 bg-slate-50 text-[13px]">
                  <input type="number" defaultValue="0" className="w-20 border border-slate-200 rounded p-1 text-center" />
                  <span>до</span>
                  <input type="number" defaultValue="1000" className="w-20 border border-slate-200 rounded p-1 text-center" />
                  <span>₸</span>
                  <div className="flex-1 text-right">
                    <span className="mr-2">наценка:</span>
                    <input type="number" defaultValue="200" className="w-20 border border-slate-200 rounded p-1 text-center font-bold text-orange-600" />
                    <span>%</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-50 text-[13px]">
                  <input type="number" defaultValue="1001" className="w-20 border border-slate-200 rounded p-1 text-center" />
                  <span>до</span>
                  <input type="number" defaultValue="5000" className="w-20 border border-slate-200 rounded p-1 text-center" />
                  <span>₸</span>
                  <div className="flex-1 text-right">
                    <span className="mr-2">наценка:</span>
                    <input type="number" defaultValue="100" className="w-20 border border-slate-200 rounded p-1 text-center font-bold text-orange-600" />
                    <span>%</span>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <button className="text-[12px] font-bold text-orange-500">+ Добавить диапазон</button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-1">Наценка по поставщикам</label>
              <div className="border border-slate-200 rounded p-3 space-y-2">
                <div className="flex justify-between items-center text-[13px]">
                  <span>AutoParts Wholesale</span>
                  <input type="number" defaultValue="20" className="w-20 border border-slate-200 rounded p-1 text-center" />
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span>Global Spares</span>
                  <input type="number" defaultValue="30" className="w-20 border border-slate-200 rounded p-1 text-center" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-bold text-slate-700 mb-1">Наценка по брендам</label>
              <div className="border border-slate-200 rounded p-3 space-y-2">
                <div className="flex justify-between items-center text-[13px]">
                  <span>BOSCH</span>
                  <input type="number" defaultValue="15" className="w-20 border border-slate-200 rounded p-1 text-center" />
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span>Brembo</span>
                  <input type="number" defaultValue="18" className="w-20 border border-slate-200 rounded p-1 text-center" />
                </div>
              </div>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-[13px] font-bold mt-2">Сохранить специфичные</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRules = () => (
    <div>
      <h2 className="text-[18px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Правила выбора предложений</h2>
      <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-3xl">
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg bg-slate-50">
            <input type="radio" name="priority" id="price" defaultChecked className="mt-1 text-orange-500 focus:ring-orange-500" />
            <div>
              <label htmlFor="price" className="font-bold text-slate-900 block mb-1">Приоритет минимальной цены</label>
              <p className="text-[13px] text-slate-500">Система всегда будет выбирать предложение с наименьшей закупочной ценой, игнорируя сроки доставки.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <input type="radio" name="priority" id="time" className="mt-1 text-orange-500 focus:ring-orange-500" />
            <div>
              <label htmlFor="time" className="font-bold text-slate-900 block mb-1">Приоритет лучшего времени доставки</label>
              <p className="text-[13px] text-slate-500">Система выберет предложение с самой быстрой доставкой, даже если оно дороже.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <input type="radio" name="priority" id="combined" className="mt-1 text-orange-500 focus:ring-orange-500" />
            <div className="w-full">
              <label htmlFor="combined" className="font-bold text-slate-900 block mb-1">Комбинированные условия</label>
              <p className="text-[13px] text-slate-500 mb-3">Баланс между ценой и скоростью доставки.</p>
              <div className="flex items-center gap-2 text-[13px]">
                <span>Допустимая переплата:</span>
                <input type="number" defaultValue="5" className="w-16 border border-slate-200 rounded p-1 text-center" />
                <span>% за каждый день ускорения доставки</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 mb-3">Приоритет складов (Drag & Drop)</h3>
            <div className="border border-slate-200 rounded divide-y divide-slate-200 text-[13px]">
              <div className="p-3 bg-white flex justify-between items-center cursor-move">
                <span className="font-bold">1. Центральный склад (Свой)</span>
                <Activity size={14} className="text-slate-400" />
              </div>
              <div className="p-3 bg-white flex justify-between items-center cursor-move">
                <span>2. AutoParts Wholesale (Локальный)</span>
                <Activity size={14} className="text-slate-400" />
              </div>
              <div className="p-3 bg-white flex justify-between items-center cursor-move">
                <span>3. Global Spares (Удаленный)</span>
                <Activity size={14} className="text-slate-400" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-6 mt-6">
            <h3 className="font-bold text-slate-900 mb-4">Дополнительные условия отсева</h3>
            <div className="space-y-4">
              <label className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded cursor-pointer hover:border-orange-500 transition-colors">
                <input type="checkbox" defaultChecked className="mt-1 text-orange-500 focus:ring-orange-500" />
                <div>
                  <div className="font-bold text-slate-900 text-[13px]">Скрывать предложения со сроком доставки более 14 дней</div>
                  <div className="text-[12px] text-slate-500">Товары, которые идут слишком долго, не будут показываться в выдаче.</div>
                </div>
              </label>
              <label className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded cursor-pointer hover:border-orange-500 transition-colors">
                <input type="checkbox" defaultChecked className="mt-1 text-orange-500 focus:ring-orange-500" />
                <div>
                  <div className="font-bold text-slate-900 text-[13px]">Объединять идентичные товары</div>
                  <div className="text-[12px] text-slate-500">Показывать только лучшее предложение (по цене/вероятности) от одного поставщика.</div>
                </div>
              </label>
              <label className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded cursor-pointer hover:border-orange-500 transition-colors">
                <input type="checkbox" defaultChecked className="mt-1 text-orange-500 focus:ring-orange-500" />
                <div>
                  <div className="font-bold text-slate-900 text-[13px]">Строгое совпадение бренда</div>
                  <div className="text-[12px] text-slate-500">Скрывать неявные аналоги и кроссы, показывать только запрошенный бренд.</div>
                </div>
              </label>
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded text-[13px] font-bold flex items-center gap-2 mt-6">
            <Save size={16} /> Сохранить правила
          </button>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => {
    if (viewingOrder) return renderOrderDetails();

    return (
      <div>
        <h2 className="text-[18px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Заказы клиентов</h2>
        
        {/* Filters */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 mb-6 flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Поиск</label>
            <div className="relative">
              <input type="text" placeholder="Номер заказа, клиент..." className="w-full border border-slate-200 rounded p-2 pl-8 outline-none focus:border-orange-500 text-[13px]" />
              <Search size={14} className="absolute left-2.5 top-2.5 text-slate-400" />
            </div>
          </div>
          <div className="w-40">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Статус</label>
            <select className="w-full border border-slate-200 rounded p-2 outline-none focus:border-orange-500 text-[13px]">
              <option>Все статусы</option>
              <option>Новый</option>
              <option>В обработке</option>
              <option>Доставлен</option>
            </select>
          </div>
          <div className="w-40">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Дата</label>
            <input type="date" className="w-full border border-slate-200 rounded p-2 outline-none focus:border-orange-500 text-[13px]" />
          </div>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded text-[13px] font-bold flex items-center gap-2 h-[38px]">
            <Filter size={14} /> Фильтр
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4 font-bold">Заказ</th>
                <th className="p-4 font-bold">Дата</th>
                <th className="p-4 font-bold">Клиент</th>
                <th className="p-4 font-bold">Сумма</th>
                <th className="p-4 font-bold">Статус</th>
                <th className="p-4 font-bold text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-slate-900">#AG-84729</td>
                <td className="p-4 text-slate-500">12 Окт 2023</td>
                <td className="p-4 text-slate-900">Иван Иванов</td>
                <td className="p-4 font-bold text-slate-900">104.98 ₸</td>
                <td className="p-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase">В обработке</span></td>
                <td className="p-4 text-right">
                  <button onClick={() => setViewingOrder({ id: 'AG-84729' })} className="text-orange-500 hover:text-orange-600 font-bold text-[12px] uppercase">Подробнее</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-slate-900">#AG-84728</td>
                <td className="p-4 text-slate-500">11 Окт 2023</td>
                <td className="p-4 text-slate-900">Анна Смирнова</td>
                <td className="p-4 font-bold text-slate-900">45.00 ₸</td>
                <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-[10px] font-bold uppercase">Доставлен</span></td>
                <td className="p-4 text-right">
                  <button onClick={() => setViewingOrder({ id: 'AG-84728' })} className="text-orange-500 hover:text-orange-600 font-bold text-[12px] uppercase">Подробнее</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderOrderDetails = () => (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setViewingOrder(null)} className="text-slate-400 hover:text-slate-900"><ArrowLeft size={20} /></button>
        <h2 className="text-[18px] font-bold text-slate-900 border-l-4 border-orange-500 pl-3">Заказ #{viewingOrder.id}</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Items */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-4">Товары в заказе</h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3 font-bold">Артикул</th>
                    <th className="p-3 font-bold">Название</th>
                    <th className="p-3 font-bold text-center">Кол-во</th>
                    <th className="p-3 font-bold text-right">Сумма</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 text-slate-500">BM-CP-9021</td>
                    <td className="p-3 font-bold text-slate-900">Комплект керамических тормозных колодок</td>
                    <td className="p-3 text-center">2</td>
                    <td className="p-3 text-right font-bold">91.98 ₸</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Status Controls */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-4">Управление статусом</h3>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Текущий статус</label>
                <select className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px] font-bold text-slate-900">
                  <option>Новый</option>
                  <option selected>В обработке</option>
                  <option>Передан курьеру</option>
                  <option>Доставлен</option>
                  <option>Отменен</option>
                </select>
              </div>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded text-[13px] font-bold">
                Обновить статус
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Customer Info */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-4">Клиент и Доставка</h3>
            <div className="text-[13px] text-slate-600 space-y-2">
              <div><span className="font-bold text-slate-900">Имя:</span> Иван Иванов</div>
              <div><span className="font-bold text-slate-900">Email:</span> ivan@example.com</div>
              <div><span className="font-bold text-slate-900">Телефон:</span> +7 (999) 000-00-00</div>
              <div className="pt-2 border-t border-slate-100 mt-2">
                <span className="font-bold text-slate-900 block mb-1">Адрес доставки:</span>
                ул. Кунаева, д. 1, кв. 1<br/>Астана, 010000
              </div>
            </div>
          </div>

          {/* Manager Comment */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-4">Комментарий менеджера</h3>
            <textarea className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[13px] h-24" placeholder="Внутренние заметки по заказу..."></textarea>
            <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded text-[12px] font-bold mt-2">
              Сохранить комментарий
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNews = () => {
    if (editingNews) {
      return (
        <div>
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setEditingNews(null)} className="text-slate-400 hover:text-slate-900"><ArrowLeft size={20} /></button>
            <h2 className="text-[18px] font-bold text-slate-900 border-l-4 border-orange-500 pl-3">
              {editingNews.id ? 'Редактировать новость' : 'Создать новость'}
            </h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-3xl">
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-bold text-slate-700 mb-1">Заголовок</label>
                <input 
                  type="text" 
                  value={editingNews.title || ''}
                  onChange={e => setEditingNews({...editingNews, title: e.target.value})}
                  className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" 
                  placeholder="Введите заголовок"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-700 mb-1">URL Картинки (Загрузка)</label>
                <input 
                  type="text" 
                  value={editingNews.image || ''}
                  onChange={e => setEditingNews({...editingNews, image: e.target.value})}
                  className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" 
                  placeholder="https://images.unsplash.com/..."
                />
                {editingNews.image && (
                  <div className="mt-2 h-32 rounded bg-slate-100 overflow-hidden border border-slate-200">
                    <img src={editingNews.image} alt="Preview" className="h-full object-cover" />
                  </div>
                )}
              </div>
              <div>
                <div className="flex justify-between items-end mb-1">
                  <label className="block text-[13px] font-bold text-slate-700">Описание (HTML поддерживается)</label>
                  <div className="flex gap-1 text-[11px] font-mono text-slate-500 bg-slate-100 p-1 rounded">
                    <span>&lt;b&gt;жирный&lt;/b&gt;</span>
                    <span>&lt;i&gt;курсив&lt;/i&gt;</span>
                    <span>&lt;h3&gt;заголовок&lt;/h3&gt;</span>
                  </div>
                </div>
                <textarea 
                  value={editingNews.content || ''}
                  onChange={e => setEditingNews({...editingNews, content: e.target.value})}
                  className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px] h-40" 
                  placeholder="Описание новости..."
                ></textarea>
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  onClick={() => {
                    const toSave = { 
                      ...editingNews, 
                      id: editingNews.id || Date.now().toString(),
                      date: editingNews.date || new Date().toISOString()
                    } as NewsItem;
                    if (editingNews.id) updateNews(toSave);
                    else addNews(toSave);
                    setEditingNews(null);
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded text-[13px] font-bold flex items-center gap-2"
                >
                  <Save size={16} /> Сохранить
                </button>
                <button onClick={() => setEditingNews(null)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-2.5 rounded text-[13px] font-bold">
                  Отмена
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[18px] font-bold text-slate-900 border-l-4 border-orange-500 pl-3">Лента новостей</h2>
          <button 
            onClick={() => setEditingNews({ title: '', content: '', image: '' })} 
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-[13px] font-bold flex items-center gap-2"
          >
            <Plus size={16} /> Добавить новость
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4 font-bold">Фото</th>
                <th className="p-4 font-bold w-1/3">Заголовок</th>
                <th className="p-4 font-bold">Дата</th>
                <th className="p-4 font-bold text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {news.map(item => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="p-4">
                    <div className="w-16 h-10 rounded overflow-hidden bg-slate-100">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="p-4 font-bold text-slate-900">{item.title}</td>
                  <td className="p-4 text-slate-500">{new Date(item.date).toLocaleDateString('ru-RU')}</td>
                  <td className="p-4 text-right">
                    <button onClick={() => setEditingNews(item)} className="text-slate-400 hover:text-blue-500 p-2"><Edit size={16} /></button>
                    <button onClick={() => deleteNews(item.id)} className="text-slate-400 hover:text-red-500 p-2"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
              {news.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">Лента пуста. Добавьте первую новость.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderMonitoring = () => (
    <div>
      <h2 className="text-[18px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-3">Мониторинг интеграций</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center shrink-0">
            <XCircle size={24} />
          </div>
          <div>
            <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider">Ошибки API (24ч)</div>
            <div className="text-[24px] font-bold text-slate-900">12</div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center shrink-0">
            <CheckCircle size={24} />
          </div>
          <div>
            <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider">Успешность ответов</div>
            <div className="text-[24px] font-bold text-slate-900">99.8%</div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center shrink-0">
            <Activity size={24} />
          </div>
          <div>
            <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider">Задач в очереди</div>
            <div className="text-[24px] font-bold text-slate-900">45</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <h3 className="font-bold text-slate-900">Повторные и неудачные задачи (Jobs)</h3>
        </div>
        <table className="w-full text-left text-[13px]">
          <thead className="bg-white border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
            <tr>
              <th className="p-4 font-bold">ID Задачи</th>
              <th className="p-4 font-bold">Поставщик</th>
              <th className="p-4 font-bold">Ошибка</th>
              <th className="p-4 font-bold">Попытка</th>
              <th className="p-4 font-bold text-right">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr className="hover:bg-slate-50">
              <td className="p-4 font-mono text-slate-600">job_982374</td>
              <td className="p-4 font-bold text-slate-900">Global Spares</td>
              <td className="p-4 text-red-500">Timeout after 5000ms</td>
              <td className="p-4 text-slate-500">3 / 3 (Failed)</td>
              <td className="p-4 text-right">
                <button className="text-[12px] font-bold text-orange-500 hover:text-orange-600 uppercase">Перезапустить</button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4 font-mono text-slate-600">job_982375</td>
              <td className="p-4 font-bold text-slate-900">AutoParts Wholesale</td>
              <td className="p-4 text-orange-500">Rate limit exceeded</td>
              <td className="p-4 text-slate-500">1 / 3 (Pending retry)</td>
              <td className="p-4 text-right">
                <button className="text-[12px] font-bold text-slate-400 hover:text-slate-600 uppercase">Отменить</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0">
          <Link to="/" className="font-extrabold text-[20px] flex items-center gap-1 tracking-tight">
            <span className="text-white">Opt</span><span className="text-orange-500">Parts</span>
          </Link>
          <span className="ml-2 text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-bold uppercase tracking-wider">Admin</span>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 px-3 mt-2">Управление</div>
          <nav className="space-y-1">
            <button onClick={() => {setActiveTab('dashboard'); setEditingSupplier(null); setViewingOrder(null); setEditingNews(null);}} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <LayoutDashboard size={18} /> Дашборд
            </button>
            <button onClick={() => {setActiveTab('orders'); setEditingSupplier(null); setViewingOrder(null); setEditingNews(null);}} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-medium transition-colors ${activeTab === 'orders' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <ShoppingCart size={18} /> Заказы <span className="ml-auto bg-orange-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">12</span>
            </button>
          </nav>

          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 px-3 mt-6">Сайт контент</div>
          <nav className="space-y-1">
            <button onClick={() => {setActiveTab('news'); setEditingSupplier(null); setViewingOrder(null); setEditingNews(null);}} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-medium transition-colors ${activeTab === 'news' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <Newspaper size={18} /> Лента новостей
            </button>
          </nav>

          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 px-3 mt-6">Автоматизация</div>
          <nav className="space-y-1">
            <button onClick={() => {setActiveTab('suppliers'); setEditingSupplier(null); setViewingOrder(null); setEditingNews(null);}} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-medium transition-colors ${activeTab === 'suppliers' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <Truck size={18} /> Поставщики и API
            </button>
            <button onClick={() => {setActiveTab('markup'); setEditingSupplier(null); setViewingOrder(null); setEditingNews(null);}} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-medium transition-colors ${activeTab === 'markup' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <Percent size={18} /> Правила наценок
            </button>
            <button onClick={() => {setActiveTab('rules'); setEditingSupplier(null); setViewingOrder(null); setEditingNews(null);}} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-medium transition-colors ${activeTab === 'rules' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <GitMerge size={18} /> Алгоритм выбора
            </button>
            <button onClick={() => {setActiveTab('monitoring'); setEditingSupplier(null); setViewingOrder(null); setEditingNews(null);}} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-medium transition-colors ${activeTab === 'monitoring' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <Activity size={18} /> Логи и Мониторинг
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 shrink-0">
          <button onClick={() => navigate('/admin/login')} className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
            <LogOut size={18} /> Выход
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">
          <div className="font-bold text-slate-800">
            {activeTab === 'dashboard' && 'Обзор панели'}
            {activeTab === 'orders' && 'Управление заказами'}
            {activeTab === 'suppliers' && 'Настройка поставщиков'}
            {activeTab === 'markup' && 'Управление ценообразованием'}
            {activeTab === 'rules' && 'Настройка алгоритмов'}
            {activeTab === 'monitoring' && 'Состояние системы'}
            {activeTab === 'news' && 'Лента новостей'}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input type="text" placeholder="Глобальный поиск..." className="bg-slate-100 border-none rounded-full px-4 text-[13px] py-1.5 outline-none focus:ring-2 w-64 focus:ring-orange-500" />
              <Search size={14} className="absolute right-3 top-2 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'news' && renderNews()}
            {activeTab === 'suppliers' && renderSuppliers()}
            {activeTab === 'markup' && renderMarkup()}
            {activeTab === 'rules' && renderRules()}
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'monitoring' && renderMonitoring()}
          </div>
        </main>
      </div>
    </div>
  );
};
