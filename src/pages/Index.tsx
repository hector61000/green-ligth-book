import { useState } from "react";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrderForm } from "@/components/OrderForm";
import { books } from "@/data/books";

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