import { useState } from "react";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrderForm } from "@/components/OrderForm";

const books = [
  {
    id: 1,
    title: "كتاب 1",
    price: 150,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.58 (1).jpeg",
    description: "وصف الكتاب الأول"
  },
  {
    id: 2,
    title: "كتاب 2",
    price: 120,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.58.jpeg",
    description: "وصف الكتاب الثاني"
  },
  {
    id: 3,
    title: "كتاب 3",
    price: 180,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (1).jpeg",
    description: "وصف الكتاب الثالث"
  },
  {
    id: 4,
    title: "كتاب 4",
    price: 200,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (2).jpeg",
    description: "وصف الكتاب الرابع"
  },
  {
    id: 5,
    title: "كتاب 5",
    price: 160,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (3).jpeg",
    description: "وصف الكتاب الخامس"
  },
  {
    id: 6,
    title: "كتاب 6",
    price: 140,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59 (4).jpeg",
    description: "وصف الكتاب السادس"
  },
  // ... Adding more books with the provided images
  {
    id: 7,
    title: "كتاب 7",
    price: 170,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.56.59.jpeg",
    description: "وصف الكتاب السابع"
  },
  {
    id: 8,
    title: "كتاب 8",
    price: 190,
    image: "/lovable-uploads/WhatsApp Image 2025-01-03 at 18.57.00 (1).jpeg",
    description: "وصف الكتاب الثامن"
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
        <span className="text-[#224422]">جرين</span>
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
          <span className="text-[#224422]">جرين</span>
          <span className="text-[#F97316]">لايت</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;