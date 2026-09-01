export const lessonsData = [
  // SCIENCE - Parts of a Plant (5 Questions)
  {
    id: "sci-1",
    subjectId: "science",
    subjectName: {
      en: "Science",
      ta: "அறிவியல்",
      hi: "विज्ञान"
    },
    title: {
      en: "Parts of a Plant",
      ta: "தாவரத்தின் பாகங்கள்",
      hi: "पौधे के भाग"
    },
    summary: {
      en: "Learn how roots, stems, leaves and flowers help a plant grow.",
      ta: "வேர், தண்டு, இலைகள் மற்றும் பூக்கள் தாவரத்திற்கு எவ்வாறு உதவுகின்றன என்பதை அறியவும்.",
      hi: "जानें कि जड़ें, तना, पत्तियां और फूल पौधे को कैसे मदद करते हैं।"
    },
    originalText: "Plants need sunlight, water and air to grow.",
    content: {
      en: "Plants need sunlight, water and air to grow. Roots absorb water from the soil, the stem holds the plant upright, green leaves make food using sunlight, and flowers produce seeds.",
      ta: "தாவரங்கள் வளர சூரிய ஒளி, தண்ணீர் மற்றும் காற்று தேவை. வேர்கள் மண்ணிலிருந்து தண்ணீரை உறிஞ்சுகின்றன, தண்டு தாவரத்தை நிமிர்த்திப் பிடிக்கும், பச்சை இலைகள் உணவைத் தயாரிக்கின்றன, மேலும் பூக்கள் விதைகளை உருவாக்குகின்றன.",
      hi: "पौधों को बढ़ने के लिए सूर्य का प्रकाश, पानी और हवा की आवश्यकता होती है। जड़ें मिट्टी से पानी सोखती हैं, तना पौधे को सीधा रखता है, हरी पत्तियाँ भोजन बनाती हैं, और फूल बीज पैदा करते हैं।"
    },
    simpleExplanation: {
      en: "Plants need sunlight, water and air to live and grow. Roots drink water from soil, stem carries water, leaves make food, and flowers make seeds!",
      ta: "தாவரங்கள் வாழவும் வளரவும் சூரிய ஒளி, தண்ணீர் மற்றும் காற்று தேவைப்படுகின்றன. வேர்கள் மண்ணிலிருந்து நீரைக் குடிக்கின்றன, தண்டு நீரைக் கொண்டு செல்கிறது, இலைகள் உணவு தயாரிக்கின்றன, மற்றும் பூக்கள் விதைகளை உருவாக்குகின்றன!",
      hi: "पौधों को जीने और बढ़ने के लिए धूप, पानी और हवा चाहिए। जड़ें मिट्टी से पानी पीती हैं, तना पानी ले जाता है, पत्तियाँ खाना बनाती हैं, और फूल बीज बनाते हैं!"
    },
    quiz: [
      {
        id: "q1",
        question: {
          en: "What do plants need to grow?",
          ta: "தாவரங்கள் வளர என்ன தேவை?",
          hi: "पौधों को बढ़ने के लिए क्या चाहिए?"
        },
        options: [
          { label: "Water", en: "Water", ta: "தண்ணீர்", hi: "पानी" },
          { label: "Sunlight", en: "Sunlight", ta: "சூரிய ஒளி", hi: "सूर्य का प्रकाश" },
          { label: "Air", en: "Air", ta: "காற்று", hi: "हवा" },
          { label: "All of these", en: "All of these", ta: "இவை அனைத்தும்", hi: "यह सभी" }
        ],
        correctIndex: 3
      },
      {
        id: "q2",
        question: {
          en: "Which part of the plant absorbs water from the soil?",
          ta: "தாவரத்தின் எந்தப் பகுதி மண்ணிலிருந்து நீரை உறிஞ்சுகிறது?",
          hi: "पौधे का कौन सा भाग मिट्टी से पानी सोखता है?"
        },
        options: [
          { label: "Roots", en: "Roots", ta: "வேர்கள்", hi: "जड़ें" },
          { label: "Flower", en: "Flower", ta: "பூக்கள்", hi: "फूल" },
          { label: "Fruit", en: "Fruit", ta: "பழம்", hi: "फल" },
          { label: "Branch", en: "Branch", ta: "கிளை", hi: "शाखा" }
        ],
        correctIndex: 0
      },
      {
        id: "q3",
        question: {
          en: "Which part of the plant holds it upright and carries water?",
          ta: "தாவரத்தை நிமிர்த்திப் பிடித்து நீரைக் கொண்டு செல்லும் பகுதி எது?",
          hi: "पौधे का कौन सा भाग उसे सीधा रखता है और पानी ले जाता है?"
        },
        options: [
          { label: "Leaf", en: "Leaf", ta: "இலை", hi: "पत्ती" },
          { label: "Stem", en: "Stem", ta: "தண்டு", hi: "तना" },
          { label: "Root", en: "Root", ta: "வேர்", hi: "जड़" },
          { label: "Thorn", en: "Thorn", ta: "முள்", hi: "कांटा" }
        ],
        correctIndex: 1
      },
      {
        id: "q4",
        question: {
          en: "Which plant part prepares food using sunlight?",
          ta: "சூரிய ஒளியைப் பயன்படுத்தி உணவைத் தயாரிக்கும் தாவரத்தின் பகுதி எது?",
          hi: "सूर्य के प्रकाश का उपयोग करके पौधे का कौन सा भाग भोजन बनाता है?"
        },
        options: [
          { label: "Leaves", en: "Leaves", ta: "இலைகள்", hi: "पत्तियाँ" },
          { label: "Roots", en: "Roots", ta: "வேர்கள்", hi: "जड़ें" },
          { label: "Seeds", en: "Seeds", ta: "விதைகள்", hi: "बीज" },
          { label: "Soil", en: "Soil", ta: "மண்", hi: "मिट्टी" }
        ],
        correctIndex: 0
      },
      {
        id: "q5",
        question: {
          en: "What part of a plant develops into fruits and seeds?",
          ta: "தாவரத்தின் எந்தப் பகுதி பழங்களாகவும் விதைகளாகவும் மாறுகிறது?",
          hi: "पौधे का कौन सा भाग फल और बीज में विकसित होता है?"
        },
        options: [
          { label: "Stem", en: "Stem", ta: "தண்டு", hi: "तना" },
          { label: "Leaf", en: "Leaf", ta: "இலை", hi: "पत्ती" },
          { label: "Flower", en: "Flower", ta: "பூக்கள்", hi: "फूल" },
          { label: "Root", en: "Root", ta: "வேர்", hi: "जड़" }
        ],
        correctIndex: 2
      }
    ]
  },

  // SCIENCE - Animals Around Us (5 Questions)
  {
    id: "sci-2",
    subjectId: "science",
    subjectName: {
      en: "Science",
      ta: "அறிவியல்",
      hi: "विज्ञान"
    },
    title: {
      en: "Animals Around Us",
      ta: "நம்மைச் சுற்றியுள்ள விலங்குகள்",
      hi: "हमारे आसपास के जानवर"
    },
    summary: {
      en: "Discover domestic and wild animals and their homes.",
      ta: "வீட்டு விலங்குகள் மற்றும் காட்டு விலங்குகளைப் பற்றி அறியவும்.",
      hi: "पालतू और जंगली जानवरों और उनके घरों के बारे में जानें।"
    },
    originalText: "Domestic animals live with humans while wild animals live in forests.",
    content: {
      en: "Domestic animals live with humans while wild animals live in forests. Cows give us fresh milk, dogs guard our homes, and birds fly freely in the sky.",
      ta: "வீட்டு விலங்குகள் மனிதர்களுடன் வாழ்கின்றன, காட்டு விலங்குகள் காடுகளில் வாழ்கின்றன. பசுக்கள் நமக்கு பால் தருகின்றன, நாய்கள் நம் வீட்டைப் பாதுகாக்கின்றன.",
      hi: "पालतू जानवर इंसानों के साथ रहते हैं जबकि जंगली जानवर जंगलों में रहते हैं। गाय हमें दूध देती है और कुत्ते हमारे घरों की रखवाली करते हैं।"
    },
    simpleExplanation: {
      en: "Some animals are our friends at home like dogs and cows. Other animals like lions live in big forests.",
      ta: "நாய், பசு போன்ற சில விலங்குகள் நம் வீட்டில் நண்பர்களாக வாழ்கின்றன. சிங்கம் போன்ற விலங்குகள் காட்டில் வாழ்கின்றன.",
      hi: "कुत्ते और गाय जैसे कुछ जानवर हमारे घर पर दोस्त हैं। शेर जैसे अन्य जानवर बड़े जंगलों में रहते हैं।"
    },
    quiz: [
      {
        id: "q1",
        question: {
          en: "Which animal gives us fresh milk?",
          ta: "நமக்கு புதிய பால் தரும் விலங்கு எது?",
          hi: "कौन सा जानवर हमें ताजा दूध देता है?"
        },
        options: [
          { label: "Lion", en: "Lion", ta: "சிங்கம்", hi: "शेर" },
          { label: "Cow", en: "Cow", ta: "பசு", hi: "गाय" },
          { label: "Tiger", en: "Tiger", ta: "புலி", hi: "बाघ" },
          { label: "Snake", en: "Snake", ta: "பாம்பு", hi: "सांप" }
        ],
        correctIndex: 1
      },
      {
        id: "q2",
        question: {
          en: "Where do wild animals live?",
          ta: "காட்டு விலங்குகள் எங்கு வாழ்கின்றன?",
          hi: "जंगली जानवर कहाँ रहते हैं?"
        },
        options: [
          { label: "Forests", en: "Forests", ta: "காடுகள்", hi: "जंगल" },
          { label: "Houses", en: "Houses", ta: "வீடுகள்", hi: "घर" },
          { label: "Offices", en: "Offices", ta: "அலுவலகங்கள்", hi: "कार्यालय" },
          { label: "Schools", en: "Schools", ta: "பள்ளிகள்", hi: "स्कूल" }
        ],
        correctIndex: 0
      },
      {
        id: "q3",
        question: {
          en: "Which domestic animal guards our home?",
          ta: "நம் வீட்டைப் பாதுகாக்கும் வீட்டு விலங்கு எது?",
          hi: "कौन सा पालतू जानवर हमारे घर की रखवाली करता है?"
        },
        options: [
          { label: "Cat", en: "Cat", ta: "பூனை", hi: "बिल्ली" },
          { label: "Dog", en: "Dog", ta: "நாய்", hi: "कुत्ता" },
          { label: "Rabbit", en: "Rabbit", ta: "முயல்", hi: "खरगोश" },
          { label: "Fish", en: "Fish", ta: "மீன்", hi: "मछली" }
        ],
        correctIndex: 1
      },
      {
        id: "q4",
        question: {
          en: "Which animal flies freely in the sky?",
          ta: "வானத்தில் சுதந்திரமாகப் பறக்கும் உயிரி எது?",
          hi: "कौन सा जीव आसमान में स्वतंत्र रूप से उड़ता है?"
        },
        options: [
          { label: "Bird", en: "Bird", ta: "பறவை", hi: "पक्षियों" },
          { label: "Horse", en: "Horse", ta: "குதிரை", hi: "घोड़ा" },
          { label: "Goat", en: "Goat", ta: "ஆடு", hi: "बकरी" },
          { label: "Frog", en: "Frog", ta: "தவளை", hi: "मेढक" }
        ],
        correctIndex: 0
      },
      {
        id: "q5",
        question: {
          en: "What type of animal is a pet dog?",
          ta: "வளர்ப்பு நாய் எந்த வகையான விலங்கு?",
          hi: "पालतू कुत्ता किस प्रकार का जानवर है?"
        },
        options: [
          { label: "Wild animal", en: "Wild animal", ta: "காட்டு விலங்கு", hi: "जंगली जानवर" },
          { label: "Domestic animal", en: "Domestic animal", ta: "வீட்டு விலங்கு", hi: "पालतू जानवर" },
          { label: "Sea creature", en: "Sea creature", ta: "கடல் வாழ் உயிரி", hi: "समुद्री जीव" },
          { label: "Insect", en: "Insect", ta: "பூச்சி", hi: "कीड़ा" }
        ],
        correctIndex: 1
      }
    ]
  },

  // SCIENCE - Water and Air (5 Questions)
  {
    id: "sci-3",
    subjectId: "science",
    subjectName: {
      en: "Science",
      ta: "அறிவியல்",
      hi: "विज्ञान"
    },
    title: {
      en: "Water and Air",
      ta: "நீரும் காற்றும்",
      hi: "जल और वायु"
    },
    summary: {
      en: "Learn why clean water and fresh air are essential for life.",
      ta: "சுத்தமான நீரும் காற்றும் வாழ்க்கைக்கு ஏன் அவசியம் என்று படியுங்கள்.",
      hi: "जानें कि जीवन के लिए स्वच्छ जल और ताजा हवा क्यों आवश्यक है।"
    },
    originalText: "Clean water and fresh air keep all living beings healthy.",
    content: {
      en: "Clean water and fresh air keep all living beings healthy. We must never waste drinking water or pollute the air.",
      ta: "சுத்தமான நீரும் புதிய காற்றும் அனைத்து உயிரினங்களையும் ஆரோக்கியமாக வைத்திருக்கின்றன. குடிநீரை வீணாக்கக் கூடாது.",
      hi: "साफ पानी और ताजा हवा सभी जीवों को स्वस्थ रखती है। हमें पानी बर्बाद नहीं करना चाहिए।"
    },
    simpleExplanation: {
      en: "We breathe air every second and drink water to stay energetic and strong!",
      ta: "நாம் ஆரோக்கியமாக இருக்க காற்றைச் சுவாசிக்கிறோம், தண்ணீரைக் குடிக்கிறோம்!",
      hi: "हम स्वस्थ रहने के लिए हवा में सांस लेते हैं और पानी पीते हैं!"
    },
    quiz: [
      {
        id: "q1",
        question: {
          en: "What should we do with drinking water?",
          ta: "குடிநீரை நாம் என்ன செய்ய வேண்டும்?",
          hi: "हमें पीने के पानी का क्या करना चाहिए?"
        },
        options: [
          { label: "Waste it", en: "Waste it", ta: "வீணாக்க வேண்டும்", hi: "बर्बाद करें" },
          { label: "Save it", en: "Save it", ta: "சேமிக்க வேண்டும்", hi: "बचाएं" },
          { label: "Pollute it", en: "Pollute it", ta: "மாசுபடுத்த வேண்டும்", hi: "गंदा करें" },
          { label: "Ignore it", en: "Ignore it", ta: "கண்டு கொள்ளக் கூடாது", hi: "अनदेखा करें" }
        ],
        correctIndex: 1
      },
      {
        id: "q2",
        question: {
          en: "Why do we need clean air?",
          ta: "நமக்கு சுத்தமான காற்று ஏன் தேவை?",
          hi: "हमें स्वच्छ हवा की आवश्यकता क्यों है?"
        },
        options: [
          { label: "For breathing", en: "For breathing", ta: "சுவாசிக்க", hi: "सांस लेने के लिए" },
          { label: "For washing", en: "For washing", ta: "கழுவ", hi: "धोने के लिए" },
          { label: "For writing", en: "For writing", ta: "எழுத", hi: "लिखने के लिए" },
          { label: "For cooking", en: "For cooking", ta: "சமைக்க", hi: "पकाने के लिए" }
        ],
        correctIndex: 0
      },
      {
        id: "q3",
        question: {
          en: "What keeps all living beings healthy?",
          ta: "அனைத்து உயிரினங்களையும் ஆரோக்கியமாக வைப்பது எது?",
          hi: "सभी जीवों को स्वस्थ क्या रखता है?"
        },
        options: [
          { label: "Smoke and dirt", en: "Smoke and dirt", ta: "புகை மற்றும் அழுக்கு", hi: "धुआं और गंदगी" },
          { label: "Clean water and air", en: "Clean water and air", ta: "சுத்தமான நீரும் காற்றும்", hi: "साफ पानी और हवा" },
          { label: "Plastic bags", en: "Plastic bags", ta: "நெகிழி பைகள்", hi: "प्लास्टिक बैग" },
          { label: "Loud noise", en: "Loud noise", ta: "அதிக சத்தம்", hi: "तेज आवाज" }
        ],
        correctIndex: 1
      },
      {
        id: "q4",
        question: {
          en: "Can plants and animals live without air?",
          ta: "தாவரங்களும் விலங்குகளும் காற்று இல்லாமல் வாழ முடியுமா?",
          hi: "क्या पौधे और जानवर हवा के बिना रह सकते हैं?"
        },
        options: [
          { label: "Yes, always", en: "Yes, always", ta: "ஆம், எப்போதும்", hi: "हाँ, हमेशा" },
          { label: "No, they need air", en: "No, they need air", ta: "இல்லை, காற்று தேவை", hi: "नहीं, उन्हें हवा चाहिए" },
          { label: "Only at night", en: "Only at night", ta: "இரவில் மட்டும்", hi: "केवल रात में" },
          { label: "Only in winter", en: "Only in winter", ta: "குளிர்காலத்தில் மட்டும்", hi: "केवल सर्दियों में" }
        ],
        correctIndex: 1
      },
      {
        id: "q5",
        question: {
          en: "What is moving air called?",
          ta: "வீசும் காற்று எவ்வாறு அழைக்கப்படுகிறது?",
          hi: "बहती हुई हवा को क्या कहा जाता है?"
        },
        options: [
          { label: "Wind", en: "Wind", ta: "காற்று (Wind)", hi: "पवन / हवा" },
          { label: "Rock", en: "Rock", ta: "பாறை", hi: "चट्टान" },
          { label: "Fire", en: "Fire", ta: "தீ", hi: "आग" },
          { label: "Cloud", en: "Cloud", ta: "மேகம்", hi: "बादल" }
        ],
        correctIndex: 0
      }
    ]
  },

  // MATHEMATICS - Numbers & Counting (5 Questions)
  {
    id: "math-1",
    subjectId: "mathematics",
    subjectName: {
      en: "Mathematics",
      ta: "கணிதம்",
      hi: "गणित"
    },
    title: {
      en: "Numbers & Counting",
      ta: "எண்களும் எண்ணுதலும்",
      hi: "संख्याएँ और गिनती"
    },
    summary: {
      en: "Learn to count objects and write numbers easily.",
      ta: "பொருள்களை எண்ணி எண்களை எளிதாக எழுதக் கற்றுக் கொள்ளுங்கள்.",
      hi: "वस्तुओं को गिनना और आसानी से संख्याएं लिखना सीखें।"
    },
    originalText: "Numbers help us count objects like apples, pencils and stars.",
    content: {
      en: "Numbers help us count objects like apples, pencils and stars. Counting from 1 to 10 is the foundation of mathematics.",
      ta: "ஆப்பிள், பென்சில் மற்றும் நட்சத்திரங்கள் போன்ற பொருள்களை எண்ண எண்கள் உதவுகின்றன. 1 முதல் 10 வரை எண்ணுவது கணிதத்தின் அடிப்படை.",
      hi: "संख्याएं हमें सेब, पेंसिल और तारों जैसी वस्तुओं को गिनने में मदद करती हैं। 1 से 10 तक गिनना गणित की नींव है।"
    },
    simpleExplanation: {
      en: "Counting is fun! 1, 2, 3, 4, 5... use your fingers to count items around you.",
      ta: "எண்ணுவது மகிழ்ச்சியானது! 1, 2, 3, 4, 5... உங்கள் விரல்களைப் பயன்படுத்தி பொருள்களை எண்ணுங்கள்.",
      hi: "गिनती मजेदार है! 1, 2, 3, 4, 5... अपनी उंगलियों का उपयोग करके चीजें गिनें।"
    },
    quiz: [
      {
        id: "q1",
        question: {
          en: "What comes after number 4?",
          ta: "எண் 4 க்குப் பிறகு என்ன வரும்?",
          hi: "संख्या 4 के बाद क्या आता है?"
        },
        options: [
          { label: "3", en: "3", ta: "3", hi: "3" },
          { label: "5", en: "5", ta: "5", hi: "5" },
          { label: "6", en: "6", ta: "6", hi: "6" },
          { label: "2", en: "2", ta: "2", hi: "2" }
        ],
        correctIndex: 1
      },
      {
        id: "q2",
        question: {
          en: "How many fingers do you have on one hand?",
          ta: "ஒரு கையில் எத்தனை விரல்கள் உள்ளன?",
          hi: "एक हाथ में आपकी कितनी उंगलियां हैं?"
        },
        options: [
          { label: "3", en: "3", ta: "3", hi: "3" },
          { label: "4", en: "4", ta: "4", hi: "4" },
          { label: "5", en: "5", ta: "5", hi: "5" },
          { label: "10", en: "10", ta: "10", hi: "10" }
        ],
        correctIndex: 2
      },
      {
        id: "q3",
        question: {
          en: "Which is the smallest number?",
          ta: "மிகச்சிறிய எண் எது?",
          hi: "सबसे छोटी संख्या कौन सी है?"
        },
        options: [
          { label: "1", en: "1", ta: "1", hi: "1" },
          { label: "8", en: "8", ta: "8", hi: "8" },
          { label: "10", en: "10", ta: "10", hi: "10" },
          { label: "4", en: "4", ta: "4", hi: "4" }
        ],
        correctIndex: 0
      },
      {
        id: "q4",
        question: {
          en: "What number comes before 10?",
          ta: "10 க்கு முன் வரும் எண் எது?",
          hi: "10 से पहले कौन सी संख्या आती है?"
        },
        options: [
          { label: "7", en: "7", ta: "7", hi: "7" },
          { label: "8", en: "8", ta: "8", hi: "8" },
          { label: "9", en: "9", ta: "9", hi: "9" },
          { label: "11", en: "11", ta: "11", hi: "11" }
        ],
        correctIndex: 2
      },
      {
        id: "q5",
        question: {
          en: "If you have 3 stars and get 2 more, how many stars do you have?",
          ta: "உங்களிடம் 3 நட்சத்திரங்கள் உள்ளன, மேலும் 2 கிடைத்தால் எத்தனை நட்சத்திரங்கள்?",
          hi: "यदि आपके पास 3 तारे हैं और 2 और मिलते हैं, तो आपके पास कितने तारे हैं?"
        },
        options: [
          { label: "4", en: "4", ta: "4", hi: "4" },
          { label: "5", en: "5", ta: "5", hi: "5" },
          { label: "6", en: "6", ta: "6", hi: "6" },
          { label: "3", en: "3", ta: "3", hi: "3" }
        ],
        correctIndex: 1
      }
    ]
  },

  // ENGLISH - Basic Alphabets & Words (5 Questions)
  {
    id: "eng-1",
    subjectId: "english",
    subjectName: {
      en: "English",
      ta: "ஆங்கிலம்",
      hi: "अंग्रेज़ी"
    },
    title: {
      en: "Basic Alphabets & Words",
      ta: "அடிப்படை எழுத்துக்களும் சொற்களும்",
      hi: "बुनियादी वर्णमाला और शब्द"
    },
    summary: {
      en: "Learn simple English words like Apple, Ball, and Cat.",
      ta: "Apple, Ball, Cat போன்ற எளிய ஆங்கிலச் சொற்களைக் கற்றுக்கொள்ளுங்கள்.",
      hi: "Apple, Ball और Cat जैसे सरल अंग्रेजी शब्द सीखें।"
    },
    originalText: "English letters make simple everyday words.",
    content: {
      en: "English letters make simple everyday words. A is for Apple, B is for Ball, C is for Cat.",
      ta: "ஆங்கில எழுத்துக்கள் அன்றாட சொற்களை உருவாக்குகின்றன. A என்றால் Apple, B என்றால் Ball, C என்றால் Cat.",
      hi: "अंग्रेजी अक्षर सरल शब्द बनाते हैं। A से Apple, B से Ball, C से Cat।"
    },
    simpleExplanation: {
      en: "Letters join together to make words. Read out loud to practice your English!",
      ta: "எழுத்துக்கள் இணைந்து சொற்களாகின்றன. உரக்கப் படித்து ஆங்கிலம் பழகுங்கள்!",
      hi: "अक्षर मिलकर शब्द बनाते हैं। अभ्यास के लिए जोर से पढ़ें!"
    },
    quiz: [
      {
        id: "q1",
        question: {
          en: "What word starts with the letter 'A'?",
          ta: "'A' என்ற எழுத்தில் தொடங்கும் சொல் எது?",
          hi: "'A' अक्षर से कौन सा शब्द शुरू होता है?"
        },
        options: [
          { label: "Ball", en: "Ball", ta: "Ball (பந்து)", hi: "Ball" },
          { label: "Apple", en: "Apple", ta: "Apple (ஆப்பிள்)", hi: "Apple" },
          { label: "Cat", en: "Cat", ta: "Cat (பூனை)", hi: "Cat" },
          { label: "Dog", en: "Dog", ta: "Dog (நாய்)", hi: "Dog" }
        ],
        correctIndex: 1
      },
      {
        id: "q2",
        question: {
          en: "What letter does the word 'Cat' start with?",
          ta: "'Cat' என்ற சொல் எந்த எழுத்தில் தொடங்குகிறது?",
          hi: "'Cat' शब्द किस अक्षर से शुरू होता है?"
        },
        options: [
          { label: "B", en: "B", ta: "B", hi: "B" },
          { label: "C", en: "C", ta: "C", hi: "C" },
          { label: "D", en: "D", ta: "D", hi: "D" },
          { label: "A", en: "A", ta: "A", hi: "A" }
        ],
        correctIndex: 1
      },
      {
        id: "q3",
        question: {
          en: "What letter comes after 'B' in the English alphabet?",
          ta: "ஆங்கில எழுத்துக்களில் 'B' க்கு அடுத்து வரும் எழுத்து எது?",
          hi: "अंग्रेजी वर्णमाला में 'B' के बाद कौन सा अक्षर आता है?"
        },
        options: [
          { label: "A", en: "A", ta: "A", hi: "A" },
          { label: "C", en: "C", ta: "C", hi: "C" },
          { label: "D", en: "D", ta: "D", hi: "D" },
          { label: "E", en: "E", ta: "E", hi: "E" }
        ],
        correctIndex: 1
      },
      {
        id: "q4",
        question: {
          en: "How many letters are in the word 'DOG'?",
          ta: "'DOG' என்ற சொல்லில் எத்தனை எழுத்துக்கள் உள்ளன?",
          hi: "'DOG' शब्द में कितने अक्षर हैं?"
        },
        options: [
          { label: "2", en: "2", ta: "2", hi: "2" },
          { label: "3", en: "3", ta: "3", hi: "3" },
          { label: "4", en: "4", ta: "4", hi: "4" },
          { label: "5", en: "5", ta: "5", hi: "5" }
        ],
        correctIndex: 1
      },
      {
        id: "q5",
        question: {
          en: "Which word starts with letter 'B'?",
          ta: "'B' என்ற எழுத்தில் தொடங்கும் சொல் எது?",
          hi: "'B' अक्षर से कौन सा शब्द शुरू होता है?"
        },
        options: [
          { label: "Apple", en: "Apple", ta: "Apple", hi: "Apple" },
          { label: "Ball", en: "Ball", ta: "Ball", hi: "Ball" },
          { label: "Cat", en: "Cat", ta: "Cat", hi: "Cat" },
          { label: "Egg", en: "Egg", ta: "Egg", hi: "Egg" }
        ],
        correctIndex: 1
      }
    ]
  }
];
