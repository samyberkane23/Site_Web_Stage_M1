import React from "react";
import "./AboutUsStyles.css";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">À Propos de SI Vibes</h1>
            <p className="about-description">
                SI Vibes est une entreprise spécialisée dans les solutions informatiques et le portage salarial. Nous vous accompagnons dans la réalisation et la réussite de vos projets technologiques tout en offrant des opportunités de portage salarial.
            </p>

            <div className="about-section">
                <h2 className="about-subheading">Gestion de Projet</h2>
                <p className="about-subdescription">
                    Notre expertise réside dans la gestion de projets informatiques. Notre approche repose sur des principes clés :
                </p>
                <ul className="about-list">
                    <li>Compréhension approfondie de vos besoins.</li>
                    <li>Sélection de professionnels passionnés pour concrétiser vos projets.</li>
                    <li>Établissement d'objectifs précis avec des moyens concrets pour les atteindre.</li>
                    <li>Transparence, agilité et réactivité tout au long du processus.</li>
                </ul>
            </div>

            <div className="about-section">
                <h2 className="about-subheading">Portage Salarial</h2>
                <p className="about-subdescription">
                    Découvrez notre service de portage salarial, une solution innovante pour les professionnels souhaitant allier stabilité salariale et indépendance. Le portage salarial est une relation tripartite entre une société de portage, un consultant porté et l'entreprise cliente, offrant flexibilité et expertise.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
