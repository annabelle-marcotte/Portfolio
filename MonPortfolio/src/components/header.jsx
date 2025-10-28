import { useState, useEffect } from 'react';
import '../css/index.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projet', label: 'Projets' },
    // { id: 'experience', label: 'Expériences' },
    { id: 'contacts', label: 'Contacts' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      const header = document.querySelector('header');
      if (!header.contains(e.target)) setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 995) setMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);

    const sectionElements = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = -68;
      const top = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };


  return (
    <header>
      <a className="logo" onClick={(e) => scrollToSection(e, 'home')}>
        MonPortfolio.
      </a>

      <nav id="nav-menu" className={menuOpen ? 'open' : ''}>
        {sections.map(({ id, label }) => (
          <a
            key={id}
            className={activeSection === id ? 'active' : ''}
            onClick={(e) => scrollToSection(e, id)}
          >
            {label}
          </a>
        ))}
        <div className="trad-content">
          <a>En</a>
        </div>
      </nav>

      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
}

export default Header;
