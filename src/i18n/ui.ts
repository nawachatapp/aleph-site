// ---------------------------------------------------------------------------
// Every user-visible string that is not page body copy lives here:
// navigation, labels, buttons and footer - anything repeated across pages.
// Page copy sits in each page file, Arabic and English side by side.
// ---------------------------------------------------------------------------

export const languages = {
  ar: 'العربية',
  en: 'English',
} as const;

export const defaultLang = 'ar';
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];

// Text direction per language, used on <html dir="...">.
export const dir: Record<Lang, 'rtl' | 'ltr'> = {
  ar: 'rtl',
  en: 'ltr',
};

export const ui = {
  ar: {
    'site.name': 'مركز ألِف التربوي',
    'site.nameShort': 'ألِف',
    'site.motto': 'والعلمُ يزكو على الإنفاق',
    'site.kind': 'علاجٌ وتربيةٌ مختصّة',

    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.team': 'الفريق',
    'nav.about': 'من نحن',
    'nav.news': 'الأخبار',
    'nav.contact': 'تواصل معنا',
    'nav.menu': 'القائمة',
    'nav.skip': 'تخطَّ إلى المحتوى',

    'lang.switch': 'English',
    'lang.glyph': 'EN',
    'lang.label': 'تغيير اللغة',

    'footer.pages': 'صفحات الموقع',
    'footer.contact': 'للتواصل',
    'footer.rights': 'جميع الحقوق محفوظة',

    'cta.whatsapp': 'راسلونا على واتساب',
    'cta.call': 'اتصلوا بنا',
    'cta.services': 'تعرّفوا إلى خدماتنا',
    'cta.team': 'تعرّفوا إلى الفريق',
    'cta.allNews': 'كل الأخبار',
    'cta.portal': 'المنصّة الإلكترونية',
    'cta.portalDesc': 'متابعة الجلسات والخطط والمواعيد في مكانٍ واحد',
    'cta.soon': 'قريباً',
    'cta.map': 'افتحوا الخريطة',

    'service.specialist': 'الاختصاصية',
    'service.forWhom': 'متى تفيد؟',
    'service.whatWeDo': 'ماذا نقدّم',
    'service.ask': 'اسألوا عن هذه الخدمة',
  },

  en: {
    'site.name': 'Aleph Educational Center',
    'site.nameShort': 'Aleph',
    'site.motto': 'Knowledge grows as it is given',
    'site.kind': 'Therapy & specialised education',

    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.team': 'Our team',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',

    'lang.switch': 'العربية',
    'lang.glyph': 'ع',
    'lang.label': 'Change language',

    'footer.pages': 'Pages',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',

    'cta.whatsapp': 'Message us on WhatsApp',
    'cta.call': 'Call us',
    'cta.services': 'Explore our services',
    'cta.team': 'Meet the team',
    'cta.allNews': 'All news',
    'cta.portal': 'Online portal',
    'cta.portalDesc': 'Sessions, plans and appointments in one place',
    'cta.soon': 'Coming soon',
    'cta.map': 'Open the map',

    'service.specialist': 'Specialist',
    'service.forWhom': 'When does it help?',
    'service.whatWeDo': 'What we offer',
    'service.ask': 'Ask about this service',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

// The nav, in display order. `key` indexes into `ui`; `path` is appended to
// the language prefix. Adding a page here adds it to the header AND footer.
export const navItems = [
  { key: 'nav.home', path: '' },
  { key: 'nav.services', path: 'services' },
  { key: 'nav.team', path: 'team' },
  { key: 'nav.about', path: 'about' },
  { key: 'nav.news', path: 'news' },
  { key: 'nav.contact', path: 'contact' },
] as const;
