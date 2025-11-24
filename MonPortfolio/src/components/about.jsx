import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/about.css';
import ImageLoop from '../assets/imageLoop.jsx';

function AboutContent() {
    const { t } = useTranslation();

    const Img = [
        { src: '/about-pictures/eclipse.JPEG', alt: 'Eclipse'},
        { src: '/about-pictures/ski-2024.JPEG', alt: 'Ski 2024' },
        { src: 'about-pictures/ski-hill.JPEG', alt: 'Ski Hill' },
        { src: '/about-pictures/ski.JPEG', alt: 'Ski' },
        { src: '/about-pictures/germany-falls.JPEG', alt: 'Waterfall Germany' },
        { src: '/about-pictures/germany-town.JPEG', alt: 'Germany Town' },
        { src: '/about-pictures/germany.JPEG', alt: 'Germany' },
        { src: '/about-pictures/germany-frankfurt.JPEG', alt: 'Frankfurt' },
        { src: '/about-pictures/republic-khav.JPEG', alt: 'Republic-Khav' },
        { src: '/about-pictures/republic.JPEG', alt: 'Republic' },
        { src: '/about-pictures/mePic.JPEG', alt: 'Me Picture' },
        { src: '/about-pictures/italy-5terres-again.JPEG', alt: '5 Terres Again' },
        { src: '/about-pictures/Italy-5terres.JPEG', alt: 'Italy 5 Terres' },
        { src: '/about-pictures/Italy-portofine.JPEG', alt: 'Italy Portofino' },
        { src: '/about-pictures/italy-sorrento.JPEG', alt: 'Italy Sorrento' },
        { src: '/about-pictures/Italy-5terre.JPEG', alt: '5 Terres' },
        { src: '/about-pictures/khavish.JPEG', alt: 'Khavish' },
        { src: '/about-pictures/me-5terre.JPEG', alt: '5 Terres Me' },
        { src: '/about-pictures/portofino.JPEG', alt: 'Portofino' },
        { src: '/about-pictures/santa-margherita.JPEG', alt: 'Santa Margherita' },
        { src: '/about-pictures/GaspHill.JPEG', alt: 'Gaspé Hill' },
        { src: '/about-pictures/gaspe.JPEG', alt: 'Gaspé' },
        { src: '/about-pictures/me-bee.JPEG', alt: 'Bee and I' },
        { src: '/about-pictures/me-gaspe.JPEG', alt: 'Me Gaspé' },
        { src: '/about-pictures/sherbrooke.JPEG', alt: 'Sherbrooke' },
    ];

    useEffect(() => {
        const elements = document.querySelectorAll(
            '.description-about h1, .description-about h3, .description-about p, .about-line'
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.3 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="about-content">
            <div className="about-picture">
                <ImageLoop
                    images={Img}
                    speed={0.1}
                    imageHeight={275}
                    gap={20}
                    fadeOutColor="#7ea38f"
                />
            </div>

            <div className="description-about">
                <h1>{t('about_title')}</h1>
                <h3>{t('about_subtitle')}</h3>
                <p>{t('about_paragraph')}</p>
            </div>
            <div className="contact-divider"></div>
        </div>
    );
}

export default AboutContent;
