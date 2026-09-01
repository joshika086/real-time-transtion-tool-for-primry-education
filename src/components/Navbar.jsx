import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Languages, Mic, Home, Award, LogOut, Menu, X, User } from 'lucide-react';

export const Navbar = ({ activePage, setActivePage }) => {
  const { user, logout } = useAuth();
  const { lang, changeLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!user) return null;

  const navItems = [
    { id: 'home', label: t.navHome, icon: Home },
    { id: 'learn', label: t.navLearn, icon: BookOpen },
    { id: 'translate', label: t.navTranslate, icon: Languages },
    { id: 'speak', label: t.navSpeak, icon: Mic },
    { id: 'progress', label: t.navProgress, icon: Award },
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Tagline */}
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-sm group-hover:scale-105 transition transform">
              📚
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-900 block tracking-tight">
                {t.appName}
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:block">
                {t.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activePage === item.id || 
                (item.id === 'learn' && (activePage === 'lesson' || activePage === 'quiz'));

              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-base transition-colors ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector & User Profile */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Language Selector */}
            <div className="relative flex items-center bg-slate-100 border border-slate-200 rounded-2xl px-3 py-2">
              <span className="text-xs font-bold text-slate-500 mr-2">{t.languageLabel}:</span>
              <select
                value={lang}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-transparent font-bold text-slate-800 text-sm focus:outline-none cursor-pointer pr-1"
              >
                <option value="en">English</option>
                <option value="ta">தமிழ் (Tamil)</option>
                <option value="hi">हिन्दी (Hindi)</option>
              </select>
            </div>

            {/* Profile badge */}
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                <User className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm text-slate-700 max-w-[100px] truncate">
                {user.name}
              </span>
            </div>

            {/* Logout Button */}
            <button
              onClick={logout}
              title={t.logout}
              className="p-2.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile language picker */}
            <select
              value={lang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-slate-100 border border-slate-200 font-bold text-slate-800 text-xs px-2.5 py-2 rounded-xl"
            >
              <option value="en">English</option>
              <option value="ta">தமிழ்</option>
              <option value="hi">हिन्दी</option>
            </select>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-lg text-left ${
                  isActive ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-bold text-slate-800">{user.name}</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 text-rose-600 font-semibold px-3 py-2 rounded-xl bg-rose-50"
            >
              <LogOut className="w-4 h-4" />
              <span>{t.logout}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
