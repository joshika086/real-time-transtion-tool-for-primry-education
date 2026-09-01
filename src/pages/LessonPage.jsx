import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { speakText, stopSpeech, translateText } from '../data/translations';
import { Volume2, Square, Languages, Lightbulb, AlertCircle } from 'lucide-react';

export const LessonPage = ({ lesson, onNavigate, onStartQuiz }) => {
  const { lang, changeLanguage, t, setCurrentLesson } = useLanguage();
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechAlert, setSpeechAlert] = useState('');

  if (!lesson) return null;

  const subjectName = lesson.subjectName[lang] || lesson.subjectName.en;
  const lessonTitle = lesson.title[lang] || lesson.title.en;

  // Vernacular content selection
  let vernacularContent = lesson.content[lang];
  if (!vernacularContent) {
    vernacularContent = translateText(lesson.originalText, 'en', lang);
  }

  const simpleExpl = lesson.simpleExplanation[lang] || lesson.simpleExplanation.en;

  const handleListen = () => {
    setSpeechAlert('');
    if (isSpeaking) {
      stopSpeech();
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(true);
    speakText(
      vernacularContent,
      lang,
      () => setIsSpeaking(false),
      (errMsg) => {
        setIsSpeaking(false);
        setSpeechAlert(errMsg);
      }
    );
  };

  const handleTakeQuiz = () => {
    stopSpeech();
    setIsSpeaking(false);
    setCurrentLesson(lesson.id);
    onStartQuiz(lesson);
    onNavigate('quiz');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-6">
      
      {/* Top Header Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="inline-block px-3.5 py-1 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-bold mb-2">
            {subjectName}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lessonTitle}
          </h1>
        </div>

        {/* Top Language Selector */}
        <div className="bg-slate-100 border border-slate-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 self-stretch sm:self-auto justify-between">
          <span className="font-bold text-slate-600 text-sm">{t.languageLabel}:</span>
          <select
            value={lang}
            onChange={(e) => {
              stopSpeech();
              setIsSpeaking(false);
              changeLanguage(e.target.value);
            }}
            className="bg-transparent font-bold text-slate-900 text-base focus:outline-none cursor-pointer"
          >
            <option value="en">English</option>
            <option value="ta">தமிழ் (Tamil)</option>
            <option value="hi">हिन्दी (Hindi)</option>
          </select>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Original Text Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1.5">
            {t.originalHeading} (English)
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">
            “{lesson.originalText}”
          </p>
        </div>

        {/* In Your Language Section */}
        <div className="bg-indigo-50/70 border-2 border-indigo-200 rounded-2xl p-5 sm:p-7">
          <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-700 mb-2 flex items-center gap-2">
            <Languages className="w-4 h-4" />
            {t.inYourLanguageHeading} ({lang === 'ta' ? 'தமிழ்' : lang === 'hi' ? 'हिन्दी' : 'English'})
          </h3>
          <p className="text-2xl sm:text-3xl font-extrabold text-indigo-950 leading-relaxed">
            “{vernacularContent}”
          </p>
        </div>

        {speechAlert && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-amber-800 font-medium text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600" />
            <span>{speechAlert}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          
          {/* Listen / Stop Button */}
          <button
            onClick={handleListen}
            className={`btn-primary py-3.5 text-lg shadow-md ${
              isSpeaking ? 'bg-rose-600 hover:bg-rose-700' : ''
            }`}
          >
            {isSpeaking ? <Square className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            <span>{isSpeaking ? 'Stop' : t.btnListen}</span>
          </button>

          {/* Change Language Selector */}
          <div className="relative">
            <select
              value={lang}
              onChange={(e) => {
                stopSpeech();
                setIsSpeaking(false);
                changeLanguage(e.target.value);
              }}
              className="w-full h-full btn-secondary py-3.5 text-lg justify-center cursor-pointer appearance-none text-center bg-white"
            >
              <option value="en">🌐 English</option>
              <option value="ta">🌐 தமிழ் (Tamil)</option>
              <option value="hi">🌐 हिन्दी (Hindi)</option>
            </select>
          </div>

          {/* Explain Simply Button */}
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="btn-accent py-3.5 text-lg shadow-md"
          >
            <Lightbulb className="w-5 h-5" />
            <span>{t.btnExplainSimply}</span>
          </button>
        </div>

        {/* Simple Explanation Drawer */}
        {showExplanation && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2.5 text-amber-900 font-extrabold text-xl">
              <Lightbulb className="w-6 h-6 text-amber-600 fill-amber-300" />
              <span>{t.simpleExplanationHeading}</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-amber-950 leading-relaxed pt-1">
              “{simpleExpl}”
            </p>
          </div>
        )}

      </div>

      {/* Take Quiz Button */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={handleTakeQuiz}
          className="btn-primary py-4 px-8 text-xl font-extrabold w-full sm:w-auto shadow-lg hover:shadow-xl"
        >
          <span>{t.btnTakeQuiz}</span>
        </button>
      </div>

    </div>
  );
};
