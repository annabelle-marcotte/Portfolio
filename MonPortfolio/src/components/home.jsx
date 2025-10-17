import React, { useEffect, useRef } from "react";
import "../css/home.css";

const HomeContent = () => {
    const typingRef = useRef(null);

    useEffect(() => {
        const words = ["developpeuse Full Stack", "étudiante en informatique", "passionnée de code", "mom of 5"];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = typingRef.current;

        function type() {
            if (typingElement) {
                if (!isDeleting && charIndex < words[index].length) {
                    typingElement.textContent = words[index].substring(0, charIndex + 1);
                    charIndex++;
                    setTimeout(type, 150);
                } else if (isDeleting && charIndex > 0) {
                    typingElement.textContent = words[index].substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(type, 100);
                } else if (!isDeleting && charIndex === words[index].length) {
                    isDeleting = true;
                    setTimeout(type, 1000);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    index = (index + 1) % words.length;
                    setTimeout(type, 500);
                }
            }
        }

        type();
        return () => clearTimeout();
    }, []);

    return (
        <div className="home-content">
            <h1>Bonjour, je suis <span>Annabelle</span>!</h1>
            <h3>
                Je suis une <span className="typing-text">
                    <span ref={typingRef}></span>
                </span>
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>

            <div className="links">
                <a href="https://www.linkedin.com/in/annabelle-marcotte/" target="_blank" rel="noopener noreferrer">
                    <img src="/links/linkedin.png" alt="linkedin" className="background-image" />
                </a>

                <a href="https://github.com/annabelle-marcotte/" target="_blank" rel="noopener noreferrer">
                    <img src="/links/github.png" alt="github" className="background-image" />
                </a>
            </div>
            <button>
                <a href="/links/cv.pdf" target="_blank" rel="noopener noreferrer">
                    Regarder mon CV!
                </a>
            </button>
        </div>
    );
};

export default HomeContent;