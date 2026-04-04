import { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isBlue, setIsBlue] = useState(false);

  const toggleTheme = () => {
    setIsBlue(!isBlue);
    document.documentElement.classList.toggle('theme-blue');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Jobs', href: '#jobs' },
    { label: 'Employers', href: '#employers' },
    { label: 'Candidates', href: '#candidates' },
    { label: 'Pages', href: '#pages' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-primary-foreground font-black text-lg">JS</span>
            </div>
            <span className="text-2xl font-extrabold text-foreground tracking-tight">
              Jobber
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-base font-semibold hover:text-primary">
              Login
            </Button>
            <Button className="text-base font-semibold px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              Sign Up
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-in slide-in-from-top-2 duration-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4 pt-4 border-t border-border">
              <Button variant="outline" className="flex-1 text-base font-semibold">Login</Button>
              <Button className="flex-1 text-base font-semibold bg-primary text-primary-foreground rounded-full">Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
