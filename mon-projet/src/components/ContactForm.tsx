// import { useState } from "react";
// import "./ContactFormStyles.css";
// import axios from "axios";
// const rows: number = 4;

// function ContactForm() {
//     const [Email, setEmail] = useState("");
//     const [Sujet, setSubject] = useState("");
//     const [Message, setMessages] = useState("");
//     const [error, setError] = useState(""); // Ajouter le state pour l'erreur

//     function sendMail() {

//         if (Email && Sujet && Message) {

//             axios.post('http://localhost:8000/send_email', {
//                 sender_email: Email,
//                 subject: Sujet,
//                 message: Message,
//             })
//             .then(() => alert('Message envoyé avec succès'))
//             .catch(error => setError('Erreur lors de l\'envoi du message')); // Afficher l'erreur ici
//         } else {
//             setError('Veuillez remplir tous les champs.'); // Afficher l'erreur ici
//         }
//         console.log({ recipient_email: Email, subject: Sujet, message: Message }); // Ajoutez cette ligne pour vérifier les données


//     }

//     return (
//         <div className="form-container">
//             <h1>Envoyez-nous un mail</h1>
//             {error && <p className="error">{error}</p>} {/* Afficher l'erreur ici */}
//             <form>
//                 <input name="nom" placeholder="Nom" />
//                 <input
//                 name="email"
//                     placeholder="Email"
//                     onChange={e => setEmail(e.target.value)}
//                 />
//                 <input
                
//                 name="sujet"
//                     placeholder="Sujet"
//                     onChange={e => setSubject(e.target.value)}
//                 />
//                 <textarea
//                 name="message" 
//                     placeholder="Message"
//                     rows={rows}
//                     onChange={e => setMessages(e.target.value)}
//                 ></textarea>
//                 <button type="button" onClick={() => sendMail()}>Envoyez un mail</button>

//             </form>
//         </div>

        
//     );
// }

// export default ContactForm;

// import { useState } from "react";
// import "./ContactFormStyles.css";
// import Swal from "sweetalert2";
// import axios from "axios";
// const rows: number = 4;

// function ContactForm() {
//     const [Name, setName] = useState<string>("");
//     const [Email, setEmail] = useState<string>("");
//     const [Sujet, setSubject] = useState<string>("");
//     const [Message, setMessages] = useState<string>("");
//     const [error, setError] = useState<string>("");

//     function sendMail() {
//         if (Name && Email && Sujet && Message) {
//             setError("");
//             axios.post('http://localhost:8000/send_email', {
//                 sender_name: Name,
//                 sender_email: Email,
//                 recipient_email: 'e17836675@gmail.com',
//                 subject: Sujet,
//                 message: Message,
//             })
//             .then(() => {
//                 Swal.fire("success","envoyé avec succés", "success");
//                 setName(""); // Réinitialiser les champs du formulaire après l'envoi réussi
//                 setEmail("");
//                 setSubject("");
//                 setMessages("");
//             })
//             .catch(error => setError('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.'));
//         } else {
//             setError('Veuillez remplir tous les champs.');
//         }
//     }

//     return (
//         <div className="form-container">
//             <h1>Envoyez-nous un mail</h1>
//             {error && <p className="error">{error}</p>}
//             <form>
//                 <input 
//                     name="nom" 
//                     placeholder="Nom" 
//                     value={Name}
//                     onChange={e => setName(e.target.value)}
//                 />
//                 <input
//                     name="email"
//                     placeholder="Email"
//                     value={Email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//                 <input
//                     name="sujet"
//                     placeholder="Sujet"
//                     value={Sujet}
//                     onChange={e => setSubject(e.target.value)}
//                 />
//                 <textarea
//                     name="message" 
//                     placeholder="Message"
//                     rows={rows}
//                     value={Message}
//                     onChange={e => setMessages(e.target.value)}
//                 ></textarea>
//                 <button type="button" onClick={() => sendMail()}>Envoyez un mail</button>
//             </form>
//         </div>
//     );
// }

// export default ContactForm;

import { useState } from "react";
import "./ContactFormStyles.css";
import Swal from "sweetalert2";
import axios from "axios";
const rows: number = 4;

function ContactForm() {
    const [FirstName, setFirstName] = useState<string>(""); // Nouvel état pour le prénom
    const [Name, setName] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    const [Telephone, setTelephone] = useState<string>("");
    const [Sujet, setSubject] = useState<string>("");
    const [Message, setMessages] = useState<string>("");
    const [error, setError] = useState<string>("");

    function sendMail() {
        if (FirstName && Name && Email && Sujet && Message) {
            setError("");
            axios.post('http://localhost:8000/send_email', {
                sender_name: Name,
                sender_email: Email,
                recipient_email: 'e17836675@gmail.com',
                subject: Sujet,
                telephone: Telephone,
                first_name: FirstName, // Ajout du prénom
                message: Message,
            })
            .then(() => {
                Swal.fire("success","envoyé avec succés", "success");
                setFirstName(""); // Réinitialisation du prénom
                setName("");
                setEmail("");
                setTelephone("");
                setSubject("");
                setMessages("");
            })
            .catch(error => setError('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.'));
        } else {
            setError('Veuillez remplir tous les champs.');
        }
    }

    return (
        <div className="form-container">
            <h1>Envoyez-nous votre demande</h1>
            {error && <p className="error">{error}</p>}
            <form>
                <input 
                    name="prenom" // Champ pour le prénom
                    placeholder="Prénom"
                    value={FirstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <input 
                    name="nom" 
                    placeholder="Nom" 
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    name="email"
                    placeholder="Email"
                    value={Email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    name="telephone"
                    placeholder="Téléphone"
                    value={Telephone}
                    onChange={e => setTelephone(e.target.value)}
                />
                <select
                    name="sujet"
                    value={Sujet}
                    onChange={e => setSubject(e.target.value)}
                >
                    <option value="">Choisissez un sujet</option>
                    <option value="Vous avez un projet à nous confier ?">Vous avez un projet à nous confier ?</option>
                    <option value="Vous cherchez à intégrer un projet informatique ?">Vous cherchez à intégrer un projet informatique ?</option>
                    <option value="Vous cherchez un futur consultant en informatique et vous avez besoin d’accompagnement ?">Vous cherchez un futur consultant en informatique et vous avez besoin d’accompagnement ?</option>
                    <option value="Vous cherchez une société de portage en informatique ?">Vous cherchez une société de portage en informatique ?</option>
                    <option value="Vous cherchez un(e) stagiaire ou alternant(e) en informatique ?">Vous cherchez un(e) stagiaire ou alternant(e) en informatique ?</option>
                    <option value="Vous cherchez un stage ou alternance en informatique ?">Vous cherchez un stage ou alternance en informatique ?</option>
                </select>
                <textarea
                    name="message" 
                    placeholder="Pouvez-vous nous en dire plus sur votre demande ?"
                    rows={rows}
                    value={Message}
                    onChange={e => setMessages(e.target.value)}
                ></textarea>
                <button type="button" onClick={() => sendMail()}>Envoyez ma demande</button>
            </form>
        </div>
    );
}

export default ContactForm;
