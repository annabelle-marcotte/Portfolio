import { useEffect, useRef } from "react";
import "../css/education.css";

const EducationContent = () => {

    return (
        <div>
        <div className='education-content'>
            <h1>Mon Éducation</h1>
            <div className="education-grid">
                <h2>
                    Techniques de l'informatique
                </h2>
                <p>
                    Diplôme d’études collégiales (DEC) en informatique <br />Collège Lionel-Groulx, en cours
                </p>
            </div>

        </div>
                    <div className="about-line"></div>
        </div>
        
    );
};

export default EducationContent;
