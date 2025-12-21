import { Mail, Phone, MapPin } from 'lucide-react';
import { contact } from '../../data/content';

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <a href={`mailto:${contact.email}`} className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-[color:var(--color-primary)] text-white rounded-md">
          <Mail size={18} />
        </div>
        <div>
          <div className="font-semibold">Email</div>
          <div className="text-sm text-text-light">{contact.email}</div>
        </div>
      </a>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-[color:var(--color-primary)] text-white rounded-md">
          <Phone size={18} />
        </div>
        <div>
          <div className="font-semibold">Phone No</div>
          <div className="text-sm text-text-light mt-1 space-y-1">
            <div className="flex items-center gap-3">
              <span className="w-16 font-medium text-sm">LK</span>
              <a href={`tel:${contact.phone_lk.replace(/\s+/g, '')}`} className="truncate hover:underline">{contact.phone_lk}</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-16 font-medium text-sm">UK</span>
              <a href={`tel:${contact.phone_uk.replace(/\s+/g, '')}`} className="truncate hover:underline">{contact.phone_uk}</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-16 font-medium text-sm">France</span>
              <a href={`tel:${contact.phone_fr.replace(/\s+/g, '')}`} className="truncate hover:underline">{contact.phone_fr}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-[color:var(--color-primary)] text-white rounded-md">
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