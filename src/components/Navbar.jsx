// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { useTheme } from '../hooks/useTheme.js';
import { translations } from '../data/translations.js';
import { FaSun, FaMoon, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import logo from '../logo/logo.jpeg';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Set active section based on current route
    if (location.pathname === '/') {
      setActiveSection('home');
    } else if (location.pathname === '/about') {
      setActiveSection('about');
    } else if (location.pathname === '/services') {
      setActiveSection('services');
    } else if (location.pathname === '/contact') {
      setActiveSection('contact');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavigation = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Handle direct routes
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
      return;
    }

    // Handle same-page anchor links (on home page)
    const targetId = href.replace('/#', '').replace('#', '');
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const t = (key) => translations[language][key] || key;

  const navItems = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/services', label: 'services' },
    { href: '/contact', label: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-xl shadow-2xl border-b' 
        : 'bg-transparent'
    }`} style={scrolled ? {backgroundColor: 'rgba(17, 17, 14, 0.95)', boxShadow: '0 25px 50px -12px rgba(17, 17, 14, 0.5)', borderColor: 'rgba(52, 45, 36, 0.5)'} : {}}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-2 group shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logo}
              alt="Noortomark logo"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg shadow-lg object-cover"
            />
            <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-white to-stone-200 bg-clip-text text-transparent transition-all duration-300" style={{background: 'linear-gradient(to right, #ffffff, #e2e8f0)', backgroundClip: 'text'}}>
              Noortomark
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 backdrop-blur-sm rounded-2xl p-1" style={{backgroundColor: 'rgba(52, 45, 36, 0.5)', border: '1px solid rgba(124, 108, 91, 0.5)'}}>
            {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`relative px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer ${
                    activeSection === item.label.replace('#', '')
                      ? 'text-white border shadow-lg'
                      : 'text-stone-300 hover:text-white'
                  }`}
                  style={activeSection === item.label.replace('#', '') ? {
                    background: 'linear-gradient(to right, rgba(189, 145, 90, 0.2), rgba(125, 90, 52, 0.2))',
                    borderColor: 'rgba(189, 145, 90, 0.3)',
                    boxShadow: '0 10px 15px -3px rgba(189, 145, 90, 0.1)'
                  } : {}}
                  onMouseEnter={(e) => activeSection !== item.label.replace('#', '') && (e.target.style.backgroundColor = 'rgba(124, 108, 91, 0.5)')}
                  onMouseLeave={(e) => activeSection !== item.label.replace('#', '') && (e.target.style.backgroundColor = 'transparent')}
                >
                  {t(item.label)}
                  {activeSection === item.label.replace('#', '') && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full" style={{backgroundColor: '#bd915a'}}></div>
                  )}
                </a>
              
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-2 shrink-0">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 backdrop-blur-sm rounded-xl p-1.5" style={{backgroundColor: 'rgba(52, 45, 36, 0.5)', border: '1px solid rgba(124, 108, 91, 0.5)'}}>
              <FaGlobe className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <div className="flex rounded-lg p-0.5" style={{backgroundColor: 'rgba(124, 108, 91, 0.5)'}}>
                {['fr', 'en', 'ar'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`relative cursor-pointer px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-300 ${
                      language === lang
                        ? 'text-white shadow-lg'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                    style={language === lang ? {
                      background: 'linear-gradient(to right, #bd915a, #7d5a34)',
                      boxShadow: '0 10px 15px -3px rgba(189, 145, 90, 0.25)'
                    } : {}}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div className="w-px h-5 shrink-0" style={{backgroundColor: 'rgba(124, 108, 91, 0.5)'}}></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group cursor-pointer p-2 backdrop-blur-sm rounded-xl text-stone-300 hover:text-white transition-all duration-300"
              style={{backgroundColor: 'rgba(52, 45, 36, 0.5)', border: '1px solid rgba(124, 108, 91, 0.5)'}}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(189, 145, 90, 0.3)'; e.currentTarget.style.backgroundColor = 'rgba(189, 145, 90, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(124, 108, 91, 0.5)'; e.currentTarget.style.backgroundColor = 'rgba(52, 45, 36, 0.5)'; }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FaSun className="w-4 h-4 group-hover:scale-110 transition-transform cursor-pointer duration-300" />
              ) : (
                <FaMoon className="w-4 h-4 group-hover:scale-110 transition-transform cursor-pointer duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden group p-2.5 backdrop-blur-sm rounded-lg text-stone-300 hover:text-white transition-all duration-300 shrink-0"
            style={{backgroundColor: 'rgba(52, 45, 36, 0.5)', border: '1px solid rgba(124, 108, 91, 0.5)'}}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(189, 145, 90, 0.3)'; e.currentTarget.style.backgroundColor = 'rgba(189, 145, 90, 0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(124, 108, 91, 0.5)'; e.currentTarget.style.backgroundColor = 'rgba(52, 45, 36, 0.5)'; }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <FaBars className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu amélioré */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in pb-4">
            <div className="mt-4 backdrop-blur-xl rounded-2xl overflow-hidden" style={{backgroundColor: 'rgba(52, 45, 36, 0.95)', border: '1px solid rgba(124, 108, 91, 0.5)', boxShadow: '0 25px 50px -12px rgba(17, 17, 14, 0.5)'}}>
              {/* Navigation Items */}
              <div className="flex flex-col space-y-1 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 cursor-pointer ${
                      activeSection === item.label.replace('#', '')
                        ? 'text-white border shadow-lg'
                        : 'text-stone-300 hover:text-white'
                    }`}
                    style={activeSection === item.label.replace('#', '') ? {
                      background: 'linear-gradient(to right, rgba(189, 145, 90, 0.2), rgba(125, 90, 52, 0.2))',
                      borderColor: 'rgba(189, 145, 90, 0.3)',
                      boxShadow: '0 10px 15px -3px rgba(189, 145, 90, 0.1)'
                    } : {}}
                    onMouseEnter={(e) => activeSection !== item.label.replace('#', '') && (e.currentTarget.style.backgroundColor = 'rgba(124, 108, 91, 0.5)')}
                    onMouseLeave={(e) => activeSection !== item.label.replace('#', '') && (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{backgroundColor: activeSection === item.label.replace('#', '') ? '#bd915a' : '#64748b'}}></div>
                    <span>{t(item.label)}</span>
                  </a>
                ))}
              </div>

              {/* Controls Mobile */}
              <div className="px-4 py-4 mt-2" style={{borderTop: '1px solid rgba(124, 108, 91, 0.5)'}}>
                <div className="flex items-center justify-between gap-3">
                  {/* Language Toggle Mobile */}
                  <div className="flex items-center space-x-2 flex-1">
                    <FaGlobe className="w-4 h-4 text-stone-400 shrink-0" />
                    <div className="flex rounded-lg p-1 flex-1" style={{backgroundColor: 'rgba(124, 108, 91, 0.5)'}}>
                      {['fr', 'en', 'ar'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`flex-1 px-4 py-2 text-sm font-semibold rounded transition-all duration-300 ${
                            language === lang
                              ? 'text-white shadow-lg'
                              : 'text-stone-400 hover:text-stone-200'
                          }`}
                          style={language === lang ? {
                            background: 'linear-gradient(to right, #bd915a, #7d5a34)',
                            boxShadow: '0 10px 15px -3px rgba(189, 145, 90, 0.25)'
                          } : {}}
                        >
                          {lang.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theme Toggle Mobile */}
                  <button
                    onClick={toggleTheme}
                    className="p-3 rounded-lg text-stone-300 hover:text-white transition-all duration-300 shrink-0"
                    style={{backgroundColor: 'rgba(124, 108, 91, 0.5)', border: '1px solid rgba(100, 116, 139, 0.5)'}}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(189, 145, 90, 0.3)'; e.currentTarget.style.backgroundColor = 'rgba(189, 145, 90, 0.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(100, 116, 139, 0.5)'; e.currentTarget.style.backgroundColor = 'rgba(124, 108, 91, 0.5)'; }}
                    aria-label="Toggle theme"
                  >
                    {isDark ? (
                      <FaSun className="w-5 h-5" />
                    ) : (
                      <FaMoon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;