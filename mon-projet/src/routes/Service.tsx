import { useRef } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import "./ServiceStyles.css";

function Service(){
   // const paragraphRef = useRef<HTMLDivElement>(null);
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

            <div id="paragraphe1" className="about-container" >
            <h2 className="gray-text text-fade">Titre du paragraphe 1</h2>
            <p className="gray-text text-fade">Contenu du paragraphe 1...</p>
            </div>

            <div id="paragraphe2" className="about-container" >
            <h2 className="gray-text text-fade">Titre du paragraphe 2</h2>
            <p className="gray-text text-fade">Contenu du paragraphe 2...</p>
            </div>


            <div id="paragraphe3" className="about-container" >
            <h2 className="gray-text text-fade">Titre du paragraphe 3</h2>
            <p className="gray-text text-fade">Contenu du paragraphe 3...</p>
            </div>



            <div id="paragraphe4" className="about-container" >
            <h2 className="gray-text text-fade">Titre du paragraphe 4</h2>
            <p className="gray-text text-fade">Contenu du paragraphe 4...</p>
            </div>




            <Trip/>
            <Footer/>

        </>
    )

}

export default Service;