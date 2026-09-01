import React, { createContext, useContext, useState, useEffect } from 'react';
import { UIStrings } from '../data/UIStrings';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('vernacular_lang') || 'en';
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('vernacular_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return {
      completedLessons: ['sci-1'],
      quizScores: { 'sci-1': 100 },
      currentLessonId: 'sci-1',
      lastUpdated: new Date().toISOString()
    };
  });

  useEffect(() => {
    localStorage.setItem('vernacular_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('vernacular_progress', JSON.stringify(progress));
  }, [progress]);

  const changeLanguage = (newLang) => {
    if (['en', 'ta', 'hi'].includes(newLang)) {
      setLang(newLang);
    }
  };

  const completeLessonQuiz = (lessonId, scorePct) => {
    setProgress(prev => {
      const completedSet = new Set(prev.completedLessons || []);
      completedSet.add(lessonId);
      
      const newScores = {
        ...(prev.quizScores || {}),
        [lessonId]: scorePct
      };

      return {
        ...prev,
        completedLessons: Array.from(completedSet),
        quizScores: newScores,
        currentLessonId: lessonId
      };
    });
  };

  const setCurrentLesson = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      currentLessonId: lessonId
    }));
  };

  const t = UIStrings[lang] || UIStrings['en'];

  return (
    <LanguageContext.Provider value={{
      lang,
      changeLanguage,
      t,
      progress,
      completeLessonQuiz,
      setCurrentLesson
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
