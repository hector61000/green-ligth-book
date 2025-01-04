import { bookCategories } from './bookCategories';

export interface Book {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  categoryId: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "كتاب الأسبوع 168 ساعة",
    price: 150,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.58 (1).jpeg",
    description: "كتاب يساعدك على إدارة وقتك بشكل أفضل",
    categoryId: 'personal-development'
  },
  {
    id: 2,
    title: "علم التحكم النفسي الآلي",
    price: 120,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.58.jpeg",
    description: "نسخة محدثة وموسعة",
    categoryId: 'personal-development'
  },
  {
    id: 3,
    title: "كيف تجعل الناس تحبك في 90 ثانية",
    price: 180,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (1).jpeg",
    description: "دليلك العملي للتواصل الفعال مع الآخرين",
    categoryId: 'personal-development'
  },
  {
    id: 4,
    title: "فن الحياة البسيطة",
    price: 200,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (2).jpeg",
    description: "100 عادة يومية لحياة أكثر هدوءاً وسعادة",
    categoryId: 'personal-development'
  },
  {
    id: 5,
    title: "قوة التحكم في الذات",
    price: 160,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (3).jpeg",
    description: "تعلم كيف تتحكم في ذاتك",
    categoryId: 'personal-development'
  },
  {
    id: 6,
    title: "قوة الثقة بالنفس",
    price: 140,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (4).jpeg",
    description: "بناء الثقة بالنفس وتعزيزها",
    categoryId: 'personal-development'
  },
  {
    id: 7,
    title: "قوة التحفيز",
    price: 170,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59.jpeg",
    description: "تعلم كيف تحفز نفسك",
    categoryId: 'personal-development'
  },
  {
    id: 8,
    title: "قوة الإرادة",
    price: 130,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.00 (1).jpeg",
    description: "تقوية الإرادة وتحقيق الأهداف",
    categoryId: 'personal-development'
  },
  {
    id: 9,
    title: "قوة العقل الباطن",
    price: 190,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.00 (2).jpeg",
    description: "اكتشف قوة عقلك الباطن",
    categoryId: 'personal-development'
  },
  {
    id: 10,
    title: "قوة التفكير الإيجابي",
    price: 145,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.00 (3).jpeg",
    description: "تطوير التفكير الإيجابي",
    categoryId: 'personal-development'
  },
  {
    id: 11,
    title: "قوة العادات الإيجابية",
    price: 155,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.00 (4).jpeg",
    description: "بناء عادات إيجابية جديدة",
    categoryId: 'personal-development'
  },
  {
    id: 12,
    title: "قوة الذكاء العاطفي",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.00.jpeg",
    description: "تطوير ذكائك العاطفي",
    categoryId: 'personal-development'
  },
  {
    id: 13,
    title: "قوة التواصل الفعال",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.01 (1).jpeg",
    description: "مهارات التواصل الفعال",
    categoryId: 'personal-development'
  },
  {
    id: 14,
    title: "قوة الشخصية الجذابة",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.01 (2).jpeg",
    description: "بناء شخصية جذابة ومؤثرة",
    categoryId: 'personal-development'
  },
  {
    id: 15,
    title: "قوة التخطيط الاستراتيجي",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.01 (3).jpeg",
    description: "مهارات التخطيط الاستراتيجي",
    categoryId: 'business'
  },
  {
    id: 16,
    title: "قوة إدارة الوقت",
    price: 135,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.01 (4).jpeg",
    description: "إدارة الوقت بفعالية",
    categoryId: 'personal-development'
  },
  {
    id: 17,
    title: "فن القيادة الفعالة",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.01 (5).jpeg",
    description: "تطوير مهارات القيادة",
    categoryId: 'business'
  },
  {
    id: 18,
    title: "قوة الإبداع",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.01 (6).jpeg",
    description: "تنمية التفكير الإبداعي",
    categoryId: 'personal-development'
  },
  {
    id: 19,
    title: "فن التفاوض",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.01 (7).jpeg",
    description: "مهارات التفاوض الفعال",
    categoryId: 'business'
  },
  {
    id: 20,
    title: "قوة الذاكرة",
    price: 145,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.01.jpeg",
    description: "تقوية الذاكرة وتحسين التركيز",
    categoryId: 'personal-development'
  },
  {
    id: 21,
    title: "فن إدارة المشاريع",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02 (1).jpeg",
    description: "أساسيات إدارة المشاريع",
    categoryId: 'business'
  },
  {
    id: 22,
    title: "قوة التركيز",
    price: 155,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02 (2).jpeg",
    description: "تحسين التركيز والإنتاجية",
    categoryId: 'personal-development'
  },
  {
    id: 23,
    title: "فن التخطيط المالي",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02 (3).jpeg",
    description: "إدارة الأموال بذكاء",
    categoryId: 'business'
  },
  {
    id: 24,
    title: "قوة العلاقات",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02 (4).jpeg",
    description: "بناء علاقات ناجحة",
    categoryId: 'personal-development'
  },
  {
    id: 25,
    title: "فن التسويق الذاتي",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02 (5).jpeg",
    description: "تسويق نفسك بفعالية",
    categoryId: 'business'
  },
  {
    id: 26,
    title: "قوة الكاريزما",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02 (6).jpeg",
    description: "تطوير شخصيتك الكاريزمية",
    categoryId: 'personal-development'
  },
  {
    id: 27,
    title: "فن الإقناع",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02 (7).jpeg",
    description: "مهارات الإقناع الفعال",
    categoryId: 'personal-development'
  },
  {
    id: 28,
    title: "قوة التغيير",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02.jpeg",
    description: "إدارة التغيير بنجاح",
    categoryId: 'personal-development'
  },
  {
    id: 29,
    title: "فن التحفيز الذاتي",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (1).jpeg",
    description: "تحفيز نفسك للنجاح",
    categoryId: 'personal-development'
  },
  {
    id: 30,
    title: "قوة الإلهام",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (2).jpeg",
    description: "كيف تكون ملهماً للآخرين",
    categoryId: 'personal-development'
  },
  {
    id: 31,
    title: "فن إدارة الضغوط",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (3).jpeg",
    description: "التعامل مع الضغوط النفسية",
    categoryId: 'personal-development'
  },
  {
    id: 32,
    title: "قوة الإنجاز",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (4).jpeg",
    description: "تحقيق الإنجازات العظيمة",
    categoryId: 'personal-development'
  },
  {
    id: 33,
    title: "فن التواصل البصري",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (5).jpeg",
    description: "مهارات التواصل البصري",
    categoryId: 'personal-development'
  },
  {
    id: 34,
    title: "قوة الحضور",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (6).jpeg",
    description: "تطوير حضورك الشخصي",
    categoryId: 'personal-development'
  },
  {
    id: 35,
    title: "فن الإدارة الذاتية",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (7).jpeg",
    description: "إدارة الذات بفعالية",
    categoryId: 'personal-development'
  },
  {
    id: 36,
    title: "قوة التأثير",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (8).jpeg",
    description: "كيف تؤثر في الآخرين",
    categoryId: 'personal-development'
  },
  {
    id: 37,
    title: "فن التخطيط الشخصي",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03.jpeg",
    description: "تخطيط حياتك بنجاح",
    categoryId: 'personal-development'
  },
  {
    id: 38,
    title: "قوة الإبداع الذاتي",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04 (1).jpeg",
    description: "تطوير إبداعك الشخصي",
    categoryId: 'personal-development'
  },
  {
    id: 39,
    title: "فن التعامل مع الآخرين",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04 (2).jpeg",
    description: "مهارات التعامل مع الناس",
    categoryId: 'personal-development'
  },
  {
    id: 40,
    title: "قوة الشخصية القيادية",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04 (3).jpeg",
    description: "تطوير شخصيتك القيادية",
    categoryId: 'personal-development'
  },
  {
    id: 41,
    title: "فن التحدث أمام الجمهور",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04 (4).jpeg",
    description: "مهارات الخطابة العامة",
    categoryId: 'personal-development'
  },
  {
    id: 42,
    title: "قوة الإقناع الذاتي",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04 (5).jpeg",
    description: "كيف تقنع نفسك",
    categoryId: 'personal-development'
  },
  {
    id: 43,
    title: "فن إدارة الوقت",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04 (6).jpeg",
    description: "استثمار وقتك بحكمة",
    categoryId: 'personal-development'
  },
  {
    id: 44,
    title: "قوة التفكير الإبداعي",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04 (7).jpeg",
    description: "تنمية التفكير الإبداعي",
    categoryId: 'personal-development'
  },
  {
    id: 45,
    title: "فن القيادة الذاتية",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04 (8).jpeg",
    description: "قيادة نفسك نحو النجاح",
    categoryId: 'personal-development'
  },
  {
    id: 46,
    title: "قوة الإرادة الذاتية",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04.jpeg",
    description: "تقوية إرادتك الشخصية",
    categoryId: 'personal-development'
  },
  {
    id: 47,
    title: "فن التخطيط للمستقبل",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.05 (1).jpeg",
    description: "التخطيط لمستقبل ناجح",
    categoryId: 'personal-development'
  },
  {
    id: 48,
    title: "قوة التحفيز الذاتي",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.05 (2).jpeg",
    description: "تحفيز نفسك للتميز",
    categoryId: 'personal-development'
  },
  {
    id: 49,
    title: "فن إدارة العلاقات",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.05 (3).jpeg",
    description: "بناء علاقات ناجحة",
    categoryId: 'personal-development'
  },
  {
    id: 50,
    title: "قوة الشخصية المؤثرة",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.05 (4).jpeg",
    description: "كيف تكون شخصية مؤثرة",
    categoryId: 'personal-development'
  },
  {
    id: 51,
    title: "فن التواصل الفعال",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.05 (5).jpeg",
    description: "مهارات التواصل المتقدمة",
    categoryId: 'personal-development'
  },
  {
    id: 52,
    title: "قوة التغيير الذاتي",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.05 (6).jpeg",
    description: "تغيير نفسك للأفضل",
    categoryId: 'personal-development'
  },
  {
    id: 53,
    title: "فن الإدارة الناجحة",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.05 (7).jpeg",
    description: "أسرار الإدارة الناجحة",
    categoryId: 'business'
  },
  {
    id: 54,
    title: "قوة الثقة الذاتية",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.05.jpeg",
    description: "بناء ثقتك بنفسك",
    categoryId: 'personal-development'
  },
  {
    id: 55,
    title: "فن التخطيط الاستراتيجي",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.06 (1).jpeg",
    description: "التخطيط الاستراتيجي للنجاح",
    categoryId: 'business'
  },
  {
    id: 56,
    title: "قوة الإنجاز الذاتي",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.06 (2).jpeg",
    description: "تحقيق إنجازاتك الشخصية",
    categoryId: 'personal-development'
  },
  {
    id: 57,
    title: "فن القيادة الإبداعية",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.06 (3).jpeg",
    description: "القيادة بإبداع وابتكار",
    categoryId: 'business'
  },
  {
    id: 58,
    title: "قوة التأثير الشخصي",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.06 (4).jpeg",
    description: "تأثيرك الشخصي على الآخرين",
    categoryId: 'personal-development'
  },
  {
    id: 59,
    title: "فن التواصل القيادي",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.06 (5).jpeg",
    description: "التواصل القيادي الفعال",
    categoryId: 'business'
  },
  {
    id: 60,
    title: "قوة الشخصية القوية",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.06 (6).jpeg",
    description: "بناء شخصية قوية ومؤثرة",
    categoryId: 'personal-development'
  },
  {
    id: 61,
    title: "فن إدارة الذات",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.06.jpeg",
    description: "إدارة الذات باحترافية",
    categoryId: 'personal-development'
  },
  {
    id: 62,
    title: "قوة النجاح الشخصي",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.07.jpeg",
    description: "أسرار النجاح الشخصي",
    categoryId: 'personal-development'
  }
];
