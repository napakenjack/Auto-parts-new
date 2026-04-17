import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { ArrowLeft, Calendar } from 'lucide-react';

export const NewsList: React.FC = () => {
  const news = useStore(state => state.news);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link to="/" className="text-[13px] font-bold text-orange-500 hover:underline flex items-center gap-2 mb-4">
            <ArrowLeft size={16} /> На главную
          </Link>
          <h1 className="text-[28px] font-bold text-slate-900 border-l-4 border-orange-500 pl-4 py-1">Все новости</h1>
        </div>
        <div className="space-y-4">
          {news.map(item => (
            <Link key={item.id} to={`/news/${item.id}`} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row gap-5 hover:border-orange-500 hover:shadow-sm transition-all group">
              <div className="w-full sm:w-56 h-36 shrink-0 rounded-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-center py-1">
                <div className="text-[11px] text-slate-400 font-bold mb-2 uppercase tracking-wide flex items-center gap-1.5">
                  <Calendar size={12} />
                  {new Date(item.date).toLocaleDateString('ru-RU')}
                </div>
                <h2 className="text-[18px] font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h2>
                <div className="text-[13px] text-slate-500 line-clamp-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </Link>
          ))}
          {news.length === 0 && (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-xl text-slate-500">Нет доступных новостей.</div>
          )}
        </div>
      </div>
    </div>
  );
};
