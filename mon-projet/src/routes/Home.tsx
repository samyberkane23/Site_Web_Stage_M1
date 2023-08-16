import React from "react";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

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
            <Destination />
            <Trip />
            <Footer />
        </>
    );
};

export default Home;
