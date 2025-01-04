import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface BookProps {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  onSelect: (id: number, price: number, selected: boolean) => void;
}

export function BookCard({ id, title, price, image, description, onSelect }: BookProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    onSelect(id, price, checked);
  };

  return (
    <>
      <div className="bg-card rounded-lg shadow-lg p-4 flex flex-col h-full border-2 border-[#F97316]">
        <div className="aspect-[3/4] w-full mb-4">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <h3 className="text-xl font-bold mb-2 rtl text-white">{title}</h3>
        <p className="text-gray-200 mb-4 rtl">{price} جنيه</p>
        <div className="flex items-center justify-between mt-auto">
          <Button 
            variant="outline" 
            onClick={() => setShowDetails(true)} 
            className="rtl text-white hover:text-white"
          >
            عرض التفاصيل
          </Button>
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`book-${id}`}
              checked={isChecked}
              onCheckedChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="rtl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold mb-2">{title}</DialogTitle>
            <DialogDescription className="text-base">
              {description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}