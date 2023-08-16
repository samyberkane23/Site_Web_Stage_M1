import React from "react";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Need from "../components/Need";

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.pexels.com/photos/7652039/pexels-photo-7652039.jpeg?auto=compress&cs=tinysrgb&w=1600"
                title=" Besoin d'expertise en informatique?"
                text="Confiez-nous la gestion en toute confiance."
                buttonText="Contactez-nous"
                url="/contact"
                btnClass="show"
            />
            <Mission />
            <Need />
            <Footer />
        </>
    );
};

export default Home;
