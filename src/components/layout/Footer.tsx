import { Mail, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, contact, social, footerContent } from '../../data/content';

export default function Footer() {
  return (
    <footer className="mt-16">
     
      <div className="bg-[color:var(--color-dark-bg)] text-white">
        <div className="container mt-10 grid gap-12 py-12 md:grid-cols-3 items-start">
         
          <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
              <img src="/logo/logo_white.svg" alt={company.name} className="h-12" />
              <div className="mt-1 text-sm uppercase tracking-wider text-[0.85rem]">{company.name}</div>
              <div className="text-sm">{company.address}</div>
              <div className="mt-3 text-sm flex flex-col gap-2 items-center md:items-start">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 flex items-center justify-center text-white rounded-md">
                    <Phone size={14} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="w-12 font-medium text-sm">LK</span>
                      <a href={`tel:${contact.phone_lk.replace(/\s+/g, '')}`} className="hover:underline truncate">{contact.phone_lk}</a>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-12 font-medium text-sm">UK</span>
                      <a href={`tel:${contact.phone_uk.replace(/\s+/g, '')}`} className="hover:underline truncate">{contact.phone_uk}</a>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-12 font-medium text-sm">FR</span>
                      <a href={`tel:${contact.phone_fr.replace(/\s+/g, '')}`} className="hover:underline truncate">{contact.phone_fr}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2"><Mail size={16} /> <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></div>
              </div>
          </div>

        
          <div className="text-center">
            <div className="text-xl font-semibold">Stay Connected With Us</div>
            <div className="mt-4 flex justify-center items-center gap-4">
              <a href={social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded flex items-center justify-center bg-white text-[color:var(--color-dark-bg)] hover:scale-105 hover:shadow-lg transform transition">
                <MessageCircle size={18} /></a>
              <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded flex items-center justify-center bg-white text-[color:var(--color-dark-bg)] hover:scale-105 hover:shadow-lg transform transition">
                <Instagram size={18} /></a>
              <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded flex items-center justify-center bg-white text-[color:var(--color-dark-bg)] hover:scale-105 hover:shadow-lg transform transition">
                <Facebook size={18} /></a>
            </div>

            {/* <form className="mt-6 flex justify-center">
              <input type="email" placeholder="Type your email..." className="w-[320px] max-w-full px-4 py-2 rounded-l text-gray-700 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-light)] transition" />
              <button type="submit" className="px-4 py-2 rounded-r bg-[color:var(--color-secondary)] hover:bg-[color:var(--color-secondary)]/90 transition">Send</button>
            </form> */}
          </div>

         
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <div className="text-xl font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-3">
              {footerContent.quickLinks.map((q) => (
                <li key={q.to}><Link to={q.to} className="hover:underline">{q.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 text-center flex flex-col items-center md:items-start">
          <div className="container py-4 text-sm">© {new Date().getFullYear()} Ceylon Choice</div>
        </div>
      </div>
    </footer>
  );
}