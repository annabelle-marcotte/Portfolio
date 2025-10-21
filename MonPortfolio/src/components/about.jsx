
import '../css/about.css';
import ImageLoop from '../assets/imageLoop.jsx';

function AboutContent() {
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
        </div>
    );
}

export default AboutContent;
