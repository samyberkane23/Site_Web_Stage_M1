import React from "react";
import "./NeedStyles.css";
import NeedData from "./NeedData";

interface NeedProps {}

const Need: React.FC<NeedProps> = () => {
    return (
        <div className="need">
            <h1>ALTERNANCE ET STAGE</h1>
            <p>Vous cherchez quoi ?</p>
            <div className="needcard">
                <NeedData
                    heading="Une entreprise qui cherche un alternant"
                    text="Explication comment les aider"
                    image="https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=1600"
                />
                <NeedData
                    heading="Un étudiant qui cherche un stage ou alternance"
                    text="Explication comment les aider"
                    image="https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=1600"
                />
            </div>
        </div>
    );
};

export default Need;
