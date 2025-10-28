import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/about.css';
import ImageLoop from '../assets/imageLoop.jsx';

function AboutContent() {
    const { t } = useTranslation();

    const Img = [
        { src: '/about-pictures/gaspe.JPEG', alt: 'Gaspé' },
        { src: '/about-pictures/germany-falls.JPEG', alt: 'Waterfall Germany' },
        { src: '/about-pictures/germany-town.JPEG', alt: 'Germany Town' },
        { src: '/about-pictures/germany.JPEG', alt: 'Germany' },
        { src: '/about-pictures/Italy-5terre.JPEG', alt: '5 Terres' },
        { src: '/about-pictures/khavish.JPEG', alt: 'Khavish' },
        { src: '/about-pictures/me-5terre.JPEG', alt: '5 Terres Me' },
        { src: '/about-pictures/me-bee.JPEG', alt: 'Bee and I' },
        { src: '/about-pictures/me-gaspe.JPEG', alt: 'Me Gaspé' },
        { src: '/about-pictures/portofino.JPEG', alt: 'Portofino' },
        { src: '/about-pictures/republic-khav.JPEG', alt: 'Republic-Khav' },
        { src: '/about-pictures/republic.JPEG', alt: 'Republic' },
        { src: '/about-pictures/santa-margherita.JPEG', alt: 'Santa Margherita' },
        { src: '/about-pictures/sherbrooke.JPEG', alt: 'Sherbrooke' },
        { src: '/about-pictures/ski.JPEG', alt: 'Ski' }
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
                    speed={0.08}
                    imageHeight={250}
                    gap={20}
                    fadeOutColor="#7ea38f"
                />
            </div>

            <div className="description-about">
                <h1>{t('about_title')}</h1>
                <h3>{t('about_subtitle')}</h3>
                <p>{t('about_paragraph')}</p>
            </div>

            <div className="about-line"></div>
        </div>
    );
}

export default AboutContent;
