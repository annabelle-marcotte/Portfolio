import { useState, useEffect } from 'react';
import '../css/index.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

    const sections = document.querySelectorAll('section');
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

    sections.forEach((section) => observer.observe(section));

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <a
        className="logo"
        onClick={(e) => scrollToSection(e, 'home')}
      >
        MonPortfolio.
      </a>

      <nav id="nav-menu" className={menuOpen ? 'open' : ''}>
        <a
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => scrollToSection(e, 'home')}
        >
          Accueil
        </a>

        <a
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => scrollToSection(e, 'about')}
        >
          À propos
        </a>

        <a
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={(e) => scrollToSection(e, 'skills')}
        >
          Compétences
        </a>

        <a
          className={activeSection === 'projet' ? 'active' : ''}
          onClick={(e) => scrollToSection(e, 'projet')}
        >
          Projets
        </a>

        <a
          className={activeSection === 'experience' ? 'active' : ''}
          onClick={(e) => scrollToSection(e, 'experience')}
        >
          Expériences
        </a>

        <a
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => scrollToSection(e, 'contact')}
        >
          Contacts
        </a>

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
