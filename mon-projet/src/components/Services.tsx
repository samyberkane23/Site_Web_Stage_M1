import React from 'react';
import './ServiceStyles.css';

interface ParagraphProps {
  id: string;
  title: string;
  content: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ id, title, content }) => {
    const lines = content.split('\n');
    const contentWithBreaks = lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  
  return (
    <div id={id} className="about-container">
      <h2 className="gray-text text-fade">{title}</h2>
      <p className="gray-text text-fade">{contentWithBreaks}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div>
      <Paragraph
        id="paragraphe1"
        title="Vous avez un projet informatique ou un besoin à nous confier ?"

        content={`Découvrez l'univers de SI Vibes, une entreprise dédiée à l'excellence dans le domaine des solutions informatiques et du portage salarial. Notre expertise s'étend bien au-delà de la simple prestation de services informatiques ; nous sommes vos partenaires de confiance dans la conception, la mise en œuvre et la réalisation de vos projets technologiques.
                  
                  Chez SI Vibes, nous comprenons l'importance de concrétiser vos idées innovantes, c'est pourquoi nous mettons à votre disposition notre équipe d'experts passionnés pour vous accompagner à chaque étape du processus. En plus de notre engagement envers l'innovation technologique, SI Vibes vous offre également la flexibilité du portage salarial. Nous croyons en l'autonomie professionnelle, et c'est pourquoi nous avons développé une approche holistique qui vous permet de jouir des avantages d'une indépendance tout en bénéficiant de la stabilité d'une relation salariale. Grâce à notre offre de portage salarial, vous avez la possibilité de saisir de nouvelles opportunités professionnelles tout en évitant les tracas administratifs. Que vous soyez un consultant indépendant ou une entreprise en pleine expansion, notre solution de portage salarial est conçue pour vous offrir une transition fluide et transparente vers une approche plus agile du travail.

                  Chez SI Vibes, notre passion pour la technologie se conjugue avec notre dévouement à l'autonomie professionnelle pour vous offrir une expérience complète et personnalisée. Nous sommes plus qu'une entreprise de solutions informatiques et de portage salarial - nous sommes vos partenaires, vos facilitateurs et vos collaborateurs dans la concrétisation de vos aspirations professionnelles. Rejoignez-nous dans cette aventure où l'innovation et l'indépendance se rencontrent pour façonner un avenir plus prometteur pour vous et votre entreprise.`}
        />

      <Paragraph
        id="paragraphe2"
        title="Vous cherchez à intégrer un projet informatique ?"
        content="contenu du paragraphe 2... "
      /> 
      <Paragraph
        id="paragraphe3"
        title="Vous cherchez un futur consultant en informatique et vous avez besoin d’accompagnement ?"
        content="Contenu du paragraphe 3..."
      />
      <Paragraph
        id="paragraphe4"
        title="Vous cherchez une société de portage en informatique ?"
        content="Contenu du paragraphe 4..."
      />
    </div>
  );
};

export default Services;
