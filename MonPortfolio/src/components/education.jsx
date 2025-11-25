import { Trans, useTranslation } from "react-i18next";
import { useEffect } from "react";
import "../css/education.css";

const EducationContent = () => {
    const { t } = useTranslation();
    useEffect(() => {
        const elements = document.querySelectorAll(
            '.education-line, .education-grid, .education-content h1'
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.3 });

        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);


    return (
        <div>

            <div className='education-content'>
                <h1>{t("education_title")}</h1>
                <div className="education-grid">
                    <h2>{t("education_program")}</h2>
                    <p>
                        <Trans i18nKey="education_description" />
                    </p>
                </div>
            </div>

        </div>
    );
};

export default EducationContent;
