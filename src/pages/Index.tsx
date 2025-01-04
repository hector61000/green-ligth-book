import { useState } from "react";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrderForm } from "@/components/OrderForm";

const books = [
  {
    id: 1,
    title: "فن اتخاذ القرار",
    author: "المؤلف الأول",
    price: 150,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.58 (1).jpeg",
    description: "كتاب يساعدك على اتخاذ القرارات الصحيحة في حياتك"
  },
  {
    id: 2,
    title: "قوة العادات",
    author: "المؤلف الثاني",
    price: 120,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.58.jpeg",
    description: "كيف تبني عادات إيجابية وتتخلص من العادات السلبية"
  },
  {
    id: 3,
    title: "فن الإقناع",
    author: "المؤلف الثالث",
    price: 180,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (1).jpeg",
    description: "أساليب وتقنيات الإقناع الفعال"
  },
  {
    id: 4,
    title: "الذكاء العاطفي",
    author: "المؤلف الرابع",
    price: 200,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (2).jpeg",
    description: "كيف تطور ذكاءك العاطفي"
  },
  {
    id: 5,
    title: "قوة التركيز",
    author: "المؤلف الخامس",
    price: 160,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (3).jpeg",
    description: "استراتيجيات تحسين التركيز والإنتاجية"
  },
  {
    id: 6,
    title: "فن القيادة",
    author: "المؤلف السادس",
    price: 140,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (4).jpeg",
    description: "مهارات القيادة الفعالة"
  },
  {
    id: 7,
    title: "قوة الثقة بالنفس",
    author: "المؤلف السابع",
    price: 170,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.00 (1).jpeg",
    description: "بناء الثقة بالنفس وتعزيزها"
  },
  {
    id: 8,
    title: "فن التفاوض",
    author: "المؤلف الثامن",
    price: 190,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.00 (2).jpeg",
    description: "استراتيجيات التفاوض الناجح"
  },
  {
    id: 9,
    title: "قوة التحفيز",
    author: "المؤلف التاسع",
    price: 130,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02 (7).jpeg",
    description: "كيف تحفز نفسك والآخرين"
  },
  {
    id: 10,
    title: "فن إدارة الوقت",
    author: "المؤلف العاشر",
    price: 145,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.02.jpeg",
    description: "تنظيم الوقت وزيادة الإنتاجية"
  },
  {
    id: 11,
    title: "قوة الإرادة",
    author: "المؤلف الحادي عشر",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (1).jpeg",
    description: "تقوية الإرادة وتحقيق الأهداف"
  },
  {
    id: 12,
    title: "فن التواصل",
    author: "المؤلف الثاني عشر",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (2).jpeg",
    description: "مهارات التواصل الفعال"
  },
  {
    id: 13,
    title: "قوة العقل الباطن",
    author: "المؤلف الثالث عشر",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (3).jpeg",
    description: "تسخير قوة العقل الباطن"
  },
  {
    id: 14,
    title: "فن الإدارة",
    author: "المؤلف الرابع عشر",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (4).jpeg",
    description: "أساسيات الإدارة الناجحة"
  },
  {
    id: 15,
    title: "قوة التخطيط",
    author: "المؤلف الخامس عشر",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (5).jpeg",
    description: "استراتيجيات التخطيط الفعال"
  },
  {
    id: 16,
    title: "فن التسويق",
    author: "المؤلف السادس عشر",
    price: 175,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (6).jpeg",
    description: "أساسيات التسويق الناجح"
  },
  {
    id: 17,
    title: "قوة الإبداع",
    author: "المؤلف السابع عشر",
    price: 185,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (7).jpeg",
    description: "تنمية التفكير الإبداعي"
  },
  {
    id: 18,
    title: "فن المبيعات",
    author: "المؤلف الثامن عشر",
    price: 195,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03 (8).jpeg",
    description: "استراتيجيات البيع الناجح"
  },
  {
    id: 19,
    title: "قوة التغيير",
    author: "المؤلف التاسع عشر",
    price: 155,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.03.jpeg",
    description: "كيف تحدث التغيير في حياتك"
  },
  {
    id: 20,
    title: "فن النجاح",
    author: "المؤلف العشرون",
    price: 165,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.04 (1).jpeg",
    description: "أسرار النجاح والتميز"
  }
];

const Index = () => {
  const [total, setTotal] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookSelect = (id: number, price: number, selected: boolean) => {
    setTotal(prev => selected ? prev + price : prev - price);
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen relative">
      <h1 className="text-4xl font-bold mb-8 rtl">
        <span className="text-[#224422]">جرين </span>
        <span className="text-[#F97316]">لايت</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {books.map((book) => (
          <BookCard
            key={book.id}
            {...book}
            onSelect={handleBookSelect}
          />
        ))}
      </div>
      
      <div className="fixed bottom-20 left-4 bg-[#F97316] rounded-lg shadow-lg p-4 rtl text-white">
        <div className="flex flex-col items-start space-y-2">
          <p className="text-lg font-bold">الإجمالي: {total} جنيه</p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>اطلب الآن</Button>
            </DialogTrigger>
            <DialogContent>
              <OrderForm total={total} onClose={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 text-center border-t">
        <p className="text-sm text-gray-600 rtl">
          جميع الحقوق محفوظه ل
          <span className="text-[#224422]">جرين </span>
          <span className="text-[#F97316]">لايت</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
