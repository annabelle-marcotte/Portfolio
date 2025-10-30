import "../css/contacts.css";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

const ContactsContent = () => {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("xjkpgwgd");
    const [showPopup, setShowPopup] = useState(false);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setShowPopup(true);

            const form = document.querySelector("form");
            if (form) form.reset();

            const timer = setTimeout(() => setShowPopup(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    const onSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        await handleSubmit(event);
        setTimeout(() => setSending(false), 1000);
        setTimeout(() => {
            state.succeeded = false;
        }, 1500);
    };

    return (
        <div>
            <div className="contacts-header">
                <h1>{t("contact_title")}</h1>
            </div>

            <div className="contacts-content">
                <div className="info-me">
                    <h3>{t("contact_info_title")}</h3>
                    <p>{t("contact_info_text")}</p>

                    <div className="contact-item">
                        <img src="/contact/mail.png" alt="email" />
                        <div>
                            <strong>{t("contact_email")}</strong><br />
                            <span>
                                <a href="mailto:aj.marcotte@icloud.com">aj.marcotte@icloud.com</a>
                            </span>
                        </div>
                    </div>

                    <div className="contact-item">
                        <img src="/contact/phone.png" alt="phone" />
                        <div>
                            <strong>{t("contact_phone")}</strong><br />
                            <span><a href="tel:4389257353">(438) 925-7353</a></span>
                        </div>
                    </div>

                    <div className="contact-item">
                        <img src="/contact/location.png" alt="location" />
                        <div>
                            <strong>{t("contact_location")}</strong><br />
                            <span>Québec, Canada</span>
                        </div>
                    </div>

                    <h2>{t("contact_social_title")}</h2>
                    <div className="social-links">
                        <div className="icon-box">
                            <a href="https://www.linkedin.com/in/annabelle-marcotte/" target="_blank" rel="noopener noreferrer">
                                <img src="/links/linkedin.png" alt="linkedin" />
                            </a>
                        </div>
                        <div className="icon-box">
                            <a href="https://github.com/annabelle-marcotte/" target="_blank" rel="noopener noreferrer">
                                <img src="/links/github.png" alt="github" />
                            </a>
                        </div>
                        <div className="icon-box">
                            <a href="mailto:aj.marcotte@icloud.com">
                                <img src="/contact/mail.png" alt="mail" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="user-content">
                    <h3>{t("contact_form_title")}</h3>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">{t("contact_name_label")}</label>
                        <input id="name" type="text" name="name" placeholder={t("contact_name_placeholder")} required />

                        <label htmlFor="email">{t("contact_email_label")}</label>
                        <input id="email" type="email" name="email" placeholder={t("contact_email_placeholder")} required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />

                        <label htmlFor="message">{t("contact_message_label")}</label>
                        <textarea id="message" name="message" placeholder={t("contact_message_placeholder")} required />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <button type="submit" disabled={state.submitting}>
                            {t("contact_submit_button")}
                            <img
                                src="../contact/sent.png"
                                className={sending ? "send-animate" : ""}
                                alt="send"
                            />
                        </button>
                    </form>
                </div>
            </div>

            {showPopup && (
                <div className="popup-message" dangerouslySetInnerHTML={{ __html: t("contact_popup_message") }} />
            )}
        </div>
    );
};

export default ContactsContent;
