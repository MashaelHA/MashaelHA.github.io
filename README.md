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

