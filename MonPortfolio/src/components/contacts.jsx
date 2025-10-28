import "../css/contacts.css";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactsContent = () => {
    const [state, handleSubmit] = useForm("xjkpgwgd");
    const [showPopup, setShowPopup] = useState(false);

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
        await handleSubmit(event);
    };

    return (
        <div>
            <div className="contacts-header">
                <h1>Contact</h1>
            </div>

            <div className="contacts-content">
                <div className="info-me">
                    <h3>Contact Information</h3>
                    <p>
                        N'hésitez pas à me contacter via l'un des canaux suivants.
                        Je vous répondrai dans les plus brefs délais !
                    </p>

                    <div className="contact-item">
                        <img src="/contact/mail.png" alt="email" />
                        <div>
                            <strong>Email</strong><br />
                            <span><a href="mailto:aj.marcotte@icloud.com">aj.marcotte@icloud.com</a></span>
                        </div>
                    </div>

                    <div className="contact-item">
                        <img src="/contact/phone.png" alt="phone" />
                        <div>
                            <strong>Téléphone</strong><br />
                            <span><a href="tel:4389257353">(438) 925-7353</a></span>
                        </div>
                    </div>

                    <div className="contact-item">
                        <img src="/contact/location.png" alt="location" />
                        <div>
                            <strong>Localisation</strong><br />
                            <span>Québec, Canada</span>
                        </div>
                    </div>

                    <h2>Connecte-toi avec moi :</h2>
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
                    <h3>ENVOIE-MOI UN MESSAGE</h3>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Votre nom</label>
                        <input id="name" type="text" name="name" placeholder="Votre nom" required />

                        <label htmlFor="email">Votre courriel</label>
                        <input id="email" type="email" name="email" placeholder="YourEmail@LikeThis.com" required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />

                        <label htmlFor="message">Votre message</label>
                        <textarea id="message" name="message" placeholder="Votre message ici..." required />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <button type="submit" disabled={state.submitting}>Envoyer</button>
                    </form>
                </div>
            </div>

            {showPopup && (
                <div className="popup-message">
                    <p>Merci pour votre message !<br />Je vous répondrai dès que possible.</p>
                </div>
            )}
        </div>
    );
};

export default ContactsContent;
