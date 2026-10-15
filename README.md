# Mashael Alasmari — Portfolio

موقع شخصي مبني بـ **React + Vite (JavaScript)**، ثنائي اللغة (عربي / English) مع وضع ليلي.

## التشغيل

```bash
npm install
npm run dev       # تشغيل محلي على http://localhost:5173
npm run build     # بناء نسخة النشر داخل مجلد dist
npm run preview   # معاينة نسخة النشر
```

## هيكل المشروع

```
src/
├── main.jsx                  نقطة البداية
├── App.jsx                   ترتيب الأقسام
├── data/                     ← كل المحتوى هنا (عدّلي النصوص بدون لمس المكوّنات)
│   ├── profile.js            الاسم، المسمى، النبذة، الأرقام، الروابط والإيميل
│   ├── experience.js         الخبرات + شعارات الجهات
│   ├── projects.js           المشاريع (البورتفوليو السابق مميّز أعلى القسم)
│   ├── skills.js             المهارات واللغات
│   └── education.js          التعليم، الشهادات (مع ملفاتها)، العمل التطوعي
├── i18n/ui.js                نصوص الواجهة (القوائم، العناوين، الأزرار)
├── context/
│   └── PreferencesContext.jsx  اللغة والثيم (يُحفظ اختيار الزائر)
├── hooks/
│   ├── useActiveSection.js   تمييز القسم الحالي في القائمة
│   └── useReveal.js          حركة الظهور عند التمرير
├── components/
│   ├── Navbar/   Hero/   Experience/   Projects/
│   ├── Skills/   Certificates/   Education/   Contact/   Footer/
│   └── common/   Icons, OrgLogo, SectionHeader, SocialLinks
├── assets/logos/             شعارات الجهات (وزارة الثقافة، يم، سدايا، كوايدي)
└── styles/global.css         الألوان والخطوط والمتغيرات العامة
```

كل مكوّن له ملف `.jsx` وملف `.css` خاص فيه داخل نفس المجلد.

## إضافة شعار جهة

1. ضعي الصورة في `src/assets/logos/` (يُفضّل PNG بخلفية شفافة).
2. في `src/data/experience.js`:
   ```js
   import yammLogo from '../assets/logos/yamm.png';
   // ثم داخل عنصر الجهة:
   logo: yammLogo,
   logoBg: '#ffffff', // لون خلفية مربع الشعار
   ```
   الجهة اللي ما لها شعار تكتبين لها `monogram: 'A'` بدل `logo`، ويظهر الحرف داخل المربع.

## إضافة شهادة

1. ضعي ملف الشهادة (PDF أو صورة) في `public/certificates/`.
2. ضعي صورة مصغّرة لها في `public/certificates/thumbs/`.
3. أضيفي عنصرًا في `certificates` داخل `src/data/education.js`:
   ```js
   {
     id: 'my-cert',
     title: { en: 'Certificate name', ar: 'اسم الشهادة' },
     issuer: 'Udemy',
     date: { en: 'Jan 2025', ar: 'يناير 2025' },
     file: '/certificates/my-cert.pdf',
     thumb: '/certificates/thumbs/my-cert.jpg',
     verify: 'https://...', // اختياري: رابط التحقق
   }
   ```
   لربط شهادة بخبرة معيّنة أضيفي `certificate: '/certificates/....pdf'` داخل الدور في `experience.js`.

## النشر على Netlify

ملف `netlify.toml` جاهز: اربطي المستودع على Netlify وبيبني تلقائيًا (`npm run build` → `dist`).
أو اسحبي مجلد `dist` بعد البناء إلى https://app.netlify.com/drop
