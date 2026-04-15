import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminAuth: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin');
  };

  return (
    <div className="bg-slate-900 min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-[24px] font-bold text-slate-900 mb-2">Панель управления</h1>
          <p className="text-[13px] text-slate-500">Вход для администраторов и менеджеров</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1">Логин / Email</label>
            <input required type="text" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="admin@optparts.ru" />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1">Пароль</label>
            <input required type="password" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition-colors text-[13px] uppercase mt-6">
            Войти в систему
          </button>
        </form>
      </div>
    </div>
  );
};
