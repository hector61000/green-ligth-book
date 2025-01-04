import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

interface OrderFormProps {
  total: number;
  onClose: () => void;
}

export function OrderForm({ total, onClose }: OrderFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Order:%0A
Name: ${name}%0A
Phone: ${phone}%0A
WhatsApp: ${whatsapp}%0A
Total: ${total} EGP`;
    
    window.open(`https://wa.me/+201234567890?text=${message}`);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rtl bg-[#FDE1D3] p-6 rounded-lg">
      <div>
        <Input
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-white"
        />
      </div>
      <div>
        <Input
          placeholder="رقم الهاتف"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          type="tel"
          className="bg-white"
        />
      </div>
      <div>
        <Input
          placeholder="رقم الواتساب"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
          type="tel"
          className="bg-white"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="submit" className="bg-[#F97316] hover:bg-[#F97316]/90">إرسال</Button>
        <Button variant="outline" onClick={onClose} className="bg-white">
          إلغاء
        </Button>
      </div>
    </form>
  );
}