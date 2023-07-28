import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Service(){
    return(
        <>
        <Navbar/>
            <Hero
            
                cName="hero-mid"
                heroImg="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                title="Service"
                text=""
                buttonText = ""
                url="/"
                btnClass = "hide"
            />
            <Trip/>
            <Footer/>

        </>
    )

}

export default Service;