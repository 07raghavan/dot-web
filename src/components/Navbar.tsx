import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Mentors', href: '/mentors' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set theme on mount based on localStorage or system preference
    const userTheme = localStorage.getItem('theme');
    if (userTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (userTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      // System preference fallback
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    }
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'glass py-2 border-b border-white/30 shadow-lg'
          : 'glass py-3'
      )}
    >
      <nav className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/dot-logo.png" 
              alt="D.O.T Logo" 
              className="w-20 h-20 object-contain brightness-125 filter drop-shadow-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
              D.O.T
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "transition-colors font-medium",
                  location.pathname === item.href
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
                    : "text-white/70 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-600"
                )}
              >
                {item.label}
              </Link>
            ))}
            {/* Theme Toggle Button */}
            <div className="flex items-center space-x-2">
              <Sun size={20} className="text-yellow-500" />
              <button
                onClick={toggleTheme}
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isDark ? "bg-primary" : "bg-gray-200"
                )}
              >
                <span
                  className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                    isDark ? "translate-x-6" : "translate-x-1"
                  )}
                />
              </button>
              <Moon size={20} className="text-gray-800 dark:text-gray-200" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "transition-colors font-medium",
                    location.pathname === item.href
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
                      : "text-white/70 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-600"
                  )}
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              {/* Theme Toggle Button for Mobile */}
              <div className="flex items-center space-x-2 mt-4">
                <Sun size={20} className="text-yellow-500" />
                <button
                  onClick={toggleTheme}
                  className={cn(
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isDark ? "bg-primary" : "bg-gray-200"
                  )}
                >
                  <span
                    className={cn(
                      "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                      isDark ? "translate-x-6" : "translate-x-1"
                    )}
                  />
                </button>
                <Moon size={20} className="text-gray-800 dark:text-gray-200" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
