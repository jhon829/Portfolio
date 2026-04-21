import { useState, useEffect } from 'react';
import './SpigenNavbar.css';

const SpigenNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { label: 'Cover', href: '#cover' },
    { label: 'Summary', href: '#summary' },
    { label: 'Project', href: '#project' },
    { label: 'Strength', href: '#strength' },
  ];

  return (
    <nav className={`spigen-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="spigen-navbar-container">
        <span className="spigen-navbar-logo">김동년 포트폴리오</span>
        <ul className="spigen-navbar-menu">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button
          className={`spigen-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className="spigen-hamburger-line" />
          <span className="spigen-hamburger-line" />
          <span className="spigen-hamburger-line" />
        </button>
      </div>

      <div className={`spigen-mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`spigen-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="spigen-mobile-menu-header">
          <span className="spigen-mobile-menu-title">Menu</span>
        </div>
        <ul className="spigen-mobile-menu-list">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                <span className="spigen-mobile-menu-num">{'0' + (index + 1)}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="spigen-mobile-menu-bottom">
          <span className="spigen-mobile-menu-copy">김동년 Portfolio</span>
        </div>
      </div>
    </nav>
  );
};

export default SpigenNavbar;
