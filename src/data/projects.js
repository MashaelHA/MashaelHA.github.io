import { links } from './profile';

// `featured` shows as the large card at the top of the section.
export const projects = [
  {
    id: 'previous-portfolio',
    featured: true,
    title: { en: 'Previous Portfolio', ar: 'البورتفوليو السابق' },
    description: {
      en: 'My earlier personal portfolio — the first version of this site, built while I was starting out in front-end development.',
      ar: 'نسختي السابقة من البورتفوليو الشخصي، بنيتها في بداياتي في تطوير الواجهات الأمامية.',
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    url: links.previousPortfolio,
    cta: { en: 'Visit site', ar: 'زيارة الموقع' },
  },
  {
    id: 'cultural-observatory',
    title: { en: 'Cultural Observatory Integrations', ar: 'تكاملات المرصد الثقافي' },
    description: {
      en: 'Integrations connecting 18 government services — including ZATCA and TVTC — to the Ministry’s Cultural Observatory.',
      ar: 'تكاملات تربط 18 خدمة حكومية، منها هيئة الزكاة والضريبة والجمارك والتدريب التقني، بالمرصد الثقافي للوزارة.',
    },
    tags: ['GSB', 'GSN', 'APIs'],
    context: { en: 'Ministry of Culture', ar: 'وزارة الثقافة' },
  },
  {
    id: 'tawakkalna',
    title: { en: 'Ministry Services on Tawakkalna', ar: 'خدمات الوزارة في توكلنا' },
    description: {
      en: 'Exposed Ministry services inside the Tawakkalna app through Apigee middleware, from design to validation.',
      ar: 'إتاحة خدمات الوزارة داخل تطبيق توكلنا عبر منصة Apigee الوسيطة، من التصميم حتى الاختبار والتحقق.',
    },
    tags: ['Apigee', 'API Gateway'],
    context: { en: 'Ministry of Culture', ar: 'وزارة الثقافة' },
  },
  {
    id: 'dewani',
    title: { en: 'Dewani Platform', ar: 'منصة ديواني' },
    description: {
      en: '15+ internal digital services built and enhanced with SPFx web parts, React features and SharePoint workflows.',
      ar: 'أكثر من 15 خدمة رقمية داخلية تم بناؤها وتطويرها بأجزاء ويب SPFx ومزايا React ومسارات عمل SharePoint.',
    },
    tags: ['SPFx', 'React', 'SharePoint'],
    context: { en: 'Ministry of Culture', ar: 'وزارة الثقافة' },
  },
  {
    id: 'graduation',
    title: { en: 'Eastern Region Tourism App', ar: 'تطبيق سياحي للمنطقة الشرقية' },
    description: {
      en: 'Graduation project: a mobile tourism app for the Eastern Province with a built-in chatbot. I led the team and owned code documentation.',
      ar: 'مشروع التخرج: تطبيق جوال سياحي للمنطقة الشرقية مع روبوت محادثة. قدت الفريق وتوليت توثيق الكود وتنظيمه.',
    },
    tags: ['Mobile app', 'Chatbot', 'Team lead'],
    url: 'https://github.com/MashaelHA/Graduation-Project',
    cta: { en: 'View code', ar: 'عرض الكود' },
  },
];
