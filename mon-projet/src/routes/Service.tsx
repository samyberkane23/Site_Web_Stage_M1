//import { useRef } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Need from "../components/Need";
import Services from "../components/Services";
const Service: React.FC = () => {   // const paragraphRef = useRef<HTMLDivElement>(null);
    return(
        <>
        <Navbar/>
            <Hero
            
                cName="hero-mid"
                heroImg="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                title="Services"
                text=""
                buttonText = ""
                url="/"
                btnClass = "hide"
            />
            <Services/>
            <Need/>
            <Footer/>

        </>
    )

}

export default Service;