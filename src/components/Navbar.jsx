import { useState, useEffect } from 'react';
import logoWhite from '../assets/Fexsa_Logo_White.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy for active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoWhite} alt="FEXSA" className="logo-img" />
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn btn-primary cta-button desktop-only"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#contact');
          }}
        >
          Get In Touch
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu mobile-only">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn btn-primary mobile-cta"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 15px 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(10, 15, 44, 0.95);
          backdrop-filter: blur(10px);
          padding: 10px 0;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 55px;
          transform: scale(1.4);
          transform-origin: left center;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-link {
          color: #fff;
          font-weight: 500;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          padding: 5px 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #00AEEF;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          color: #00AEEF;
        }

        .cta-button {
          padding: 10px 24px;
          font-size: 0.9rem;
        }

        .mobile-menu-toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          padding: 5px;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle span.open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-toggle span.open:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle span.open:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(10, 15, 44, 0.98);
          backdrop-filter: blur(10px);
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-nav-links .nav-link {
          display: block;
          padding: 10px 0;
          font-size: 1.1rem;
        }

        .mobile-cta {
          display: block;
          text-align: center;
          margin-top: 10px;
        }

        .desktop-only {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 1024px) {
          .nav-links {
            gap: 20px;
          }

          .nav-link {
            font-size: 0.85rem;
          }

          .cta-button {
            padding: 8px 18px;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-only {
            display: flex;
          }

          .logo-img {
            height: 45px;
          }
        }

        @media (max-width: 480px) {
          .logo-img {
            height: 35px;
          }

          .mobile-nav-links .nav-link {
            font-size: 1rem;
          }

          .mobile-menu-toggle span {
            width: 20px;
          }

          .mobile-menu {
            padding: 15px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
