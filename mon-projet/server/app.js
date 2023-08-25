// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const app = express();
// const bodyParser = require('body-parser');
// const port = 8000;

// app.use((req, res, next) => {
//     res.setHeader(
//         "Content-Security-Policy",
//         "default-src 'self'; img-src 'self' http://localhost:8000;"
//     );
//     next();
// });

// //envoyer du front au bac
// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ limit: "25mb" }));
// app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.setHeader("access-control-allow-origin", "*");
//     next();
// });

// const myemail = 'e17836675@gmail.com';
// const mypassword = 'dommjkvkquwwigpf';

// function sendEmail({ recipient_email, subject, message }) {
//     return new Promise((resolve, reject) => {
//         var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: myemail,
//                 pass: mypassword
//             }
//         });

//         const mail_configs = {
//             from: myemail,
//             to: recipient_email,
//             subject: subject,
//             text: message,
//         };

//         transporter.sendMail(mail_configs, function (error, info) {
//             if (error) {
//                 console.log(error);
//                 return reject({ message: 'Error' });
//             }
//             return resolve({ message: 'Email envoyé avec succès' });
//         });
//     });
// }

// app.get("/", (req, res) => {
//     res.send("Bienvenue sur le serveur d'envoi de mails ddddd.");
// });

// app.post("/send_email", (req, res) => {
//     console.log("Requête reçue :", req.body);
//         sendEmail(req.body)
//         .then(response => res.send(response.message))
//         .catch(error => res.status(500).send(error.message));
// });

// app.listen(port, () => {
//     console.log(`Écoute à http://localhost:${port}`);
// });


// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const app = express();
// const bodyParser = require('body-parser');
// const { log } = require('console');
// const port = 8000;

// app.use((req, res, next) => {
//     res.setHeader(
//         "Content-Security-Policy",
//         "default-src 'self'; img-src 'self' http://localhost:8000;"
//     );
//     next();
// });

// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ limit: "25mb" }));
// app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.setHeader("access-control-allow-origin", "*");
//     next();
// });

// const myemail = 'e17836675@gmail.com'; // Email de l'entreprise
// const mypassword = 'dommjkvkquwwigpf';

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: myemail,
//         pass: mypassword
//     }
// });

// function sendEmail({ sender_email, sender_name,recipient_email, subject, message }) {
//     const mail_configs = {
//         from: `"${sender_name}" <${sender_email}>`, // Utiliser le nom de l'expéditeur et l'email de l'entreprise
//         to: recipient_email, // Utiliser l'email de l'entreprise comme destinataire
//         replyTo: `"${sender_name}" <${sender_email}>`, // Définir l'adresse de réponse à l'expéditeur
//         subject: subject,
//         text: `De: ${sender_name} <${sender_email}>\n\n${message}`,
//         html:`
//             <p><strong>Nom:</strong> ${sender_name}</p>
//             <p><strong>Sujet:</strong> ${subject}</p>
//             <p><strong>Message:</strong> ${message}</p>

//         `,
//     };
//     console.log(sender_email);
//     console.log(sender_name);
//     console.log(recipient_email);
//     console.log(subject);
//     console.log(message);
//     return new Promise((resolve, reject) => {
//         transporter.sendMail(mail_configs, function (error, info) {
//             if (error) {
//                 console.log(error);
//                 return reject({ message: 'Error' });
//             }
//             return resolve({ message: 'Email envoyé avec succès' });
//         });
//     });
// }

// app.get("/", (req, res) => {
//     res.send("Bienvenue sur le serveur d'envoi de mails.");
// });

// app.post("/send_email", (req, res) => {
//     console.log("Requête reçue :", req.body);
//     sendEmail(req.body)
//         .then(response => res.send(response.message))
//         .catch(error => res.status(500).send(error.message));
// });

// app.listen(port, () => {
//     console.log(`Écoute à http://localhost:${port}`);
// });


const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { log } = require('console');
const port = 8000;

app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; img-src 'self' http://localhost:8000;"
    );
    next();
});

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("access-control-allow-origin", "*");
    next();
});

const myemail = 'e17836675@gmail.com'; // Email de l'entreprise
const mypassword = 'dommjkvkquwwigpf';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: myemail,
        pass: mypassword
    }
});

function sendEmail({ sender_name, sender_email, recipient_email, subject, message, first_name, telephone }) {
    const formattedMessage = message.replace(/\n/g, "<br>"); // Convertir les retours à la ligne en balises <br>
    const mail_configs = {
        from: `"${sender_name}" <${sender_email}>`, // Utiliser le nom de l'expéditeur et l'email de l'entreprise
        to: recipient_email, // Utiliser l'email de l'entreprise comme destinataire
        replyTo: `"${sender_name}" <${sender_email}>`, // Définir l'adresse de réponse à l'expéditeur
        subject: subject,
        text: `De: ${sender_name} <${sender_email}>\n\n${message}`,
        html: `
            <p><strong>Prénom:</strong> ${first_name}</p>
            <p><strong>Nom:</strong> ${sender_name}</p>
            <p><strong>Email:</strong> ${sender_email}</p>
            <p><strong>Téléphone:</strong> ${telephone}</p>
            <p><strong>Sujet:</strong> ${subject}</p>

            <p><strong>Message:</strong><br>${formattedMessage}</p>
        `,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: 'Error' });
            }
            return resolve({ message: 'Email envoyé avec succès' });
        });
    });
}

app.get("/", (req, res) => {
    res.send("Bienvenue sur le serveur d'envoi de mails.");
});

app.post("/send_email", (req, res) => {
    console.log("Requête reçue :", req.body);
    sendEmail(req.body)
        .then(response => res.send(response.message))
        .catch(error => res.status(500).send(error.message));
});

app.listen(port, () => {
    console.log(`Écoute à http://localhost:${port}`);
});
