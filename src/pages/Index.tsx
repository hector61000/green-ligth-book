import { useState } from "react";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrderForm } from "@/components/OrderForm";

const books = [
  {
    id: 1,
    title: "مصيدة التشتت",
    price: 150,
    image: "/lovable-uploads/2d6aeeca-cc91-4e01-9a23-7bd1b7cf0221.png",
    description: "كيف تركز في فوضى العالم الرقمي"
  },
  {
    id: 2,
    title: "قواعد الحياة",
    price: 120,
    image: "/lovable-uploads/18a611e7-e4ec-46e3-a5b0-7ab9c3990492.png",
    description: "قواعد العمل الأكثر مبيعا على مستوى العالم"
  },
  {
    id: 3,
    title: "فن الحياة البسيطة",
    price: 180,
    image: "/lovable-uploads/e6582680-d38a-4cc9-82a4-57d41679f0fa.png",
    description: "100 عادة يومية لحياة أكثر هدوءا وسعادة"
  },
  {
    id: 4,
    title: "قوة الفشل",
    price: 200,
    image: "/lovable-uploads/a954f23f-bd91-44ca-8ffa-b2152ac0937f.png",
    description: "27 طريقة لتحويل عثرتك في الحياة إلى نجاحات ثابتة"
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
      <h1 className="text-4xl font-bold mb-8 rtl text-white">الحكمة والنجاح</h1>
      
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
          <span className="text-[#A2C837]">جرين</span>
          <span className="text-[#F97316]">لايت</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;