import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Contact: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1600"
                title="Contact"
                text=""
                buttonText=""
                url="/"
                btnClass="hide"
            />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Contact;
