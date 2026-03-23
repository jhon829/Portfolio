import { useState, useEffect } from 'react';
import './SpigenNavbar.css';

const SpigenNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      </div>
    </nav>
  );
};

export default SpigenNavbar;
