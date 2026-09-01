import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translateText, translateTextSync, speakText, stopSpeech } from '../data/translations';
import { Mic, Volume2, Square, Languages, AlertCircle } from 'lucide-react';

export const SpeakPage = () => {
  const { t, lang } = useLanguage();

  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('Plants need water to grow.');
  const [targetLang, setTargetLang] = useState(lang === 'en' ? 'ta' : lang);
  const [translatedText, setTranslatedText] = useState('தாவரங்கள் வளர தண்ணீர் தேவை.');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Re-translate spoken text whenever target language changes
  useEffect(() => {
    if (spokenText) {
      const syncRes = translateTextSync(spokenText, 'en', targetLang);
      setTranslatedText(syncRes);

      translateText(spokenText, 'en', targetLang).then(res => {
        if (res) setTranslatedText(res);
      });
    }
  }, [spokenText, targetLang]);

  const startListening = () => {
    setErrorMessage('');
    stopSpeech();
    setIsSpeaking(false);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setErrorMessage("Microphone is currently unavailable. Using sample voice input.");
      simulateSpeechInput("Plants need water to grow.");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSpokenText(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
        setErrorMessage("Microphone is currently unavailable. Using sample voice input.");
        simulateSpeechInput("Plants need water to grow.");
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      setIsListening(false);
      simulateSpeechInput("Plants need water to grow.");
    }
  };

  const simulateSpeechInput = (sampleText) => {
    setIsListening(true);
    setTimeout(() => {
      setSpokenText(sampleText);
      setIsListening(false);
    }, 1200);
  };

  const handleListenTranslation = () => {
    setErrorMessage('');
    if (!translatedText || !translatedText.trim()) return;

    if (isSpeaking) {
      stopSpeech();
      setIsSpeaking(false);
      return;
    }

    speakText(
      translatedText,
      targetLang,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false),
      (errMsg) => {
        setIsSpeaking(false);
        setErrorMessage(errMsg || "Tamil voice is not available on this device. Please check speech settings.");
      }
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.speakHeading}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg font-semibold">
          {t.speakDesc}
        </p>
      </div>

      {/* Main Microphone Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm text-center space-y-6">
        
        {/* Target language selector */}
        <div className="inline-flex items-center gap-3 bg-slate-100 border border-slate-200 rounded-2xl px-4 py-2.5">
          <span className="font-extrabold text-slate-700 text-base">{t.toLabel}:</span>
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="bg-transparent font-extrabold text-indigo-700 text-base focus:outline-none cursor-pointer"
          >
            <option value="ta">தமிழ் (Tamil)</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Circular Microphone Button */}
        <div className="py-2 flex flex-col items-center justify-center">
          <button
            onClick={startListening}
            className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center gap-1.5 text-white shadow-xl transform transition hover:scale-105 active:scale-95 ${
              isListening 
                ? 'bg-rose-600 animate-pulse ring-8 ring-rose-200' 
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            <Mic className="w-12 h-12" />
            <span className="font-extrabold text-sm sm:text-base">
              {isListening ? t.btnStopSpeaking : t.btnStartSpeaking}
            </span>
          </button>

          {isListening && (
            <p className="mt-4 text-lg font-bold text-indigo-600 animate-bounce">
              {t.listeningState}
            </p>
          )}

          {errorMessage && (
            <p className="mt-3 text-sm font-semibold text-amber-800 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 max-w-md">
              {errorMessage}
            </p>
          )}
        </div>

        {/* Spoken Text & Translation Results */}
        {spokenText && (
          <div className="space-y-4 pt-4 border-t border-slate-100 text-left">
            
            {/* You Said Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <h3 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 mb-1">
                {t.youSaidHeading}
              </h3>
              <p className="text-xl font-bold text-slate-900 leading-relaxed">
                “{spokenText}”
              </p>
            </div>

            {/* Translation Output Card */}
            {translatedText && (
              <div className="bg-indigo-50/70 border-2 border-indigo-200 rounded-3xl p-5 sm:p-7">
                <h3 className="text-xs uppercase tracking-wider font-extrabold text-indigo-700 mb-2 flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  {t.translationResultHeading}
                </h3>
                <p className="text-2xl sm:text-3xl font-extrabold text-indigo-950 leading-relaxed">
                  “{translatedText}”
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-indigo-200/60">
                  <button
                    onClick={handleListenTranslation}
                    className={`btn-primary py-2.5 px-6 text-base font-bold shadow-sm ${
                      isSpeaking ? 'bg-rose-600 hover:bg-rose-700' : ''
                    }`}
                  >
                    {isSpeaking ? <Square className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span>{isSpeaking ? 'Speaking...' : t.btnListen}</span>
                  </button>

                  <select
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                    className="btn-secondary py-2.5 px-5 text-base font-bold cursor-pointer"
                  >
                    <option value="ta">🌐 தமிழ் (Tamil)</option>
                    <option value="hi">🌐 हिन्दी (Hindi)</option>
                    <option value="en">🌐 English</option>
                  </select>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
};
