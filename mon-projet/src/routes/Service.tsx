//import { useRef } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Need from "../components/Need";
import "./ServiceStyles.css";

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

            <div id="paragraphe1" className="about-container" >
            <h2 className="gray-text text-fade">Vous avez un projet informatique ou un besoin à nous confier ?</h2>
            <p className="gray-text text-fade">
            Découvrez l'univers de SI Vibes, une entreprise dédiée à l'excellence dans le domaine des solutions informatiques et du portage salarial. 
            Notre expertise s'étend bien au-delà de la simple prestation de services informatiques ; nous sommes vos partenaires de confiance dans
            la conception, la mise en œuvre et la réalisation de vos projets technologiques.
            Chez SI Vibes, nous comprenons l'importance de concrétiser vos idées innovantes, c'est pourquoi nous mettons à votre disposition notre
            équipe d'experts passionnés pour vous accompagner à chaque étape du processus.<br/>
            <br/>
            En plus de notre engagement envers l'innovation technologique, SI Vibes vous offre également la flexibilité du portage salarial. 
            Nous croyons en l'autonomie professionnelle, et c'est pourquoi nous avons développé une approche holistique qui vous permet 
            de jouir des avantages d'une indépendance tout en bénéficiant de la stabilité d'une relation salariale. 
            Grâce à notre offre de portage salarial, vous avez la possibilité de saisir de nouvelles opportunités professionnelles tout en évitant 
            les tracas administratifs. Que vous soyez un consultant indépendant ou une entreprise en pleine expansion,
            notre solution de portage salarial est conçue pour vous offrir une transition fluide et transparente vers une approche plus agile du travail.<br/>
            <br/>

            Chez SI Vibes, notre passion pour la technologie se conjugue avec notre dévouement à l'autonomie professionnelle pour vous offrir 
            une expérience complète et personnalisée. 
            Nous sommes plus qu'une entreprise de solutions informatiques et de portage salarial - nous sommes vos partenaires,
            vos facilitateurs et vos collaborateurs dans la concrétisation de vos aspirations professionnelles. 
            Rejoignez-nous dans cette aventure où l'innovation et l'indépendance se rencontrent pour façonner un avenir plus prometteur pour vous
            et votre entreprise.

            </p>
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




            <Need/>
            <Footer/>

        </>
    )

}

export default Service;