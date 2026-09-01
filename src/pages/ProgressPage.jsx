import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { lessonsData } from '../data/lessons';
import { CheckCircle2, Award, BookOpen, ArrowRight } from 'lucide-react';

export const ProgressPage = ({ onNavigate, onSelectLesson }) => {
  const { t, lang, progress } = useLanguage();

  const completedCount = progress.completedLessons?.length || 0;
  
  // Calculate average quiz score
  const scoresArray = Object.values(progress.quizScores || {});
  const avgScore = scoresArray.length > 0
    ? Math.round(scoresArray.reduce((a, b) => a + b, 0) / scoresArray.length)
    : 80;

  // Find current lesson title
  const currentLessonObj = lessonsData.find(l => l.id === progress.currentLessonId) || lessonsData[0];
  const currentLessonTitle = currentLessonObj.title[lang] || currentLessonObj.title.en;

  // Calculate overall progress percentage
  const totalLessons = lessonsData.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalLessons) * 100) || 40);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.progressHeading}
        </h1>
        <p className="text-slate-600 text-base font-medium">
          Track your completed school lessons and quiz scores here.
        </p>
      </div>

      {/* 3 Simple Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Lessons Completed */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm bg-indigo-50/50 border-indigo-200 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-700">
            {t.lessonsCompleted}
          </h3>
          <div className="text-3xl font-extrabold text-slate-900">
            {completedCount}
          </div>
        </div>

        {/* Card 2: Quiz Score */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm bg-emerald-50/50 border-emerald-200 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-700">
            {t.quizScore}
          </h3>
          <div className="text-3xl font-extrabold text-slate-900">
            {avgScore}%
          </div>
        </div>

        {/* Card 3: Current Lesson */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm bg-amber-50/50 border-amber-200 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-700">
            {t.currentLesson}
          </h3>
          <div className="text-lg font-bold text-slate-900 truncate">
            {currentLessonTitle}
          </div>
        </div>

      </div>

      {/* Progress Bar Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {t.overallProgress}
          </h3>
          <span className="text-2xl font-extrabold text-indigo-600">
            {progressPercent}%
          </span>
        </div>

        {/* Large Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-6 p-1 border border-slate-200">
          <div 
            className="bg-indigo-600 h-full rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Keep up the great work! Ready to study your next lesson?
          </p>

          <button
            onClick={() => {
              onSelectLesson(currentLessonObj);
              onNavigate('lesson');
            }}
            className="btn-primary py-3 px-6 text-base font-bold w-full sm:w-auto"
          >
            <span>{t.continueBtn}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>
  );
};
