import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-orange-500" />
            <span className="text-white text-xl font-bold">AM's Welding Shop</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-zinc-300 hover:text-orange-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-zinc-300 hover:text-orange-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition-colors w-full text-left"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
