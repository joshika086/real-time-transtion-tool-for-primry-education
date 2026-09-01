import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Languages, Mic, ArrowRight, Sparkles } from 'lucide-react';
import { lessonsData } from '../data/lessons';

export const HomePage = ({ onNavigate, onSelectLesson }) => {
  const { t, lang, progress } = useLanguage();

  // Find latest or current lesson
  const currentLesson = lessonsData.find(l => l.id === progress.currentLessonId) || lessonsData[0];

  const mainCards = [
    {
      id: 'learn',
      title: t.cardLearnTitle,
      emoji: '📚',
      description: t.cardLearnDesc,
      bg: 'bg-indigo-50 hover:bg-indigo-100/80 border-indigo-200',
      btnColor: 'bg-indigo-600 hover:bg-indigo-700 text-white',
      icon: BookOpen
    },
    {
      id: 'translate',
      title: t.cardTranslateTitle,
      emoji: '🌐',
      description: t.cardTranslateDesc,
      bg: 'bg-emerald-50 hover:bg-emerald-100/80 border-emerald-200',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      icon: Languages
    },
    {
      id: 'speak',
      title: t.cardSpeakTitle,
      emoji: '🎤',
      description: t.cardSpeakDesc,
      bg: 'bg-amber-50 hover:bg-amber-100/80 border-amber-200',
      btnColor: 'bg-amber-600 hover:bg-amber-700 text-white',
      icon: Mic
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-10">
      
      {/* Friendly Greeting Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t.hello}
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-slate-600 mt-3">
          {t.whatToLearnToday}
        </p>
      </div>

      {/* 3 Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {mainCards.map(card => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className={`rounded-3xl border-2 p-8 cursor-pointer transition-all transform hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between ${card.bg}`}
            >
              <div>
                <div className="text-5xl mb-5">{card.emoji}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  {card.title}
                </h3>
                <p className="text-slate-700 text-lg font-medium leading-relaxed mb-6">
                  “{card.description}”
                </p>
              </div>
              <button 
                className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition ${card.btnColor}`}
              >
                <span>{card.title}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Continue Learning Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-7 h-7 text-indigo-600" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.continueLearningHeading}
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-bold mb-2">
              {currentLesson.subjectName[lang] || currentLesson.subjectName.en}
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              {currentLesson.title[lang] || currentLesson.title.en}
            </h3>
            <p className="text-slate-600 text-base font-medium mt-1">
              {currentLesson.summary[lang] || currentLesson.summary.en}
            </p>
          </div>

          <button
            onClick={() => {
              onSelectLesson(currentLesson);
              onNavigate('lesson');
            }}
            className="btn-primary py-4 px-8 text-xl w-full md:w-auto shadow-md"
          >
            <span>{t.continueBtn}</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

    </div>
  );
};
