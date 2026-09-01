import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { LearnPage } from './pages/LearnPage';
import { LessonPage } from './pages/LessonPage';
import { TranslationPage } from './pages/TranslationPage';
import { SpeakPage } from './pages/SpeakPage';
import { QuizPage } from './pages/QuizPage';
import { ProgressPage } from './pages/ProgressPage';
import { lessonsData } from './data/lessons';

function AppContent() {
  const { user, loading } = useAuth();
  const [activePage, setActivePage] = useState('home');
  const [selectedLesson, setSelectedLesson] = useState(lessonsData[0]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xl font-bold text-slate-700">Loading VernacularLearn...</p>
        </div>
      </div>
    );
  }

  // Auth Guard
  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-grow pb-16">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={setActivePage}
            onSelectLesson={setSelectedLesson}
          />
        )}

        {activePage === 'learn' && (
          <LearnPage 
            onSelectLesson={setSelectedLesson}
            onNavigate={setActivePage}
          />
        )}

        {activePage === 'lesson' && (
          <LessonPage 
            lesson={selectedLesson}
            onNavigate={setActivePage}
            onStartQuiz={setSelectedLesson}
          />
        )}

        {activePage === 'translate' && (
          <TranslationPage />
        )}

        {activePage === 'speak' && (
          <SpeakPage />
        )}

        {activePage === 'quiz' && (
          <QuizPage 
            lesson={selectedLesson}
            onNavigate={setActivePage}
          />
        )}

        {activePage === 'progress' && (
          <ProgressPage 
            onNavigate={setActivePage}
            onSelectLesson={setSelectedLesson}
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 text-center text-slate-500 font-medium text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>📚 <strong>VernacularLearn</strong> – Learn Better. Learn in Your Language.</span>
          <span>Designed for Primary Education (English, தமிழ், हिन्दी)</span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
}
