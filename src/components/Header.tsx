import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({
  onNavigate,
  currentPage,
}: Readonly<HeaderProps>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="w-[15rem] h-[2rem] flex items-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src="/kleinzibu_logo.png"
              className="w-full h-auto"
              alt="KleinZibuo"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate("home")}
              className={`transition-colors cursor-pointer ${
                currentPage === "home"
                  ? "text-[#E82D86]"
                  : "text-gray-600 hover:text-[#E82D86]"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("features")}
              className={`transition-colors cursor-pointer ${
                currentPage === "features"
                  ? "text-[#E82D86]"
                  : "text-gray-600 hover:text-[#E82D86]"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => onNavigate("about")}
              className={`transition-colors cursor-pointer ${
                currentPage === "about"
                  ? "text-[#E82D86]"
                  : "text-gray-600 hover:text-[#E82D86]"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => onNavigate("demo")}
              className="px-6 py-2 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F76] cursor-pointer transition-all duration-300"
            >
              Request a Demo
            </button>
          </nav>

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
                onNavigate("home");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-600 hover:text-[#E82D86] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate("features");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-600 hover:text-[#E82D86] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => {
                onNavigate("about");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-600 hover:text-[#E82D86] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => {
                onNavigate("demo");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-6 bg-[#E82D86] text-white rounded-full hover:bg-[#D01F76] transition-all"
            >
              Request a Demo
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
