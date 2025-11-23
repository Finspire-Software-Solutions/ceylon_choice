import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, contact, social, footerContent } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-dark-bg)] text-white mt-16">
      <div className="container grid gap-12 py-12 md:grid-cols-3">
        <div>
          <div className="text-2xl font-bold">Ceylon Choice</div>
          <div className="mt-3 text-sm">{company.address}</div>
          <div className="mt-4 flex items-center gap-2"><Mail size={18} /> <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></div>
          <div className="mt-2 flex items-center gap-2"><Phone size={18} /> <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="hover:underline">{contact.phone}</a></div>
          <div className="mt-2 flex items-center gap-2"><MapPin size={18} /> <span>Ambalkulam, Kilinochchi</span></div>
          <div className="mt-4 flex items-center gap-4">
            <a href={social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
            <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Stay Connected</div>
          <form className="mt-4 flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded text-black" />
            <button type="submit" className="px-4 py-2 rounded bg-[color:var(--color-primary)]">Subscribe</button>
          </form>
        </div>
        <div>
          <div className="text-xl font-semibold">Quick Links</div>
          <ul className="mt-4 space-y-2">
            {footerContent.quickLinks.map((q) => (
              <li key={q.to}><Link to={q.to} className="hover:underline">{q.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="container py-4 text-sm">© {new Date().getFullYear()} Ceylon Choice</div>
      </div>
    </footer>
  );
}