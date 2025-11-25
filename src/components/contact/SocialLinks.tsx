import { MessageCircle, Instagram, Facebook } from 'lucide-react';
import { social } from '../../data/content';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a href={social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-8 h-8 flex items-center justify-center rounded border border-(--color-primary) text-(--color-primary)"><MessageCircle size={16} /></a>
      <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded border border-(--color-primary) text-(--color-primary)"><Instagram size={16} /></a>
      <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded border border-(--color-primary) text-(--color-primary)"><Facebook size={16} /></a>
    </div>
  );
}