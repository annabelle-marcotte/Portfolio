import { Trans, useTranslation } from "react-i18next";
import "../css/education.css";

const EducationContent = () => {
    const { t } = useTranslation();

    return (
        <div> <div className="about-line"></div>
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
