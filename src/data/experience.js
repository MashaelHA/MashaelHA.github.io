// Work experience, newest first. Roles at the same organisation are grouped.
// To add a logo: drop the image in src/assets/logos and import it here.
import mocLogo from '../assets/logos/moc.png';
import kwaidiLogo from '../assets/logos/kwaidi.png';
import yammLogo from '../assets/logos/yamm.png';
import sdaiaLogo from '../assets/logos/sdaia.png';

export const experience = [
  {
    id: 'moc',
    org: { en: 'Ministry of Culture', ar: 'وزارة الثقافة' },
    via: { en: 'via ITC Infotech', ar: 'عبر شركة ITC Infotech' },
    logo: mocLogo,
    logoBg: '#ffffff',
    roles: [
      {
        title: { en: 'Integration Engineer', ar: 'مهندسة تكامل' },
        period: { en: 'Mar 2025 — Present', ar: 'مارس 2025 — حتى الآن' },
        current: true,
        bullets: {
          en: [
            'Design, develop and manage secure API integrations using Apigee across Ministry services and external government platforms.',
            'Implemented integrations for Ministry services inside Tawakkalna through Apigee middleware.',
            'Took part in the Cultural Observatory integrations connecting 18 government services, including ZATCA and TVTC.',
            'Supported and coordinated GSB/GSN onboarding with NIC — connectivity setup, validation, testing and successful data retrieval from entities such as the Ministry of Education and SPL.',
            'Handled network-level requirements: DNS, firewall change requests, IP whitelisting and SSL certificate exchange for secure end-to-end communication.',
            'Designed, tested and validated API integrations with Postman and SoapUI; investigated incidents and ran Root Cause Analysis (RCA).',
          ],
          ar: [
            'أصمم وأطوّر وأدير تكاملات آمنة للواجهات البرمجية باستخدام Apigee بين خدمات الوزارة والمنصات الحكومية الخارجية.',
            'نفّذت تكاملات خدمات الوزارة داخل تطبيق توكلنا عبر منصة Apigee الوسيطة.',
            'شاركت في تكاملات المرصد الثقافي لربط 18 خدمة حكومية، من بينها هيئة الزكاة والضريبة والجمارك والمؤسسة العامة للتدريب التقني والمهني.',
            'دعمت ونسّقت إجراءات الربط عبر GSB/GSN مع مركز المعلومات الوطني، من إعداد الاتصال والتحقق والاختبار حتى استرجاع البيانات بنجاح من جهات مثل وزارة التعليم وسبل (SPL).',
            'أدرت متطلبات الشبكة مثل DNS وطلبات تغيير الجدار الناري وإضافة عناوين IP للقائمة المسموحة وتبادل شهادات SSL لضمان اتصال آمن من طرف إلى طرف.',
            'صممت واختبرت تكاملات الواجهات البرمجية باستخدام Postman و SoapUI، وتابعت الحوادث وأجريت تحليل السبب الجذري (RCA).',
          ],
        },
        tags: ['Apigee API Management', 'System Integration', 'REST APIs', 'GSB / GSN', 'Postman', 'SoapUI', 'SSL / DNS'],
      },
      {
        title: { en: 'SharePoint Developer', ar: 'مطوّرة SharePoint' },
        period: { en: 'Dec 2023 — Mar 2025', ar: 'ديسمبر 2023 — مارس 2025' },
        bullets: {
          en: [
            'Supported and enhanced 15+ digital services on the Dewani platform through SharePoint and SPFx development.',
            'Built custom web parts and features with SPFx and React, improving data management and collaboration.',
            'Designed and implemented SharePoint workflows across Dewani services, streamlining processes end to end.',
            'Contributed to security hardening: error handling, query-parameter encoding, access control and parameter-manipulation fixes.',
          ],
          ar: [
            'دعمت وطوّرت أكثر من 15 خدمة رقمية على منصة ديواني من خلال تطوير SharePoint و SPFx.',
            'بنيت أجزاء ويب ومزايا مخصصة باستخدام SPFx و React حسّنت إدارة البيانات والتعاون داخل المنصة.',
            'صممت ونفّذت مسارات عمل SharePoint لخدمات منصة ديواني لأتمتة الإجراءات بسلاسة.',
            'ساهمت في تعزيز الأمان عبر معالجة الأخطاء وترميز المعاملات وضبط صلاحيات الوصول ومنع التلاعب بالمعاملات.',
          ],
        },
        tags: ['SharePoint', 'SPFx', 'React', 'TypeScript', 'Back-End Web Development', 'Azure DevOps'],
      },
    ],
  },
  {
    id: 'yamm',
    org: { en: 'Yamm', ar: 'شركة يم' },
    via: { en: 'Remote', ar: 'عن بُعد' },
    logo: yammLogo,
    logoBg: '#ffffff',
    roles: [
      {
        title: { en: 'Front-end Developer', ar: 'مطوّرة واجهات أمامية' },
        period: { en: 'Dec 2023 — Jun 2024 · Part-time', ar: 'ديسمبر 2023 — يونيو 2024 · دوام جزئي' },
        bullets: {
          en: [
            'Built projects using a monorepo architecture.',
            'Implemented React Query for data fetching, caching and server-state management.',
            'Built and optimised reusable components, significantly improving code modularity.',
            'Improved the performance and user experience of the personal profile page by 20%.',
          ],
          ar: [
            'بنيت مشاريع باستخدام بنية المستودع الموحّد (Monorepo).',
            'طبّقت React Query لجلب البيانات وتخزينها مؤقتًا وإدارة حالة الخادم.',
            'بنيت وحسّنت مكوّنات قابلة لإعادة الاستخدام رفعت من قابلية تقسيم الكود وتنظيمه.',
            'حسّنت أداء وتجربة استخدام صفحة الملف الشخصي بنسبة 20%.',
          ],
        },
        tags: ['React', 'React Query', 'Tailwind CSS', 'Monorepo'],
      },
      {
        title: { en: 'Front-end Developer — Internship', ar: 'مطوّرة واجهات أمامية — تدريب' },
        period: { en: 'Aug 2023 — Dec 2023', ar: 'أغسطس 2023 — ديسمبر 2023' },
        bullets: {
          en: ['Developed and maintained websites using the React framework.'],
          ar: ['طوّرت وصنت مواقع ويب باستخدام React.'],
        },
        tags: ['React', 'Tailwind CSS', 'GitHub', 'JavaScript'],
      },
    ],
  },
  {
    id: 'elevate',
    org: { en: 'SDAIA × Google Cloud', ar: 'سدايا × Google Cloud' },
    via: { en: 'Elevate Program · Remote', ar: 'برنامج Elevate · عن بُعد' },
    logo: sdaiaLogo,
    logoBg: '#ffffff',
    roles: [
      {
        title: { en: 'Data Engineering Track', ar: 'مسار هندسة البيانات' },
        period: { en: 'May 2023 — Aug 2023', ar: 'مايو 2023 — أغسطس 2023' },
        certificate: '/certificates/elevate-sdaia-google-cloud.pdf',
        bullets: {
          en: [
            'Completed a four-month Data Engineering program selected among 1,000 trainees.',
            'Covered technical and business tracks focused on real data-engineering challenges and solutions.',
          ],
          ar: [
            'أتممت برنامجًا لمدة أربعة أشهر في هندسة البيانات ضمن 1,000 متدرب.',
            'شمل البرنامج مسارات تقنية وتجارية تركّز على تحديات هندسة البيانات وحلولها.',
          ],
        },
        tags: ['Google Cloud', 'Data Engineering', 'SQL', 'Python'],
      },
    ],
  },
  {
    id: 'kwaidi',
    org: { en: 'Kwaidi Mall', ar: 'كوايدي مول' },
    via: { en: 'Cooperative training', ar: 'تدريب تعاوني' },
    logo: kwaidiLogo,
    logoBg: '#0F1B2D',
    roles: [
      {
        title: { en: 'COOP Trainee', ar: 'متدرّبة تدريب تعاوني' },
        period: { en: 'Jun 2022 — Aug 2022', ar: 'يونيو 2022 — أغسطس 2022' },
        certificate: '/certificates/kwaidi-coop-training.pdf',
        bullets: {
          en: [
            'Developed 7+ website pages with Vue.js, delivering seamless UIs aligned with client requirements.',
            'Built and customised Odoo modules to support internal business workflows, and worked with Django.',
            'Worked with APIs & Flutter, ERP systems and databases, ERP documentation, and UI design in Figma & XD; re-programmed tools in Python.',
            'Graded “Plus+ — Recommended” in the official cooperative training certificate.',
          ],
          ar: [
            'طوّرت أكثر من 7 صفحات للموقع باستخدام Vue.js بواجهات سلسة متوافقة مع متطلبات العميل.',
            'بنيت وخصّصت وحدات في نظام Odoo لدعم سير العمل الداخلي، وتعاملت مع إطار Django.',
            'تعاملت مع الواجهات البرمجية و Flutter وأنظمة ERP وقواعد البيانات وتوثيق ERP، وتصميم الواجهات في Figma و XD، وإعادة البرمجة باستخدام Python.',
            'حصلت على تقدير «Plus+ — موصى به» في وثيقة التدريب التعاوني.',
          ],
        },
        tags: ['Vue.js', 'Odoo', 'Django', 'Python', 'GitHub', 'Figma'],
      },
    ],
  },
];
