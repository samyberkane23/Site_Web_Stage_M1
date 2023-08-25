import "./NeedStyles.css";
import React, { ReactNode } from "react";

interface NeedDataProps {
    text: ReactNode;
    heading: ReactNode;
    image: string | undefined;
    btnText: string; // Ajoutez une propriété pour le texte du bouton
    btnLink: string; // Ajoutez une propriété pour le lien du bouton

}

const NeedData: React.FC<NeedDataProps> = (props) => {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
              <a href={props.btnLink} className="btn">{props.btnText}</a>

        </div>
    );
};

export default NeedData;

// import React, { ReactNode, useState } from "react";
// import "./ModalFormStyles.css";
// interface NeedDataProps {
//   text: ReactNode;
//   heading: ReactNode;
//   image: string | undefined;
//   btnText: string; // Ajoutez une propriété pour le texte du bouton
//   btnLink: string; // Ajoutez une propriété pour le lien du bouton

// }

// const NeedData: React.FC<NeedDataProps> = (props) => {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   return (
//     <div className="t-card">
//       <div className="t-image">
//         <img src={props.image} alt="" />
//       </div>
//       <h4>{props.heading}</h4>
//       <p>{props.text}</p>
//       <a href={props.btnLink} className="btn">{props.btnText}</a>
//       {/* <button className="open-form-button" onClick={openForm}>
//         Remplire le formulaire
//       </button> */}
//       {/* {isFormOpen && <ModalForm onClose={closeForm} />} */}
//     </div>
//   );
// };

// export default NeedData;
