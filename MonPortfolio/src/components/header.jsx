import { useState, useEffect } from 'react';
import '../css/index.css'; // if your CSS is global

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

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

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <a href="#">Portfolio.</a>
      <nav id="nav-menu" className={menuOpen ? 'open' : ''}>
        <a href="#" className="active">Accueil</a>
        <a href="#">À propos</a>
        <a href="#">Compétences</a>
        <a href="#">Projets</a>
        <a href="#">Expériences</a>
        <a href="#">Contacts</a>
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
