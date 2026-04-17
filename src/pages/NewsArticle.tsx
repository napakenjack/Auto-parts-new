import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { ArrowLeft, Calendar } from 'lucide-react';

export const NewsArticle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = useStore(state => state.news);
  const navigate = useNavigate();
  
  const article = news.find(n => n.id === id);

  if (!article) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Новость не найдена</h2>
        <p className="text-slate-500 mb-6">Возможно, ссылка была удалена или изменена.</p>
        <button onClick={() => navigate('/news')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-colors">
          Вернуться к новостям
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Link to="/news" className="text-[13px] font-bold text-orange-500 hover:underline flex items-center gap-2 mb-6">
          <ArrowLeft size={16} /> К списку новостей
        </Link>
        
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="w-full h-64 sm:h-80 md:h-[400px]">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-1.5 text-[12px] text-slate-400 font-bold mb-4 uppercase tracking-wider">
              <Calendar size={14} />
              {new Date(article.date).toLocaleDateString('ru-RU')}
            </div>
            <h1 className="text-[26px] md:text-[34px] font-extrabold text-slate-900 mb-8 leading-tight">
              {article.title}
            </h1>
            <div 
              className="prose max-w-none text-slate-700 text-[15px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          </div>
        </article>
      </div>
    </div>
  );
};
