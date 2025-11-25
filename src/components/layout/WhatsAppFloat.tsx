import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon from react-icons
import { contact } from '@/data/content';

export default function WhatsAppFloat() {
  const href = `${contact.whatsappLink}?text=${encodeURIComponent('Hello! I would like to inquire about your products.')}`;
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      // Use w-14 h-14 (or similar size) for a standard floating button
      className="fixed bottom-5 right-5 z-50 rounded-full w-14 h-14 bg-[#25D366] text-white shadow-lg hover:shadow-xl transition animate-bounce flex items-center justify-center"
    >
      {/* FaWhatsapp provides the actual, recognizable logo */}
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}