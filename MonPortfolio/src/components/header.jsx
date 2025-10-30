import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/index.css';
import "../i18n.js";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, i18n } = useTranslation();

  const sections = [
    { id: 'home', label: t('menu_home') },
    { id: 'about', label: t('menu_about') },
    { id: 'skills', label: t('menu_skills') },
    // { id: 'projet', label: t('menu_projects') },
    { id: 'education', label: t('menu_education') },
    { id: 'contacts', label: t('menu_contacts') },
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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <header>
      <a className="logo" onClick={(e) => scrollToSection(e, 'home')}>
        Annabelle.
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

        <div className="trad-content desktop-lang">
          <button onClick={toggleLanguage}>
            {i18n.language === 'fr' ? 'FR' : 'EN'}
          </button>
        </div>

      </nav>
              <div className="trad-content mobile-lang">
        <button onClick={toggleLanguage}>
          {i18n.language === 'fr' ? 'FR' : 'EN'}
        </button>
      </div>
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
