import AboutUS from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About(){
    return(
        <>
        <Navbar/>
            <Hero
            
                cName="hero-mid"
                heroImg="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                title="A propos"
                text=""
                buttonText = ""
                url="/"
                btnClass = "hide"
            />
            <AboutUS/>
            <Footer/>

        </>

    )

}

export default About;