import "../css/experience.css";

const ExperienceContent = () => {
    return (
        <div className="experience-content">
            <h1>Mes Expériences</h1>
            <div className="timeline">

                <div className="timeline-item left">
                    <div className="content-box">
                        <h3>Monitrice de ski</h3>
                        <p>idk what to write here</p>
                    </div>
                </div>

                <div className="timeline-item right">
                    <div className="content-box">
                        <h3>Technique de l'informatique</h3>
                        <p>DEC en cours</p>
                    </div>
                </div>

                <div className="timeline-item left">
                    <div className="content-box">
                        <h3>Études</h3>
                        <p>Informatique au Cégep</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExperienceContent;
