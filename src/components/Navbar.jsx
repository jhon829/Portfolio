import { useState, useEffect } from 'react';
import { useRole } from '../context/RoleContext';
import { captureFullPage } from '../utils/captureFullPage';
import './Navbar.css';

const Navbar = () => {
  const role = useRole();
  const [scrolled, setScrolled] = useState(false);
  const [capturing, setCapturing] = useState(false);
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
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const otherRole = role === 'planner' ? 'developer' : 'planner';
  const otherLabel = role === 'planner' ? 'Developer ver.' : 'Planner ver.';

  const handleCapture = async () => {
    if (capturing) return;
    setCapturing(true);
    try {
      await captureFullPage();
    } catch (err) {
      console.error('Capture failed:', err);
    } finally {
      setCapturing(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">김동년</a>
        <div className="navbar-right">
          <ul className="navbar-menu">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a href={`/${otherRole}`} className="role-switch-btn">
            {otherLabel}
          </a>
          <button
            className={`capture-btn ${capturing ? 'capturing' : ''}`}
            onClick={handleCapture}
            disabled={capturing}
            title="포트폴리오 PDF 저장"
          >
            {capturing ? (
              <svg className="capture-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            )}
          </button>
          <button
            className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* 모바일 오버레이 메뉴 */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <a href={`/${otherRole}`} className="role-switch-btn" onClick={() => setMenuOpen(false)}>
            {otherLabel}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
