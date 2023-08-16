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
        text="À la croisée de l'innovation et de la technologie, notre équipe se tient prête à concrétiser vos projets informatiques les plus ambitieux.
         Que vous ayez une idée novatrice en tête ou des besoins spécifiques à adresser,
          notre expertise est à votre service. "

        img1 ="https://media.istockphoto.com/id/1308399472/fr/photo/discussion-des-indicateurs-financiers-et-commerciaux-sur-tablette.jpg?s=612x612&w=0&k=20&c=RuY5dah4LDRjD1KAM1SEvamEGuBM-vEk7O52SBtGxU8="
        img2 = "https://media.istockphoto.com/id/1130708047/fr/photo/asiatique-architecte-gens-daffaires-discussion-de-groupe-sur-la-r%C3%A9union-avec-les-plans-de.jpg?s=612x612&w=0&k=20&c=9mFuxZ6A_1Y7gPGC_DcIAGmSqXCUEK7Xp4kJx_Z-84c="

        btnText="en savoir plus" // Ajoutez le texte pour le bouton 1
        btnLink="/service#paragraphe1" // Ajoutez le lien pour le bouton 1
      />


      <DestinationData
        className="first-des-reverse"

        heading="Vous cherchez à intégrer un projet informatique ?"
        text="Nous sommes là pour vous offrir notre expertise et notre dévouement, en transformant vos idées en réalité numérique. Que vous souhaitiez développer une application,
         optimiser votre infrastructure ou relever tout autre défi technologique, 
         notre équipe compétente est prête à collaborer avec vous pour atteindre vos objectifs. "
        img1 ={"https://media.istockphoto.com/id/1370598557/fr/photo/jeune-employ%C3%A9-de-bureau-afro-am%C3%A9ricain-dans-des-%C3%A9couteurs-d%C3%A9filant-dans-un-t%C3%A9l%C3%A9phone-portable.jpg?s=612x612&w=0&k=20&c=thEL90KtTTxm7bcJQ7B0gcYXCDScx91hkSXiNaybjwg="}
        img2 = {"https://media.istockphoto.com/id/1393771200/fr/photo/mains-dun-jeune-programmeur-masculin-ou-dun-ing%C3%A9nieur-informatique-d%C3%A9codant-des-donn%C3%A9es-sur.jpg?s=612x612&w=0&k=20&c=W9rAkx28yrTJuSDO5jdXrCK--0-vXZTaI9Uq2aOuyyA="}
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
