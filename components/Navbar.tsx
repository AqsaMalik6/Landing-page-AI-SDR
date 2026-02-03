'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Solutions', href: '/#benefits' },
    { name: 'Our Technology', href: '/#technology' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Book a Demo', href: '/book-demo' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">AI<span className="text-blue-500">SDR</span></span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/login" className="flex items-center gap-2 text-gray-400 font-semibold hover:text-white transition-colors group">
              <LogIn className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Sign In
            </Link>
            <Link href="/signup" className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#030712] border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-xl font-bold text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 space-y-4 border-t border-white/10">
                <Link href="/login" className="w-full flex items-center justify-center gap-2 py-4 text-white font-bold border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                  <LogIn className="w-5 h-5" />
                  Sign In
                </Link>
                <Link href="/signup" className="w-full py-4 bg-white text-black rounded-2xl font-black text-lg hover:bg-blue-50 transition-colors text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
