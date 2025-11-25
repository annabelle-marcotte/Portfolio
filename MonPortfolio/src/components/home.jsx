import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../css/home.css";

const HomeContent = () => {
    const { t } = useTranslation();
    const typingRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const words = t("home_typing_words", { returnObjects: true });
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = typingRef.current;

        const type = () => {
            if (!typingElement) return;

            const currentWord = words[index];
            typingElement.textContent = currentWord.substring(0, charIndex);

            if (!isDeleting && charIndex < currentWord.length) {
                charIndex++;
                timeoutRef.current = setTimeout(type, 150);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                timeoutRef.current = setTimeout(type, 100);
            } else if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                timeoutRef.current = setTimeout(type, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % words.length;
                timeoutRef.current = setTimeout(type, 500);
            }
        };

        type();

        return () => clearTimeout(timeoutRef.current);
    }, [t]);

    return (
        <div className="home-container">
            <div className="home-content">
                <h1 dangerouslySetInnerHTML={{ __html: t("home_greeting") }} />
                <h3>
                    {t("home_paragraph")}{" "}
                    <span className="typing-text">
                        <span ref={typingRef}></span>
                    </span>
                </h3>

                <div className="links">
                    <a
                        href="https://www.linkedin.com/in/annabelle-marcotte/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Linkedin"
                    >
                        <img src="/links/linkedin.png" alt="linkedin" />
                    </a>
                    <a
                        href="https://github.com/annabelle-marcotte/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github"
                    >
                        <img src="/links/github.png" alt="github" />
                    </a>
                </div>

                <button>
                    <a href="/links/cv.pdf" target="_blank" rel="noopener noreferrer">
                        {t("home_cv_button")}
                    </a>
                </button>
            </div>
        </div>
    );
};

export default HomeContent;
