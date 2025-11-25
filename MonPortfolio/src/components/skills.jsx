import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import '../css/skills.css';

function SkillsContent() {
    const { t } = useTranslation();

    useEffect(() => {
        const skillBoxes = document.querySelectorAll('.section-skills > div, .skills-content h1');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.3 }
        );

        skillBoxes.forEach(box => observer.observe(box));

        return () => skillBoxes.forEach(box => observer.unobserve(box));
    }, []);

    return (
        <div className='skills-content'>
            <h1>{t("skills_title")}</h1>

            <div className='section-skills'>
                <div>
                    <h2>{t("skills_frontend")}</h2>
                    <div className="skills-grid">
                        <div className="skill-box"><img src="/logo/languages/css.png" alt="CSS" title="CSS" /></div>
                        <div className="skill-box"><img src="/logo/languages/html.png" alt="HTML" title="HTML" /></div>
                        <div className="skill-box"><img src="/logo/languages/js.png" alt="Javascript" title="Javascript" /></div>
                        <div className="skill-box"><img src="/logo/languages/react.png" alt="React" title="React" /></div>
                    </div>
                </div>

                <div>
                    <h2>{t("skills_backend")}</h2>
                    <div className="skills-grid">
                        <div className="skill-box"><img src="/logo/languages/csharp.png" alt="C#" title="C#" /></div>
                        <div className="skill-box"><img src="/logo/languages/java.png" alt="Java" title="Java" /></div>
                        <div className="skill-box"><img src="/logo/languages/php.png" alt="PHP" title="PHP" /></div>
                        <div className="skill-box"><img src="/logo/languages/python.png" alt="Python" title="Python" /></div>
                    </div>
                </div>

                <div>
                    <h2>{t("skills_db")}</h2>
                    <div className="skills-grid">
                        <div className="skill-box"><img src="/logo/db/mongodb.png" alt="MongoDb" title="MongoDb" /></div>
                        <div className="skill-box"><img src="/logo/db/mysql.png" alt="MySql" title="MySql" /></div>
                        <div className="skill-box"><img src="/logo/db/no-sql-logo.png" alt="NoSql" title="No SQL" /></div>
                        <div className="skill-box"><img src="/logo/db/oracle.png" alt="oracle" title="oracle" /></div>
                        <div className="skill-box"><img src="/logo/db/sql.png" alt="sql" title="SQL" /></div>
                    </div>
                </div>

                <div>
                    <h2>{t("skills_tools")}</h2>
                    <div className="skills-grid">
                        <div className="skill-box"><img src="/logo/outils/androidstudio.png" alt="Android Studio" title="Android Studio" /></div>
                        <div className="skill-box"><img src="/logo/outils/azure.png" alt="Azure" title="Microsoft Azure" /></div>
                        <div className="skill-box"><img src="/logo/outils/figma.png" alt="figma" title="Figma" /></div>
                        <div className="skill-box"><img src="/logo/outils/jira.png" alt="Jira" title="Jira" /></div>
                        <div className="skill-box"><img src="/logo/outils/office.png" alt="Office" title="Microsoft Office" /></div>
                        <div className="skill-box"><img src="/logo/outils/visualstudio.png" alt="Visual Studio" title="Visual Studio" /></div>
                        <div className="skill-box"><img src="/logo/outils/visualstudiocode.png" alt="Visual Studio Code" title="Visual Studio Code" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsContent;
