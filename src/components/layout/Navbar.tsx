import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-[color:var(--color-primary)]">Ceylon Choice</Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => `text-sm ${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => `text-sm ${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Products</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-sm ${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Contact Us</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-sm ${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>About Us</NavLink>
        </nav>
        <div className="hidden md:block">
          <Link to="/contact" className="px-4 py-2 rounded bg-[color:var(--color-primary)] text-white">Contact Us</Link>
        </div>
        <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3">
            <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Home</NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Products</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>Contact Us</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? 'text-[color:var(--color-primary)] font-semibold' : 'text-gray-700'}`}>About Us</NavLink>
            <Link to="/contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded bg-[color:var(--color-primary)] text-white text-center">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}