import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translateText, translateTextSync, speakText, stopSpeech } from '../data/translations';
import { Languages, Volume2, Square, Copy, Check, ArrowRightLeft, AlertCircle, Loader2 } from 'lucide-react';

export const TranslationPage = () => {
  const { t } = useLanguage();

  const [inputText, setInputText] = useState('I AM HAPPY');
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('ta');
  const [translatedResult, setTranslatedResult] = useState('நான் மகிழ்ச்சியாக இருக்கிறேன்.');
  const [isTranslating, setIsTranslating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [errorAlert, setErrorAlert] = useState('');

  // Auto-translate on mount or when language dropdowns change
  useEffect(() => {
    runTranslation(inputText, fromLang, toLang);
  }, [fromLang, toLang]);

  const runTranslation = async (text, from, to) => {
    setErrorAlert('');
    stopSpeech();
    setIsSpeaking(false);

    if (!text || !text.trim()) {
      setTranslatedResult('');
      return;
    }

    // Quick sync translation first for instant UI response
    const syncRes = translateTextSync(text, from, to);
    setTranslatedResult(syncRes);

    // Async enhancement lookup
    setIsTranslating(true);
    try {
      const asyncRes = await translateText(text, from, to);
      if (asyncRes) {
        setTranslatedResult(asyncRes);
      }
    } catch (e) {
      // Keep sync result if async fails
    } finally {
      setIsTranslating(false);
    }
  };

  const handleTranslateSubmit = (e) => {
    if (e) e.preventDefault();
    if (!inputText || !inputText.trim()) {
      setErrorAlert(t.emptyTranslateAlert || "Please enter text to translate.");
      return;
    }
    runTranslation(inputText, fromLang, toLang);
  };

  const handleSwap = () => {
    stopSpeech();
    setIsSpeaking(false);
    const tempFrom = fromLang;
    const tempTo = toLang;
    setFromLang(tempTo);
    setToLang(tempFrom);
  };

  const handleListen = () => {
    setErrorAlert('');
    if (!translatedResult || !translatedResult.trim()) return;

    if (isSpeaking) {
      stopSpeech();
      setIsSpeaking(false);
      return;
    }

    // Speak the ACTUAL translated text string!
    speakText(
      translatedResult,
      toLang,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false),
      (errMsg) => {
        setIsSpeaking(false);
        setErrorAlert(errMsg || "Tamil voice is not available on this device. Please check your browser's speech settings.");
      }
    );
  };

  const handleCopy = () => {
    if (!translatedResult) return;
    // Copy ONLY the actual translated sentence string
    navigator.clipboard.writeText(translatedResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageLabel = (code) => {
    if (code === 'ta') return 'தமிழ் (Tamil)';
    if (code === 'hi') return 'हिन्दी (Hindi)';
    return 'English';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-6">
      
      {/* Page Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.translateHeading}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg font-semibold">
          {t.translateDesc}
        </p>
      </div>

      {/* Main Translation Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
        
        {/* From / To Language Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-3.5">
          
          {/* From Dropdown */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <span className="font-extrabold text-slate-700 text-base">{t.fromLabel}:</span>
            <select
              value={fromLang}
              onChange={(e) => setFromLang(e.target.value)}
              className="bg-white border border-slate-300 font-bold text-slate-900 text-base px-3.5 py-2 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none flex-grow sm:flex-grow-0"
            >
              <option value="en">English</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="hi">हिन्दी (Hindi)</option>
            </select>
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            type="button"
            className="p-2.5 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl font-bold text-slate-700 hover:text-indigo-600 transition"
            title="Swap Languages"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>

          {/* To Dropdown */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <span className="font-extrabold text-slate-700 text-base">{t.toLabel}:</span>
            <select
              value={toLang}
              onChange={(e) => setToLang(e.target.value)}
              className="bg-white border border-slate-300 font-bold text-slate-900 text-base px-3.5 py-2 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none flex-grow sm:flex-grow-0"
            >
              <option value="en">English</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="hi">हिन्दी (Hindi)</option>
            </select>
          </div>

        </div>

        {/* Text Area */}
        <div>
          <textarea
            rows="3"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t.translatePlaceholder}
            className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-lg sm:text-xl font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
          />
        </div>

        {/* Translate Button */}
        <button
          onClick={handleTranslateSubmit}
          disabled={isTranslating}
          className="btn-primary py-3.5 w-full text-xl font-bold shadow-md"
        >
          {isTranslating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Languages className="w-5 h-5" />}
          <span>{t.btnTranslate}</span>
        </button>

        {/* Error / Alert Message */}
        {errorAlert && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-amber-800 font-medium text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600" />
            <span>{errorAlert}</span>
          </div>
        )}

        {/* Translation Output Result Card */}
        {translatedResult && (
          <div className="mt-6 border-t-2 border-slate-100 pt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-slate-900 tracking-wide uppercase text-xs">
                TRANSLATION
              </h3>
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-xl text-xs font-bold">
                {getLanguageLabel(toLang)}
              </span>
            </div>

            <div className="bg-indigo-50/80 border-2 border-indigo-200 rounded-3xl p-5 sm:p-7">
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-950 leading-relaxed">
                “{translatedResult}”
              </p>

              {/* Action Buttons: Listen & Copy */}
              <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-indigo-200/60">
                
                {/* Listen / Speaking Button */}
                <button
                  onClick={handleListen}
                  className={`btn-primary py-2.5 px-6 text-base font-bold shadow-sm ${
                    isSpeaking ? 'bg-rose-600 hover:bg-rose-700' : ''
                  }`}
                >
                  {isSpeaking ? <Square className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isSpeaking ? 'Speaking...' : t.btnListen}</span>
                </button>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="btn-secondary py-2.5 px-6 text-base font-bold"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">{t.copiedText}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t.btnCopy}</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
};
