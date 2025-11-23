import { MessageCircle, Instagram, Facebook } from 'lucide-react';
import { social } from '../../data/content';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a href={social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 rounded bg-gray-100"><MessageCircle /></a>
      <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded bg-gray-100"><Instagram /></a>
      <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded bg-gray-100"><Facebook /></a>
    </div>
  );
}