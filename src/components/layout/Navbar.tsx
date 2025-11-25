import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" aria-label="Ceylon Choice">
          <img src="/logo/logo_red.svg" alt="Ceylon Choice" className="h-10" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => `text-sm ${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => `text-sm ${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Products</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-sm ${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Contact</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-sm ${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>About</NavLink>
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
        <Button aria-label="Toggle menu" className="md:hidden" variant="ghost" size="icon" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3">
            <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Home</NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Products</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Contact Us</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>About Us</NavLink>
            <Button asChild onClick={() => setOpen(false)}>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
