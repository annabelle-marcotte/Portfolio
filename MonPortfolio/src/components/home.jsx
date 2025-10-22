import { useEffect, useRef } from "react";
import "../css/home.css";

const HomeContent = () => {
    const typingRef = useRef(null);
    const timeoutRef = useRef(null); // Keep track of the current timeout

    useEffect(() => {
        const words = [
            "développeuse Full Stack.",
            "étudiante en informatique.",
            "passionnée de code.",
        ];
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

        // Cleanup when the component unmounts
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <div className="home-container">
            <div className="home-content">
                <h1>
                    Bonjour, je suis <span>Annabelle</span>!
                </h1>
                <h3>
                    Je suis une{" "}
                    <span className="typing-text">
                        <span ref={typingRef}></span>
                    </span>
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>

                <div className="links">
                    <a
                        href="https://www.linkedin.com/in/annabelle-marcotte/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/links/linkedin.png" alt="linkedin" />
                    </a>
                    <a
                        href="https://github.com/annabelle-marcotte/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/links/github.png" alt="github" />
                    </a>
                </div>

                <button>
                    <a href="/links/cv.pdf" target="_blank" rel="noopener noreferrer">
                        Regarder mon CV!
                    </a>
                </button>
            </div>
        </div>
    );
};

export default HomeContent;
