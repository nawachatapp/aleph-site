// ---------------------------------------------------------------------------
// The centre's five specialities and the specialist behind each one.
//
// Credentials are transcribed from the centre's own profile cards (Instagram,
// October 2026). The "signs" lists are general guidance written for parents -
// DRAFT COPY for each specialist to review and correct.
//
// One entry per service; the home, services and team pages all read from here,
// so a change made once shows everywhere.
// ---------------------------------------------------------------------------

import type { Lang } from '../i18n/ui';

export type ServiceId = 'remedial' | 'speech' | 'ot' | 'psych' | 'nutrition';

type Bi = Record<Lang, string>;

export interface Service {
  id: ServiceId;
  /** Short name of the discipline, as used in navigation and chips. */
  name: Bi;
  /** One sentence for cards. */
  summary: Bi;
  /** Who it helps - signs a parent might notice. */
  signs: Record<Lang, string[]>;
  specialist: {
    name: Bi;
    /** Latin spelling as the centre writes it on its cards. */
    latin: string;
    /** Title line under the name. */
    role: Bi;
    credentials: Record<Lang, string[]>;
    /** Conditions list (nutrition only). */
    conditions?: Record<Lang, string[]>;
  };
}

export const services: Service[] = [
  {
    id: 'remedial',
    name: { ar: 'التربية التقويمية', en: 'Remedial education' },
    summary: {
      ar: 'خططٌ تربويّةٌ فرديّة تردمُ الثغراتِ في اللغةِ المحكيّةِ والمكتوبة، وبرامجُ علاجيّةٌ للقراءةِ والكتابة.',
      en: 'Individual education plans that close gaps in spoken and written language, with remedial programmes for reading and writing.',
    },
    signs: {
      ar: [
        'صعوبةٌ في القراءةِ أو الكتابةِ أو الإملاء',
        'ثغراتٌ في اللغةِ المحكيّةِ أو المكتوبة',
        'تأخّرٌ عن مستوى الصفّ رغمَ المتابعة',
        'حاجةٌ إلى خطّةٍ فرديّةٍ تواكبُ ما يتعلّمُه في المدرسة',
      ],
      en: [
        'Difficulty with reading, writing or spelling',
        'Gaps in spoken or written language',
        'Falling behind the class despite support at home',
        'A need for an individual plan that keeps pace with school',
      ],
    },
    specialist: {
      name: { ar: 'سارة مصطفى حيدر', en: 'Sara Mostafa Haidar' },
      latin: 'SARA MOSTAFA HAIDAR',
      role: { ar: 'مربّيةٌ تقويميّة · مديرة المركز', en: 'Remedial educator · Director' },
      credentials: {
        ar: [
          'مُجازة من الجامعة الأميركيّة في بيروت (AUB)، اختصاص تربية وتعليم – تربية مختصّة للصعوبات التعلّميّة.',
          'مشرفة على فريقٍ متعدّد الاختصاصات للتلاميذ ذوي الاحتياجات الخاصّة.',
          'خبرة تفوق 13 سنة في التنسيق والتعليم والتدخّل مع التلاميذ ذوي الاحتياجات الخاصّة والصعوبات التعلّميّة.',
          'متخصّصة في تصميم خطط تربويّة فرديّة لردم الثغرات اللغويّة المحكيّة والمكتوبة.',
          'متمرّسة في استخدام وتطبيق مناهج علاجيّة تقويميّة للقراءة والكتابة.',
        ],
        en: [
          'BA in Education from the American University of Beirut (AUB), specialising in special education for learning difficulties.',
          'Supervises a multidisciplinary team supporting students with special needs.',
          'More than 13 years coordinating, teaching and intervening with students who have special needs and learning difficulties.',
          'Specialises in designing individual education plans that close gaps in spoken and written language.',
          'Experienced in applying remedial programmes for reading and writing.',
        ],
      },
    },
  },
  {
    id: 'speech',
    name: { ar: 'علاج النطق واللغة', en: 'Speech & language therapy' },
    summary: {
      ar: 'تقييمُ وعلاجُ مشاكلِ النطقِ والكلامِ والتواصل، وعلاجُ التلعثم عندَ الأطفال، وصعوباتُ القراءةِ والكتابة.',
      en: 'Assessment and therapy for speech, language and communication, stuttering in children, and reading and writing difficulties.',
    },
    signs: {
      ar: [
        'تأخّرٌ في الكلامِ مقارنةً بأطفالٍ في عمرِه',
        'نطقٌ غيرُ واضحٍ لبعضِ الأصوات',
        'تلعثمٌ (تأتأة) أو تكرارٌ في الكلام',
        'صعوبةٌ في فهمِ ما يُقال له أو في التعبيرِ عن نفسِه',
      ],
      en: [
        'Talking later than other children the same age',
        'Some sounds are hard to understand',
        'Stuttering, or repeating sounds and words',
        'Difficulty understanding others or expressing themselves',
      ],
    },
    specialist: {
      name: { ar: 'زينة فاطمة ياسر شعيب', en: 'Zeina Fatima Yasser Shoieb' },
      latin: 'ZEINA FATIMA YASSER SHOIEB',
      role: { ar: 'اختصاصيّة في علاج النطق واللغة', en: 'Speech & language therapist' },
      credentials: {
        ar: [
          'خرّيجة الجامعة اللبنانيّة.',
          'خبرة 10 سنوات في علاج النطق واللغة.',
          'متخصّصة في علاج التلعثم (التأتأة) عند الأطفال (Lidcombe-Certified).',
          'تقييم وعلاج مشاكل النطق والكلام وصعوبات التواصل.',
          'تقييم وعلاج صعوبات القراءة والكتابة باللغات العربيّة والإنكليزيّة والألمانيّة.',
        ],
        en: [
          'Graduate of the Lebanese University.',
          '10 years of experience in speech and language therapy.',
          'Specialises in treating stuttering in children (Lidcombe-certified).',
          'Assesses and treats articulation, speech and communication difficulties.',
          'Assesses and treats reading and writing difficulties in Arabic, English and German.',
        ],
      },
    },
  },
  {
    id: 'ot',
    name: { ar: 'العلاج الانشغالي', en: 'Occupational therapy' },
    summary: {
      ar: 'خططٌ علاجيّةٌ تطوّرُ المهاراتِ الحسّيّةَ والحركيّةَ والذهنيّة، دعماً للتعلّمِ وللاستقلاليّةِ في الحياةِ اليوميّة.',
      en: 'Therapy plans that build sensory, motor and thinking skills, supporting learning and independence in daily life.',
    },
    signs: {
      ar: [
        'صعوبةٌ في الإمساكِ بالقلمِ أو في الكتابةِ والقصّ',
        'حساسيّةٌ زائدةٌ أو ناقصةٌ للأصواتِ أو اللمسِ أو الحركة',
        'صعوبةٌ في التركيزِ والجلوسِ لإنجازِ مهمّة',
        'صعوبةٌ في مهامِ الحياةِ اليوميّة كاللبسِ والأكل',
      ],
      en: [
        'Trouble holding a pencil, writing or cutting',
        'Over- or under-reacting to sound, touch or movement',
        'Difficulty focusing or staying seated for a task',
        'Difficulty with everyday tasks like dressing or eating',
      ],
    },
    specialist: {
      name: { ar: 'زينب علي موسى', en: 'Zainab Ali Moussa' },
      latin: 'ZAINAB ALI MOUSSA',
      role: { ar: 'اختصاصيّة في العلاج الانشغالي', en: 'Occupational therapist' },
      credentials: {
        ar: [
          'خرّيجة الجامعة اللبنانيّة.',
          'حاصلة على اعتماد في الأجهزة والمعينات الحركيّة المساندة ضمن برنامج التعلّم TAP التابع لمنظّمة الصحّة العالميّة (أيلول 2025).',
          'خبرة تزيد عن 5 سنوات مع الأطفال من ذوي الصعوبات التعلّميّة والاضطرابات النمائيّة، والراشدين من ذوي الإصابات العصبيّة.',
          'عضو في نقابة المعالجين الانشغاليّين.',
          'إعداد خطط علاجيّة لتطوير المهارات الحسّيّة والحركيّة، بالإضافة إلى المهارات الذهنيّة، بهدف دعم الاكتساب الأكاديمي والاستقلاليّة الذاتيّة.',
        ],
        en: [
          'Graduate of the Lebanese University.',
          'Accredited in assistive and mobility devices through the World Health Organization’s TAP learning programme (September 2025).',
          'More than 5 years with children who have learning difficulties and developmental disorders, and with adults recovering from neurological injuries.',
          'Member of the Syndicate of Occupational Therapists.',
          'Builds therapy plans that develop sensory, motor and cognitive skills to support academic learning and independence.',
        ],
      },
    },
  },
  {
    id: 'psych',
    name: { ar: 'علم النفس التربوي', en: 'Educational psychology' },
    summary: {
      ar: 'تشخيصُ الصعوباتِ التعلّميّة، واختبارُ وكسلر (WISC-IV)، وجلساتٌ استشاريّةٌ وتعديلُ سلوك.',
      en: 'Learning-difficulty diagnosis, WISC-IV testing, counselling sessions and behaviour support.',
    },
    signs: {
      ar: [
        'تراجعٌ في التحصيلِ الدراسيّ من دونِ سببٍ واضح',
        'الحاجةُ إلى تشخيصٍ دقيقٍ لصعوبةٍ تعلّميّة',
        'سلوكيّاتٌ تقلقُ الأهلَ في البيتِ أو المدرسة',
        'أسئلةٌ تربويّةٌ يحتاجُ الأهلُ فيها إلى استشارة',
      ],
      en: [
        'School results dropping with no clear reason',
        'Needing a precise diagnosis of a learning difficulty',
        'Behaviour that worries you at home or at school',
        'Parenting and schooling questions you want advice on',
      ],
    },
    specialist: {
      name: { ar: 'زينب خليل ترحيني', en: 'Zainab Khalil Tarhini' },
      latin: 'ZAINAB KHALIL TARHINI',
      role: { ar: 'اختصاصيّة في علم النفس التربوي', en: 'Educational psychologist' },
      credentials: {
        ar: [
          'ماجستير في علم النفس التربوي – الجامعة اللبنانيّة.',
          'دبلوم في الصعوبات التعلّميّة – جامعة الآداب والعلوم الإنسانيّة.',
          'تشخيص الصعوبات التعلّميّة.',
          'حاصلة على رخصة رسميّة لتطبيق اختبار وكسلر – النسخة الرابعة (WISC-IV).',
          'مشاركة في دورات ومؤتمرات في تعديل السلوك وعلم نفس النموّ.',
          'خبرة تفوق خمس سنوات في مجال الإرشاد التربوي.',
        ],
        en: [
          'Master’s degree in Educational Psychology, Lebanese University.',
          'Diploma in Learning Difficulties (Letters and Human Sciences).',
          'Diagnoses learning difficulties.',
          'Officially licensed to administer the Wechsler Intelligence Scale for Children, 4th edition (WISC-IV).',
          'Courses and conferences in behaviour modification and developmental psychology.',
          'More than five years in educational counselling.',
        ],
      },
    },
  },
  {
    id: 'nutrition',
    name: { ar: 'التغذية العلاجية', en: 'Therapeutic nutrition' },
    summary: {
      ar: 'أنظمةٌ غذائيّةٌ علاجيّةٌ مبنيّةٌ على الأدلّةِ العلميّة، للأطفالِ والكبار، وإدارةُ الوزن.',
      en: 'Evidence-based therapeutic diets and weight management, for children and adults.',
    },
    signs: {
      ar: [
        'السكّري أو أمراضُ الكلى أو القلب',
        'ارتفاعُ حمضِ اليوريك (النقرس)',
        'السمنةُ وزيادةُ الوزن',
        'أيّ حالةٍ يطلبُ فيها الطبيبُ نظاماً غذائيّاً خاصّاً',
      ],
      en: [
        'Diabetes, kidney or heart conditions',
        'High uric acid (gout)',
        'Obesity and weight gain',
        'Any condition where a doctor recommends a specific diet',
      ],
    },
    specialist: {
      name: { ar: 'إيناس علي حسن', en: 'Inas Ali Hassan' },
      latin: 'INAS ALI HASSAN',
      role: { ar: 'اختصاصيّة تغذية علاجيّة وصحّة عامّة', en: 'Clinical dietitian · Public health' },
      credentials: {
        ar: [
          'حاصلة على إجازة في علم التغذية والحمية وتنظيم الوجبات، ودرجة الماجستير في الصحّة العامّة (Master of Public Health).',
          'خبرة مهنيّة تتجاوز 10 سنوات في مجال التغذية العلاجيّة وإدارة الوزن.',
          'متخصّصة في تصميم الأنظمة الغذائيّة العلاجيّة المبنيّة على الأدلّة العلميّة (Evidence-Based Nutrition) للحالات المرضيّة المختلفة، بما في ذلك:',
        ],
        en: [
          'BS in Nutrition, Dietetics and Meal Planning, and a Master of Public Health (MPH).',
          'More than 10 years of experience in therapeutic nutrition and weight management.',
          'Specialises in designing evidence-based therapeutic diets for a range of medical conditions, including:',
        ],
      },
      conditions: {
        ar: [
          'داء السكّري',
          'أمراض الكلى، بما فيها القصور الكلوي (Uremic Conditions)',
          'أمراض القلب والشرايين',
          'ارتفاع حمض اليوريك (النقرس)',
          'السمنة وزيادة الوزن',
          'وغيرها من الحالات التي تتطلّب تدخّلاً غذائيّاً متخصّصاً',
        ],
        en: [
          'Diabetes',
          'Kidney disease, including uremic conditions',
          'Heart and vascular disease',
          'High uric acid (gout)',
          'Obesity and weight gain',
          'Other conditions that call for specialised nutritional care',
        ],
      },
    },
  },
];
