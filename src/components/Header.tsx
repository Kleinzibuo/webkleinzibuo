import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/70f20309841db2f6a880ceaa931bc27c2fb8bcd0.png';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="KleinZibuo" className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-[#FF6B35]' : 'text-gray-600 hover:text-[#FF6B35]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('features')}
              className={`transition-colors ${
                currentPage === 'features' ? 'text-[#FF6B35]' : 'text-gray-600 hover:text-[#FF6B35]'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => window.open('https://kleinzibuo.com', '_blank')}
              className="text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => window.open('https://kleinzibuo.com', '_blank')}
              className="text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              About
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onNavigate('demo')}
              className="px-6 py-3 bg-[#FF6B35] text-white rounded-full hover:bg-[#FF5520] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('features');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => window.open('https://kleinzibuo.com', '_blank')}
              className="block w-full text-left py-2 text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => window.open('https://kleinzibuo.com', '_blank')}
              className="block w-full text-left py-2 text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate('demo');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-6 bg-[#FF6B35] text-white rounded-full hover:bg-[#FF5520] transition-all"
            >
              Request a Demo
            </button>
          </div>
        )}
      </div>
    </header>
  );
}