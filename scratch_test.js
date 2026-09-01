import https from 'https';

function testGoogleTTS(text, lang) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    console.log(`[TTS ${lang} Response Status]:`, res.statusCode, res.headers['content-type']);
  }).on('error', err => console.error('TTS Err:', err));
}

testGoogleTTS("நான் மகிழ்ச்சியாக இருக்கிறேன்.", "ta");
testGoogleTTS("நான் மகிழ்ச்சியாக இருக்கிறேன்.", "hi");
testGoogleTTS("I am happy", "en");
