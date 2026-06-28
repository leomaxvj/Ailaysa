import { Project, GlossaryTerm, TranslationExample, TranslationSegment, User } from '../types';

export const MOCK_USER: User = {
  id: 'usr-1',
  name: 'Manoj Kumar',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop',
  email: 'manoj@example.com',
};

export const INITIAL_GLOSSARY: GlossaryTerm[] = [
  { id: 'g-1', sourceWord: 'Charge', targetWord: 'குற்றச்சாட்டு', partOfSpeech: 'Noun' },
  { id: 'g-2', sourceWord: 'Credit', targetWord: 'வரவு', partOfSpeech: 'Noun' },
  { id: 'g-3', sourceWord: 'Debit', targetWord: 'பற்று', partOfSpeech: 'Noun' },
  { id: 'g-4', sourceWord: 'Account', targetWord: 'கணக்கு', partOfSpeech: 'Noun' },
  { id: 'g-5', sourceWord: 'Balance', targetWord: 'இருப்பு', partOfSpeech: 'Noun' },
  { id: 'g-6', sourceWord: 'Statement', targetWord: 'அறிக்கை', partOfSpeech: 'Noun' },
];

export const INITIAL_EXAMPLES: TranslationExample[] = [
  {
    id: 'e-1',
    sourceExample: 'She walked alone in the village thinking about her past',
    targetExample: 'அவள் தனது கடந்த காலத்தைப் பற்றி யோசித்துக்கொண்டே கிராமத்தில் தனியாக நடந்தாள்.',
  },
  {
    id: 'e-2',
    sourceExample: 'He felt unsure of where his life was leading',
    targetExample: 'தன் வாழ்க்கை எங்கு செல்கிறது என்று தெரியாமல் அவர் குழம்பினார்.',
  },
  {
    id: 'e-3',
    sourceExample: 'Regular exercise is good for both physical and mental health',
    targetExample: 'வழக்கமான உடற்பயிற்சி உடல் மற்றும் மன ஆரோக்கியம் இரண்டிற்கும் நல்லது.',
  },
];

export const INITIAL_SEGMENTS: TranslationSegment[] = [
  {
    id: 's-1',
    sourceText: 'Wellness and Wealth are not separate goals. When we care for our body and mind, we make better decisions with our time and money. Health gives us energy to create, and wealth gives us the freedom to choose.',
    targetText: 'நம் உடலையும் மனதையும் நன்றாக கவனித்துக் கொண்டால், நம் நேரத்தையும் பணத்தையும் பற்றிய சிறந்த முடிவுகளை எடுக்க முடியும். நல்ல ஆரோக்கியம் நமக்கு உருவாக்கும் ஆற்றலை வழங்குகிறது; செல்வம் நமக்கு விரும்பியதைத் தேர்ந்தெடுக்கும் சுதந்திரத்தை அளிக்கிறது.',
    isCompleted: true,
    isFlagged: false,
  },
  {
    id: 's-2',
    sourceText: 'Money habits are health habits. Budget with intention, spend with awareness, and invest for the future you want.',
    targetText: 'பணப் பழக்கங்கள் என்பவை ஆரோக்கியமான வாழ்க்கைப் பழக்கங்களும் ஆகும். தெளிவான நோக்கத்துடன் செலவுத் திட்டத்தை அமைக்கவும், விழிப்புணர்வுடன் பணத்தைச் செலவிடவும், நீங்கள் விரும்பும்',
    isCompleted: false,
    isFlagged: false,
  },
  {
    id: 's-3',
    sourceText: 'Small daily habits compound over time. A few mindful minutes in the morning, nourishing food, regular movement, and focused work lead to better health and steady financial growth. Consistency is more powerful than intensity.',
    targetText: 'சிறிய தினசரி பழக்கங்கள் காலப்போக்கில் பெரிய பலன்களை உருவாக்குகின்றன. காலையில் சில நிமிடங்கள் மன ஒருமையுடன் இருப்பது, சத்தான உணவை உட்கொள்வது, தொடர்ந்து உடற்பயிற்சி செய்வது மற்றும் கவனமுடன் வேலை செய்வது ஆகியவை சிறந்த ஆரோக்கியத்திற்கும் நிலையான நிதி வளர்ச்சிக்கும் வழிவகுக்கின்றன. தீவிரத்தை விட தொடர்ச்சியே அதிக சக்தி வாய்ந்தது.',
    isCompleted: false,
    isFlagged: false,
  },
  {
    id: 's-4',
    sourceText: 'Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.',
    targetText: 'ஆரோக்கியம் என்பது முழுமையான உடல், மன மற்றும் சமூக நலன்களின் நிலையாகும், மேலும் இது நோயோ அல்லது பலவீனமோ இல்லாதது மட்டுமல்ல.',
    isCompleted: false,
    isFlagged: false,
  },
  {
    id: 's-5',
    sourceText: 'The greatest wealth is to live content with little.',
    targetText: 'மிகப்பெரிய செல்வம் என்பது கொஞ்சத்துடன் திருப்தியாக வாழ்வதே ஆகும்.',
    isCompleted: false,
    isFlagged: false,
  },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p-1',
    name: 'Demo project-1',
    sourceLang: 'en',
    targetLang: 'ta',
    createdOn: 'Apr 10, 11:59 AM',
    files: [
      { id: 'f-1', name: 'Chapter 1.pdf', date: '10-04-2026', size: '20 MB', progress: 100, status: 'completed' },
      { id: 'f-2', name: 'Chapter 2.pdf', date: '10-04-2026', size: '20 MB', progress: 35, status: 'uploading' }
    ]
  },
  {
    id: 'p-2',
    name: 'The Hills',
    sourceLang: 'en',
    targetLang: 'ta',
    createdOn: 'Apr 10, 11:59 AM',
    files: [
      { id: 'f-3', name: 'Chapter 1.txt', date: '10-04-2026', size: '5 MB', progress: 100, status: 'completed' }
    ]
  },
  {
    id: 'p-3',
    name: 'Over the Horizons',
    sourceLang: 'en',
    targetLang: 'ta',
    createdOn: 'Apr 10, 11:59 AM',
    files: [
      { id: 'f-4', name: 'Introduction.docx', date: '10-04-2026', size: '12 MB', progress: 100, status: 'completed' }
    ]
  }
];
