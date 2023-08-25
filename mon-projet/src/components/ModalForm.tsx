import React, { useState } from "react";
import "./ModalFormStyles.css";

interface ModalFormProps {
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [contrat, setContrat] = useState("");
  const [salaire, setSalaire] = useState("");
  const [tjm, setTjm] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Effectuer le traitement du formulaire ici
    // Peut-être envoyer les données au serveur
    // et gérer la logique de succès ou d'erreur

    // Fermer la fenêtre modale après avoir soumis le formulaire
    onClose();
  };

  return (
    <div className="modal-overlay modal-form-container ">
      <div className="modal-content modal-form-container">
        <h2>Remplissez le formulaire</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nom *:
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </label>
          <label>
            Prénom *:
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </label>
          <label>
            Email *:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Telephone :
            <input
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </label>
          <label>
            Votre localisation* :
            <select
              value={localisation}
              onChange={(e) => setLocalisation(e.target.value)}
              required
            >
              <option value="">Sélectionnez une région</option>
              <option value="region1">Région 1</option>
              <option value="region2">Région 2</option>
              {/* Ajoutez d'autres options de région ici */}
            </select>
          </label>
          <label>
            Type de contrat :
            <select
              value={contrat}
              onChange={(e) => setContrat(e.target.value)}
            >
              <option value="">Sélectionnez un contrat</option>
              <option value="CDI">CDI</option>
              <option value="CDD">CDD</option>
              <option value="Portage">Portage</option>
              <option value="Alternance">Alternance</option>
              <option value="Stage">Stage</option>
            </select>
          </label>
          <label>
            Salaire souhaité :
            <input
              type="text"
              value={salaire}
              onChange={(e) => setSalaire(e.target.value)}
            />
          </label>
          <label>
            TJM :
            <input
              type="text"
              value={tjm}
              onChange={(e) => setTjm(e.target.value)}
            />
          </label>
          <label>
            Pouvez-vous nous en dire plus sur votre demande ?*
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>

          <button type="submit">Envoyez ma demande</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Fermer
        </button>

      </div>
    </div>
  );
};

export default ModalForm;
