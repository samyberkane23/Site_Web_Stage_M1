import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact(){
    return(
        <>
        <Navbar/>
            <Hero
            
                cName="hero-mid"
                heroImg="https://media.istockphoto.com/id/1311422969/fr/photo/mail-communication-connection-message-%C3%A0-lenvoi-de-contacts-t%C3%A9l%C3%A9phone-global-letters-concept.jpg?s=612x612&w=0&k=20&c=-ckpVENzCmAohwQeaV7PwmQAP7Fk3Fe8Mj1HSescNhk=" 
                title="Contact"
                text=""
                buttonText = ""
                url="/"
                btnClass = "hide"
            />
            <ContactForm/>
            <Footer/>

        </>
    )

}

export default Contact;