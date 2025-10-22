import { useEffect } from 'react';
import '../css/skills.css';

function SkillsContent() {

    return (
        <div className='skills-content'>
            <h1>Mes Compétences</h1>

            <div className='section-skills'>
                <div>
                    Font-end
                </div>
                <div>
                    Back-end
                </div>
                <div>
                    Base de données
                </div>
                <div>
                    Outils
                </div>
            </div>

        </div>
    );
}

export default SkillsContent;
