import { Mail, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, contact, social, footerContent } from '../../data/content';

export default function Footer() {
  return (
    <footer className="mt-16">
     
      <div className="bg-[color:var(--color-dark-bg)] text-white">
        <div className="container mt-10 grid gap-12 py-12 md:grid-cols-3 items-start">
          <div className="space-y-3">
              <img src="/logo/logo_white.svg" alt={company.name} className="h-12" />
              <div className="mt-1 text-sm uppercase tracking-wider text-[0.85rem]">{company.name}</div>
              <div className="text-sm">{company.address}</div>
              <div className="mt-3 text-sm flex flex-col gap-1">
                <div className="flex items-center gap-2"><Phone size={16} /> <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="hover:underline">{contact.phone}</a></div>
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

          <div className="md:text-right">
            <div className="text-xl font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-3">
              {footerContent.quickLinks.map((q) => (
                <li key={q.to}><Link to={q.to} className="hover:underline">{q.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20">
          <div className="container py-4 text-sm">© {new Date().getFullYear()} Ceylon Choice</div>
        </div>
      </div>
    </footer>
  );
}