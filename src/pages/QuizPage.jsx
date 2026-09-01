import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, AlertCircle } from 'lucide-react';

export const QuizPage = ({ lesson, onNavigate }) => {
  const { t, lang, completeLessonQuiz } = useLanguage();

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Fallback if quiz fails to load
  if (!lesson || !lesson.quiz || lesson.quiz.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-3xl text-amber-800">
          <AlertCircle className="w-12 h-12 mx-auto mb-3 text-amber-600" />
          <h2 className="text-2xl font-bold mb-2">Quiz Temporarily Unavailable</h2>
          <p className="text-base font-medium">Unable to load questions for this lesson. Please choose another lesson.</p>
        </div>
        <button onClick={() => onNavigate('learn')} className="btn-primary py-3 px-6 text-lg mx-auto">
          Back to Learn
        </button>
      </div>
    );
  }

  const totalQuestions = lesson.quiz.length; // Exactly 5
  const currentQ = lesson.quiz[currentQIndex];
  const questionText = currentQ.question[lang] || currentQ.question.en;

  const handleOptionSelect = (idx) => {
    // Prevent multiple submissions on the same question
    if (isSubmitted) return;

    setSelectedOption(idx);
    setIsSubmitted(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      setScoreCount(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < totalQuestions - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      // Quiz completed! Calculate final score out of 5
      const finalScore = scoreCount;
      const scorePct = Math.round((finalScore / totalQuestions) * 100);

      // Record result in progress
      completeLessonQuiz(lesson.id, scorePct);
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScoreCount(0);
    setQuizFinished(false);
  };

  const scorePercentage = Math.round((scoreCount / totalQuestions) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10 space-y-6">
      
      {/* Quiz Title Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.quizHeading}
        </h1>
        <p className="text-base font-semibold text-slate-600">
          {lesson.title[lang] || lesson.title.en}
        </p>
      </div>

      {!quizFinished ? (
        /* Question Card */
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Question Counter: Question X of 5 */}
          <div className="flex items-center justify-between text-base font-extrabold text-slate-500 border-b border-slate-100 pb-3">
            <span className="text-indigo-700 font-bold bg-indigo-50 px-3 py-1 rounded-xl text-sm sm:text-base">
              Question {currentQIndex + 1} of {totalQuestions}
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold">
              Score: {scoreCount} / {totalQuestions}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
            {questionText}
          </h2>

          {/* Answer Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentQ.options.map((opt, idx) => {
              const optText = opt[lang] || opt.en || opt.label;
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-900 cursor-pointer";
              if (isSubmitted) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500";
                } else if (isSelected && !isCorrect) {
                  btnStyle = "bg-rose-100 border-rose-400 text-rose-950 font-bold ring-2 ring-rose-400";
                } else {
                  btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60 cursor-default";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isSubmitted}
                  className={`p-4 sm:p-5 rounded-2xl border-2 text-left font-bold text-lg sm:text-xl transition duration-150 flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span>{optText}</span>
                  {isSubmitted && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />}
                  {isSubmitted && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Feedback Banner */}
          {isSubmitted && (
            <div className="pt-3 space-y-4 border-t border-slate-100">
              {selectedOption === currentQ.correctIndex ? (
                <div className="p-4 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-emerald-900 font-extrabold text-xl flex items-center gap-3">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 flex-shrink-0" />
                  <span>{t.feedbackCorrect}</span>
                </div>
              ) : (
                <div className="p-4 bg-rose-50 border-2 border-rose-300 rounded-2xl text-rose-900 font-extrabold text-xl flex items-center gap-3">
                  <XCircle className="w-7 h-7 text-rose-600 flex-shrink-0" />
                  <span>{t.feedbackIncorrect}</span>
                </div>
              )}

              <div className="flex justify-end pt-1">
                <button
                  onClick={handleNextQuestion}
                  className="btn-primary py-3.5 px-7 text-lg font-bold shadow-md"
                >
                  <span>{currentQIndex < totalQuestions - 1 ? t.btnNextQuestion : 'See Final Score 🎉'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

        </div>
      ) : (
        /* Final Score Screen out of 5 */
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-md text-center space-y-6">
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-12 h-12" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.yourScoreHeading}
            </h2>
            <div className="text-5xl sm:text-6xl font-extrabold text-indigo-600 mt-3">
              {scoreCount} / {totalQuestions}
            </div>
            <p className="text-xl font-bold text-slate-600 mt-2">
              ({scorePercentage}%)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-2">
            <button
              onClick={handleRestartQuiz}
              className="btn-secondary py-3.5 text-lg font-bold"
            >
              <RotateCcw className="w-5 h-5" />
              <span>{t.btnLearnAgain}</span>
            </button>

            <button
              onClick={() => onNavigate('progress')}
              className="btn-primary py-3.5 text-lg font-bold shadow-md"
            >
              <span>{t.btnViewProgress}</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
