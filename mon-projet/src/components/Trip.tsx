import "./TripStyles.css";
import TripData from "./TripData";

function Trip(){

    return(
        <div className="trip">
            
            <h1>ALTERNANCE ET STAGE </h1>
            <p> Vous cherchez quoi ?</p>
            <div className="tripcard">
                <TripData
                heading= "Une entreprise qui cherche un alternant "
                text="Explication comment les aider "
                image="https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=1600"          
                
                />


            <TripData
                heading= "Un étudiant qui cherche un stage ou altercnanc "
                text="Explication comment les aider "
                image="https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=1600"          
                
                />
            </div>



        </div>
    )
}

export default Trip;