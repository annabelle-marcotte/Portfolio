import { useRef } from "react";
import { useTranslation } from "react-i18next";
import "../css/footer.css";

const FooterContent = () => {
    const { t } = useTranslation();

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
                    <h2>{t("footer_name")}</h2>
                    <p>{t("footer_description")}</p>
                    <div className="social-links">
                        <a href="https://github.com/annabelle-marcotte/" target="_blank" rel="noopener noreferrer">
                            <img src="/links/github.png" alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/annabelle-marcotte/" target="_blank" rel="noopener noreferrer">
                            <img src="/links/linkedin.png" alt="linkedin" />
                        </a>
                    </div>
                </div>

                <div className="footer-column contact-info">
                    <h2>{t("footer_contact_title")}</h2>
                    <div className="contact-item">
                        <img src="/contact/mail.png" alt="email" />
                        <div><strong>{t("footer_email")}:</strong> <span><a href="mailto:aj.marcotte@icloud.com">aj.marcotte@icloud.com</a></span></div>
                    </div>
                    <div className="contact-item">
                        <img src="/contact/phone.png" alt="phone" />
                        <div><strong>{t("footer_phone")}:</strong> <span><a href="tel:4389257353">(438) 925-7353</a></span></div>
                    </div>
                    <div className="contact-item">
                        <img src="/contact/location.png" alt="location" />
                        <div><strong>{t("footer_location")}:</strong> <span>Québec, Canada</span></div>
                    </div>
                </div>

                <div className="footer-column quick-links">
                    <h1>{t("footer_quick_links")}</h1>
                    <a onClick={(e) => scrollToSection(e, "home")}>{t("footer_home")}</a>
                    <a onClick={(e) => scrollToSection(e, "about")}>{t("footer_about")}</a>
                    <a onClick={(e) => scrollToSection(e, "skills")}>{t("footer_skills")}</a>
                    <a onClick={(e) => scrollToSection(e, "education")}>{t("footer_education")}</a>
                    <a onClick={(e) => scrollToSection(e, "contacts")}>{t("footer_contacts")}</a>
                </div>
            </div>

            <div className="footer-line"></div>

            <div className="footer-bottom">
                <p>{t("footer_copyright")}</p>
                <p>{t("footer_made_with")}</p>
            </div>
        </footer>
    );
};

export default FooterContent;
