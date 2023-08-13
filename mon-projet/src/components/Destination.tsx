import React from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination: React.FC = () => {
  return (
    <div className="destination">
      <h1>Nos services</h1>
      <p>Présentation de nos services</p>

      <DestinationData
        className="first-des"
        heading="Vous avez un projet informatique ou un besoin à nous confier ?"
        text="ECRIRE UN PARAGRAPHE POUR EXPLIQUER"
        
        img1 ="https://media.istockphoto.com/id/1308399472/fr/photo/discussion-des-indicateurs-financiers-et-commerciaux-sur-tablette.jpg?s=612x612&w=0&k=20&c=RuY5dah4LDRjD1KAM1SEvamEGuBM-vEk7O52SBtGxU8="
        img2 = "https://media.istockphoto.com/id/1130708047/fr/photo/asiatique-architecte-gens-daffaires-discussion-de-groupe-sur-la-r%C3%A9union-avec-les-plans-de.jpg?s=612x612&w=0&k=20&c=9mFuxZ6A_1Y7gPGC_DcIAGmSqXCUEK7Xp4kJx_Z-84c="

        btnText="en savoir plus" // Ajoutez le texte pour le bouton 1
        btnLink="/service#paragraphe1" // Ajoutez le lien pour le bouton 1
      />


      <DestinationData
        className="first-des-reverse"

        heading="Vous cherchez à intégrer un projet informatique ?"
        text="ECRIRE UN PARAGRAPHE POUR EXPLIQUER 2 "
        img1 ={"https://media.istockphoto.com/id/1308399472/fr/photo/discussion-des-indicateurs-financiers-et-commerciaux-sur-tablette.jpg?s=612x612&w=0&k=20&c=RuY5dah4LDRjD1KAM1SEvamEGuBM-vEk7O52SBtGxU8="}
        img2 = {"https://media.istockphoto.com/id/1130708047/fr/photo/asiatique-architecte-gens-daffaires-discussion-de-groupe-sur-la-r%C3%A9union-avec-les-plans-de.jpg?s=612x612&w=0&k=20&c=9mFuxZ6A_1Y7gPGC_DcIAGmSqXCUEK7Xp4kJx_Z-84c="}
        btnText="en savoir plus" // Ajoutez le texte pour le bouton 1
        btnLink="/service#paragraphe2" // Ajoutez le lien pour le bouton 1
      />


      <DestinationData
        className="first-des"

        heading="Vous cherchez un futur consultant en informatique et vous avez besoin d’accompagnement ?"
        text="ECRIRE UN PARAGRAPHE POUR EXPLIQUER 3 "
        img1 ={"https://media.istockphoto.com/id/1308399472/fr/photo/discussion-des-indicateurs-financiers-et-commerciaux-sur-tablette.jpg?s=612x612&w=0&k=20&c=RuY5dah4LDRjD1KAM1SEvamEGuBM-vEk7O52SBtGxU8="}
        img2 = {"https://media.istockphoto.com/id/1130708047/fr/photo/asiatique-architecte-gens-daffaires-discussion-de-groupe-sur-la-r%C3%A9union-avec-les-plans-de.jpg?s=612x612&w=0&k=20&c=9mFuxZ6A_1Y7gPGC_DcIAGmSqXCUEK7Xp4kJx_Z-84c="}
        btnText="en savoir plus" // Ajoutez le texte pour le bouton 1
        btnLink="/service#paragraphe3" // Ajoutez le lien pour le bouton 1
     />




      <DestinationData
        className="first-des-reverse"

        heading="Vous cherchez une société de portage en informatique ?"
        text="ECRIRE UN PARAGRAPHE POUR EXPLIQUER 4 "
        img1 ={"https://media.istockphoto.com/id/1308399472/fr/photo/discussion-des-indicateurs-financiers-et-commerciaux-sur-tablette.jpg?s=612x612&w=0&k=20&c=RuY5dah4LDRjD1KAM1SEvamEGuBM-vEk7O52SBtGxU8="}
        img2 = {"https://media.istockphoto.com/id/1130708047/fr/photo/asiatique-architecte-gens-daffaires-discussion-de-groupe-sur-la-r%C3%A9union-avec-les-plans-de.jpg?s=612x612&w=0&k=20&c=9mFuxZ6A_1Y7gPGC_DcIAGmSqXCUEK7Xp4kJx_Z-84c="}
        btnText="en savoir plus" // Ajoutez le texte pour le bouton 1
        btnLink="/service#paragraphe4" // Ajoutez le lien pour le bouton 1
      />



    </div>
  );
}

export default Destination;
