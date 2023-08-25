
import React from "react";
import "./FooterStyles.css";


const Footer: React.FC = () => {

    return(

        <div className="footer">

            <div className="top">
                <div>
                    <h1>Si Vibes</h1>
                    <p>Conseil en systèmes et logiciels informatiques</p>
                </div>
                <div>
                    <a href="/">

                        <i className= "fa-brands fa-facebook-square"></i>
                    </a>

                    <a href="/">

                        <i className= "fa-brands fa-instagram-square"></i>
                    </a>

                    <a href="/">

                        <i className= "fa-brands fa-linkedin"></i>
                    </a>

                    <a href="/">

                        <i className= "fa-brands fa-twitter-square"></i>
                    </a>




                </div>
            </div>

            <div className="bottom center-horizontal">

                <div className="bottom-item">
                    <h4>Contactez-nous aussi </h4>
                    <p>
                        <span role="img" aria-label="Localisation">📍</span> 73 rue Lauriston 75016 PARIS
                    </p>
                    <p>
                        <span role="img" aria-label="Phone">📞</span> 06 41 92 11 79 
                    </p>
                    <p>
                        <span role="img" aria-label="Mail">✉️</span> contact.sivibes@gmail.com
                    </p>
                </div>

                <div className="bottom-item">
                    <h4>Visitez aussi</h4>
                    <a href="/">Acceuil</a>
                    <a href="/About">A propos</a>
                    <a href="/Service">Services</a>
                    <a href="/Contact">Contact</a>

                </div>

                <div>
                <img src={require("./images/s.png")} alt="" />

                </div>

            </div>

        </div>
    );
};

export default Footer;