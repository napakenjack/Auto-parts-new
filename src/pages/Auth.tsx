import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Auth: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login/register success
    navigate('/profile');
  };

  return (
    <div className="bg-slate-50 min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        
        <div className="text-center mb-8">
          <h1 className="text-[24px] font-bold text-slate-900 mb-2">
            {mode === 'login' && 'Вход в аккаунт'}
            {mode === 'register' && 'Регистрация'}
            {mode === 'forgot' && 'Восстановление пароля'}
          </h1>
          <p className="text-[13px] text-slate-500">
            {mode === 'login' && 'Добро пожаловать обратно! Пожалуйста, введите ваши данные.'}
            {mode === 'register' && 'Создайте аккаунт для быстрого оформления заказов.'}
            {mode === 'forgot' && 'Введите ваш email, и мы отправим ссылку для сброса.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-bold text-slate-700 mb-1">Имя</label>
                <input required type="text" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="Иван" />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-700 mb-1">Фамилия</label>
                <input required type="text" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="Иванов" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1">Email</label>
            <input required type="email" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="ivan@example.com" />
          </div>

          {mode !== 'forgot' && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-[13px] font-bold text-slate-700">Пароль</label>
                {mode === 'login' && (
                  <button type="button" onClick={() => setMode('forgot')} className="text-[11px] text-orange-500 hover:underline font-semibold">
                    Забыли пароль?
                  </button>
                )}
              </div>
              <input required type="password" className="w-full border border-slate-200 rounded p-2.5 outline-none focus:border-orange-500 text-[14px]" placeholder="••••••••" />
            </div>
          )}

          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition-colors text-[13px] uppercase mt-6">
            {mode === 'login' && 'Войти'}
            {mode === 'register' && 'Зарегистрироваться'}
            {mode === 'forgot' && 'Отправить ссылку'}
          </button>
        </form>

        <div className="mt-6 text-center text-[13px] text-slate-500">
          {mode === 'login' ? (
            <>
              Нет аккаунта?{' '}
              <button onClick={() => setMode('register')} className="text-orange-500 font-bold hover:underline">
                Зарегистрируйтесь
              </button>
            </>
          ) : (
            <>
              Уже есть аккаунт?{' '}
              <button onClick={() => setMode('login')} className="text-orange-500 font-bold hover:underline">
                Войти
              </button>
            </>
          )}
        </div>
        
        <div className="mt-8 text-center border-t border-slate-100 pt-6">
          <Link to="/admin/login" className="text-[11px] text-slate-400 hover:text-slate-600 transition-colors">
            Вход для сотрудников
          </Link>
        </div>

      </div>
    </div>
  );
};
