export const education = {
  degree: { en: 'Bachelor of Computer Science', ar: 'بكالوريوس علوم الحاسب' },
  school: {
    en: 'Imam Mohammad Ibn Saud Islamic University',
    ar: 'جامعة الإمام محمد بن سعود الإسلامية',
  },
  period: { en: 'Sep 2018 — Mar 2023', ar: 'سبتمبر 2018 — مارس 2023' },
  gpa: { en: 'GPA 4.87 / 5 · First Class Honors', ar: 'المعدل 4.87 من 5 · مرتبة الشرف الأولى' },
};

// Certificate files live in /public/certificates (PDF or image) with a preview in /thumbs.
export const certificates = [
  {
    id: 'spfx',
    title: { en: 'Mastering SharePoint Framework (SPFx) Development', ar: 'إتقان تطوير SharePoint Framework (SPFx)' },
    issuer: 'Udemy',
    date: { en: 'Jan 2024 · 23.5 hours', ar: 'يناير 2024 · 23.5 ساعة' },
    file: '/certificates/sharepoint-spfx-udemy.pdf',
    verify: 'https://www.udemy.com/certificate/UC-17727df2-e589-490e-bac7-ca335a896c43/',
    thumb: '/certificates/thumbs/sharepoint-spfx-udemy.jpg',
  },
  {
    id: 'frontend',
    title: { en: 'Introduction to Front-End Development', ar: 'مقدمة في تطوير الواجهات الأمامية' },
    issuer: 'Meta · Coursera',
    date: { en: 'Nov 2023', ar: 'نوفمبر 2023' },
    file: '/certificates/front-end-meta-coursera.pdf',
    verify: 'https://www.coursera.org/account/accomplishments/verify/8DUUCB2SF4GH',
    thumb: '/certificates/thumbs/front-end-meta-coursera.jpg',
  },
  {
    id: 'git',
    title: { en: 'Master Git and GitHub — Beginner to Expert', ar: 'إتقان Git و GitHub — من المبتدئ إلى المحترف' },
    issuer: 'Udemy',
    date: { en: 'Oct 2023 · 3 hours', ar: 'أكتوبر 2023 · 3 ساعات' },
    file: '/certificates/git-github-udemy.jpg',
    thumb: '/certificates/thumbs/git-github-udemy.jpg',
    verify: 'https://ude.my/UC-dabeb0eb-912e-48e8-b7f7-3073753e0aa6',
  },
  {
    id: 'elevate',
    title: { en: 'Elevate Program — Data Engineering', ar: 'برنامج Elevate — هندسة البيانات' },
    issuer: 'SDAIA & Google Cloud',
    date: { en: 'Aug 2023', ar: 'أغسطس 2023' },
    file: '/certificates/elevate-sdaia-google-cloud.pdf',
    thumb: '/certificates/thumbs/elevate-sdaia-google-cloud.jpg',
  },
  {
    id: 'kwaidi',
    title: { en: 'Cooperative Training Certificate', ar: 'وثيقة التدريب التعاوني' },
    issuer: { en: 'Kwaidi', ar: 'كوايدي' },
    date: { en: 'Aug 2022', ar: 'أغسطس 2022' },
    file: '/certificates/kwaidi-coop-training.pdf',
    thumb: '/certificates/thumbs/kwaidi-coop-training.jpg',
  },
];

export const volunteering = [
  {
    id: 'gdsc',
    org: { en: 'Google Developer Student Club — KFU', ar: 'نادي مطوري Google الطلابي — جامعة الملك فيصل' },
    role: { en: 'Technical Team Member', ar: 'عضوة الفريق التقني' },
    period: { en: 'Sep 2022 — Present', ar: 'سبتمبر 2022 — حتى الآن' },
  },
  {
    id: 'basmat',
    org: { en: 'Basmat Farah Volunteer Team', ar: 'فريق بسمة فرح التطوعي' },
    role: { en: 'Vice President · Vice team Al Khobar & social accounts administrator', ar: 'نائبة الرئيس · نائبة فريق الخبر وإدارة الحسابات الاجتماعية' },
    period: { en: 'Nov 2020 — Present', ar: 'نوفمبر 2020 — حتى الآن' },
  },
  {
    id: 'edhaah',
    org: { en: 'Edhaah', ar: 'منظومة إضاءة' },
    role: { en: 'Member · Edhaah technique, follow-up & development committee, photo design', ar: 'عضوة · إضاءة التقنية، لجنة المتابعة والتطوير، تصميم الصور' },
    period: { en: 'Jan 2020 — Dec 2022', ar: 'يناير 2020 — ديسمبر 2022' },
  },
  {
    id: 'cfg',
    org: { en: 'Code For Girls', ar: 'Code For Girls' },
    role: { en: 'Hero · Education', ar: 'Hero · تعليم' },
    period: { en: 'Jan 2021 — Jun 2021', ar: 'يناير 2021 — يونيو 2021' },
  },
  {
    id: 'yumn',
    org: { en: 'Yumn Eastern Volunteer Team', ar: 'فريق يُمن الشرقية التطوعي' },
    role: { en: 'Member · Design department', ar: 'عضوة · قسم التصميم' },
    period: { en: 'Oct 2020 — Sep 2021', ar: 'أكتوبر 2020 — سبتمبر 2021' },
  },
  {
    id: 'aarifha',
    org: { en: '“Aarifha Bebasata” Initiative', ar: 'مبادرة اعرفها ببساطة' },
    role: { en: 'Member · Design department', ar: 'عضوة · قسم التصميم' },
    period: { en: 'Oct 2020 — Sep 2021', ar: 'أكتوبر 2020 — سبتمبر 2021' },
  },
];
