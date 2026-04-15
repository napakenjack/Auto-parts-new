import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Wrench, Users, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1632823462943-26f0b6d450d5?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Держим вас в пути</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            AutoGear — ваш надежный источник высококачественных автозапчастей, обеспечивающий надежность и производительность для механиков и автовладельцев по всей стране.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-[28px] font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-4">Наша история</h2>
              <div className="prose text-slate-600 text-[15px] leading-relaxed">
                <p className="mb-4">
                  Основанная в 2010 году командой увлеченных механиков, компания AutoGear начала с простой миссии: сделать поиск нужных автозапчастей простым, быстрым и надежным.
                </p>
                <p className="mb-4">
                  Мы устали от путаницы и задержек, связанных с традиционным поиском запчастей. Мы знали, что должен быть лучший способ связать водителей и ремонтные мастерские с именно теми компонентами, которые им нужны.
                </p>
                <p>
                  Сегодня мы управляем общенациональной сетью складов, на которых хранится более 500 000 уникальных артикулов от ведущих производителей. Наша запатентованная технология подбора гарантирует, что заказанная вами деталь гарантированно подойдет к вашему конкретному автомобилю.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=800" 
                alt="Mechanic working on a car" 
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Trust Us */}
      <div className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[28px] font-bold text-slate-900 mb-4">Почему клиенты доверяют AutoGear</h2>
            <p className="text-[15px] text-slate-500 max-w-2xl mx-auto">Мы не просто продаем запчасти; мы обеспечиваем душевное спокойствие при каждом ремонте и обновлении.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded border border-slate-200 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-3">Гарантированная совместимость</h3>
              <p className="text-[14px] text-slate-600">
                Наша передовая система подбора автомобилей гарантирует, что вы получите нужную деталь с первого раза, или мы исправим это за наш счет.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded border border-slate-200 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck size={32} />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-3">Молниеносная доставка</h3>
              <p className="text-[14px] text-slate-600">
                Благодаря складам, стратегически расположенным по всей стране, 95% наших заказов доставляются в течение 1-3 рабочих дней.
              </p>
            </div>

            <div className="bg-white p-8 rounded border border-slate-200 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-3">Экспертная поддержка</h3>
              <p className="text-[14px] text-slate-600">
                Наша команда обслуживания клиентов состоит из сертифицированных специалистов по запчастям ASE, готовых помочь вам в решении любых задач по ремонту.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[28px] font-bold text-slate-900 mb-6">Готовы найти свои запчасти?</h2>
          <p className="text-[16px] text-slate-600 mb-8">
            Ищите в нашем обширном каталоге по автомобилю, бренду или номеру детали.
          </p>
          <Link to="/catalog" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded transition-colors text-[14px] uppercase tracking-wider">
            Перейти в каталог <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
