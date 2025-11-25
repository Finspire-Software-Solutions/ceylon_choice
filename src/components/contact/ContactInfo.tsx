import { Mail, Phone, MapPin } from 'lucide-react';
import { contact } from '../../data/content';

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <a href={`mailto:${contact.email}`} className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-(--color-primary) text-white rounded-md">
          <Mail size={18} />
        </div>
        <div>
          <div className="font-semibold">Email</div>
          <div className="text-sm text-text-light">{contact.email}</div>
        </div>
      </a>

      <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-(--color-primary) text-white rounded-md">
          <Phone size={18} />
        </div>
        <div>
          <div className="font-semibold">Phone No</div>
          <div className="text-sm text-text-light">{contact.phone}</div>
        </div>
      </a>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-(--color-primary) text-white rounded-md">
          <MapPin size={18} />
        </div>
        <div>
          <div className="font-semibold">Address</div>
          <div className="text-sm text-text-light">Ambalkulam, Kilinochchi</div>
        </div>
      </div>
    </div>
  );
}