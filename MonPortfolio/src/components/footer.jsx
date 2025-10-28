import { useEffect, useRef } from "react";
import "../css/footer.css";

const FooterContent = () => {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            const offset = -68;
            const top = section.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };
    return (
        <footer>
            <div className="footer-container">

                <div className="footer-column">
                    <h2>Annabelle Marcotte</h2>
                    <p>Developpeuse Full Stack au Québec, Canada</p>
                    <div className="social-links">
                        <a href="https://github.com/annabelle-marcotte/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><img src="/links/github.png" alt="github" /></a>
                        <a href="https://www.linkedin.com/in/annabelle-marcotte/"
                            target="_blank"
                            rel="noopener noreferrer"><img src="/links/linkedin.png" alt="linkedin" /></a>
                    </div>
                </div>

                <div className="footer-column contact-info">
                    <h2>Get In Touch</h2>
                    <div className="contact-item">
                        <img src="/contact/mail.png" alt="email" />
                        <div><strong>Email:</strong> <span> <a href="mailto:aj.marcotte@icloud.com">aj.marcotte@icloud.com</a></span></div>
                    </div>
                    <div className="contact-item">
                        <img src="/contact/phone.png" alt="phone" />
                        <div><strong>Phone:</strong> <span><a href="tel:4389257353">(438) 925-7353</a></span></div>
                    </div>
                    <div className="contact-item">
                        <img src="/contact/location.png" alt="location" />
                        <div><strong>Location:</strong> <span>Québec, Canada</span></div>
                    </div>
                </div>

                <div className="footer-column quick-links">
                    <h1>Quick Links</h1>
                    <a onClick={(e) => scrollToSection(e, "home")}>Accueil</a>
                    <a onClick={(e) => scrollToSection(e, "about")}>À propos</a>
                    <a onClick={(e) => scrollToSection(e, "skills")}>Compétences</a>
                    <a onClick={(e) => scrollToSection(e, "projet")}>Projets</a>
                    <a onClick={(e) => scrollToSection(e, "contacts")}>Contacts</a>
                </div>
            </div>

            <div className="footer-line"></div>

            <div className="footer-bottom">
                <p>© 2025 Annabelle Marcotte. Tous droits réservés.</p>
                <p>Fait avec React & CSS</p>
            </div>
        </footer>

    );
};

export default FooterContent;
