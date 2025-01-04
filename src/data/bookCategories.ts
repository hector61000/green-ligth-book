export type BookCategory = {
  id: string;
  name: string;
};

export const bookCategories: BookCategory[] = [
  { id: 'technology', name: 'التكنولوجيا والبرمجة' },
  { id: 'personal-development', name: 'التطوير الذاتي' },
  { id: 'nature', name: 'الطبيعة والبيئة' },
  { id: 'business', name: 'إدارة الأعمال' }
];