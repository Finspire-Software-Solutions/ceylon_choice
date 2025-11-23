import { Mail, Phone, MapPin } from 'lucide-react';
import { contact } from '../../data/content';

export default function ContactInfo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <a href={`mailto:${contact.email}`} className="border rounded p-4 flex items-center gap-3">
        <Mail />
        <div>
          <div className="font-semibold">Email</div>
          <div className="text-sm text-gray-600">{contact.email}</div>
        </div>
      </a>
      <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="border rounded p-4 flex items-center gap-3">
        <Phone />
        <div>
          <div className="font-semibold">Phone</div>
          <div className="text-sm text-gray-600">{contact.phone}</div>
        </div>
      </a>
      <div className="border rounded p-4 flex items-center gap-3">
        <MapPin />
        <div>
          <div className="font-semibold">Address</div>
          <div className="text-sm text-gray-600">Ambalkulam, Kilinochchi</div>
        </div>
      </div>
    </div>
  );
}