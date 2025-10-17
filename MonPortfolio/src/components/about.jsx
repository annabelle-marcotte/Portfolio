import { useState, useEffect } from 'react';
import '../css/about.css';

function AboutContent() {
    const Img = [
        "<img src='/about-pictures/gaspe.JPEG' alt='Gaspé' className='about-image' />",
        "<img src='/about-pictures/germany-falls.JPEG' alt='WaterFallGermany' className='about-image' />",
        "<img src='/about-pictures/germany-town.JPEG' alt='Germany Town' className='about-image' />",
        "<img src='/about-pictures/germany.JPEG' alt='Germany' className='about-image' />",
        "<img src='/about-pictures/Italy-5terre.JPEG' alt='5terres' className='about-image' />",
        "<img src='/about-pictures/khavish.JPEG' alt='khavish' className='about-image' />",
        "<img src='/about-pictures/me-5terre.JPEG' alt='5terres' className='about-image' />",
        "<img src='/about-pictures/me-bee.JPEG' alt='Bee and I' className='about-image' />",
        "<img src='/about-pictures/me-gaspe.JPEG' alt='Me Gaspe' className='about-image' />",
        "<img src='/about-pictures/portofino.JPEG' alt='Portofino' className='about-image' />",
        "<img src='/about-pictures/republic-khav.JPEG' alt='Republic-Khav' className='about-image' />",
        "<img src='/about-pictures/republic.JPEG' alt='Republic' className='about-image' />",
        "<img src='/about-pictures/santa-margherita.JPEG' alt='Santa Margherita' className='about-image' />",
        "<img src='/about-pictures/sherbrooke.JPEG' alt='Sherbrooke' className='about-image' />",
        "<img src='/about-pictures/ski.JPEG' alt='Ski' className='about-image' />",
    ];

    return (
        <div className="about-content">
            <div className="about-picture">
                {/* {Img} */}
                <img src='/about-pictures/gaspe.JPEG' alt='Gaspé' className='about-image' />
            </div>
        </div>
    );
}

export default AboutContent;
