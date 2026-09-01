import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { lessonsData } from '../data/lessons';
import { ArrowRight, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

export const LearnPage = ({ onSelectLesson, onNavigate }) => {
  const { t, lang } = useLanguage();
  const [selectedSubject, setSelectedSubject] = useState('science');

  const subjects = [
    {
      id: 'mathematics',
      emoji: '🔢',
      title: t.mathTitle,
      description: t.mathDesc,
      color: 'border-blue-200 bg-blue-50/50 hover:border-blue-400'
    },
    {
      id: 'science',
      emoji: '🔬',
      title: t.scienceTitle,
      description: t.scienceDesc,
      color: 'border-emerald-200 bg-emerald-50/50 hover:border-emerald-400'
    },
    {
      id: 'english',
      emoji: '📖',
      title: t.englishTitle,
      description: t.englishDesc,
      color: 'border-purple-200 bg-purple-50/50 hover:border-purple-400'
    }
  ];

  const currentSubjectLessons = lessonsData.filter(l => l.subjectId === selectedSubject);

  const handleStartLesson = (lesson) => {
    onSelectLesson(lesson);
    onNavigate('lesson');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.whatDoYouWantToLearn}
        </h1>
        <p className="text-slate-600 text-lg font-medium">
          Select a subject below to view fun, easy lessons in your language.
        </p>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subjects.map(subj => {
          const isSelected = selectedSubject === subj.id;
          return (
            <div
              key={subj.id}
              onClick={() => setSelectedSubject(subj.id)}
              className={`card-rounded cursor-pointer border-2 transition transform hover:-translate-y-1 ${
                isSelected 
                  ? 'ring-4 ring-indigo-500/20 border-indigo-600 bg-indigo-50/40 shadow-md' 
                  : subj.color
              }`}
            >
              <div className="text-5xl mb-4">{subj.emoji}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {subj.title}
              </h3>
              <p className="text-slate-600 text-base font-medium leading-relaxed">
                “{subj.description}”
              </p>
            </div>
          );
        })}
      </div>

      {/* Lessons List for Selected Subject */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 capitalize">
            {subjects.find(s => s.id === selectedSubject)?.title} Lessons
          </h2>
        </div>

        <div className="space-y-4">
          {currentSubjectLessons.map((lesson, idx) => (
            <div
              key={lesson.id}
              className="bg-slate-50 border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition shadow-sm hover:shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-lg flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {lesson.title[lang] || lesson.title.en}
                  </h4>
                  <p className="text-slate-600 font-medium text-sm mt-1">
                    {lesson.summary[lang] || lesson.summary.en}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleStartLesson(lesson)}
                className="btn-primary py-3 px-6 text-base font-bold w-full sm:w-auto"
              >
                <span>{t.startLesson}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
