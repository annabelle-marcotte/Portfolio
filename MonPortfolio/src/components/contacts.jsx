import "../css/contacts.css";

const ContactsContent = () => {
    return (
        <div className="contacts-content">
            <h1>Contact</h1>
            <div className="info-me">
                <h3>Contact Information</h3>
                <p>
                    N'hésitez pas à me contacter via l'un des canaux suivants. 
                    Je vous répondrai dans les plus brefs délais !
                </p>

                <div className="contact-item">
                    <img src="/contact/mail.png" alt="email" />
                    <div>
                        <strong>Email</strong><br />
                        <span>aj.marcotte@icloud.com</span>
                    </div>
                </div>

                <div className="contact-item">
                    <img src="/contact/phone.png" alt="phone" />
                    <div>
                        <strong>Téléphone</strong><br />
                        <span>(438) 925-7353</span>
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
                        <a
                            href="https://www.linkedin.com/in/annabelle-marcotte/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/links/linkedin.png" alt="linkedin" />
                        </a>
                    </div>
                    <div className="icon-box"><a
                        href="https://github.com/annabelle-marcotte/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/links/github.png" alt="github" />
                    </a>
                    </div>
                    <div className="icon-box">
                        <img src="/contact/mail.png" alt="mail" />
                    </div>
                </div>

            </div>

            <div className="user-content">
                <h3>ENVOIE-MOI UN MESSAGE</h3>
                <label>Votre nom</label>
                <input type="text" placeholder="Votre nom" />
                <label>Votre courriel</label>
                <input type="email" placeholder="YourEmail@LikeThis.com" />
                <label>Votre message</label>
                <textarea placeholder="Votre message ici..." />
                <button>Envoyer</button>
            </div>
        </div>
    );
};

export default ContactsContent;
