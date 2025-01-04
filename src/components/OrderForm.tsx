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
    <form onSubmit={handleSubmit} className="space-y-4 rtl">
      <div>
        <Input
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          placeholder="رقم الهاتف"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          type="tel"
        />
      </div>
      <div>
        <Input
          placeholder="رقم الواتساب"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
          type="tel"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="submit">إرسال</Button>
        <Button variant="outline" onClick={onClose}>
          إلغاء
        </Button>
      </div>
    </form>
  );
}