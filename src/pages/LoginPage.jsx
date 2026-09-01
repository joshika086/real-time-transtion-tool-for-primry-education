import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Key, User, AlertCircle } from 'lucide-react';

export const LoginPage = () => {
  const { login, signup } = useAuth();
  const { lang, changeLanguage, t } = useLanguage();

  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLang, setSelectedLang] = useState(lang);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (isSignUp) {
      const res = signup(name, email, password, selectedLang);
      if (!res.success) {
        setErrorMsg(res.message);
      } else {
        changeLanguage(selectedLang);
      }
    } else {
      const res = login(email, password);
      if (!res.success) {
        setErrorMsg(res.message);
      }
    }
  };

  const fillTestCredentials = () => {
    setEmail('student@example.com');
    setPassword('123456');
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md">
        
        {/* Top Header Branding */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl text-white text-2xl shadow-sm mb-2 transform hover:scale-105 transition">
            📚
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            {t.appName}
          </h1>
          <p className="text-sm font-medium text-slate-600 mt-0.5">
            {t.tagline}
          </p>
        </div>

        {/* Compact Login Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-lg">
          
          <h2 className="text-xl font-bold text-slate-900 mb-4 text-center">
            {isSignUp ? t.createAccountTitle : t.welcomeBack}
          </h2>

          {errorMsg && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-rose-700 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="font-semibold">{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {isSignUp && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  {t.nameLabel}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-800 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">
                {t.emailLabel}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-800 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">
                {t.passwordLabel}
              </label>
              <div className="relative">
                <Key className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-800 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {isSignUp && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  {t.chooseLanguage}
                </label>
                <select
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
                >
                  <option value="en">English</option>
                  <option value="ta">தமிழ் (Tamil)</option>
                  <option value="hi">हिन्दी (Hindi)</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full btn-primary py-3 text-base font-bold mt-1 shadow-sm hover:shadow"
            >
              {isSignUp ? t.createAccountBtn : t.loginBtn}
            </button>
          </form>

          {/* Quick Demo Autofill Button */}
          {!isSignUp && (
            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <button
                type="button"
                onClick={fillTestCredentials}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 transition"
              >
                🔑 Auto-fill Test Login (student@example.com)
              </button>
            </div>
          )}

          {/* Toggle Login/Sign Up */}
          <div className="mt-4 text-center">
            {isSignUp ? (
              <p className="text-slate-600 font-medium text-xs sm:text-sm">
                {t.alreadyAccount}{' '}
                <button
                  onClick={() => { setIsSignUp(false); setErrorMsg(''); }}
                  className="text-indigo-600 font-bold hover:underline underline-offset-4 ml-1"
                >
                  {t.loginLink}
                </button>
              </p>
            ) : (
              <p className="text-slate-600 font-medium text-xs sm:text-sm">
                {t.noAccount}{' '}
                <button
                  onClick={() => { setIsSignUp(true); setErrorMsg(''); }}
                  className="text-indigo-600 font-bold hover:underline underline-offset-4 ml-1"
                >
                  {t.signUpLink}
                </button>
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
