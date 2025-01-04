import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

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

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    onSelect(id, price, checked);
  };

  return (
    <div className="bg-card rounded-lg shadow-lg p-4 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold mb-2 rtl">{title}</h3>
      <p className="text-gray-600 mb-2 rtl">{price} جنيه</p>
      <div className="flex items-center justify-between mt-auto">
        <Button variant="outline" onClick={() => alert(description)} className="rtl">
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
  );
}