// index.js
const express = require('express')

const app = express()
const fs = require('fs');
const request = require('request');
const port = 3000;

const path = require('path');
// chemin absolu du fichier
const spyFilePath = path.join(__dirname, 'spy.gif');
const pixelFilePath = path.join(__dirname, 'pixel.png');

let dataFromMail = "";

app.get('/', async (req, res) => {
    try {
        res.send(
            "Bienvenue dans l'API de validation du module BDD de la semaine de formation à l'informatique !"
            + "\nPour envoyer une réponse, il suffit d'appeler l'API à l'URL actuelle suivie de :"
            + "\n/{numéro de question}/{réponse}" +
            "\nBonne chance !"
        );
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});

app.get('/1/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "5") {
            res.send(
                "Bien joué !" +
                "“ Bravo pour l’étape précédente. Maintenant, on va s'intéresser à la manière dont le coupable a ouvert ce coffre fort. Le fabricant du coffre pourra vous fournir des informations nécessaires. Contactez le fabricant du coffre.” - ADAPolice\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “coffrecreateurs”]\n" +
                "\n" +
                "Tips : Utiliser SELECT * pour cette étape car c’est une petite table.\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Cherchez le numéro de portable du fabricant du coffre et envoyez ça en réponse du mail ! \n"
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});

app.get('/2/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "0645555555" || req.params.reponse === "645555555") {
            res.send(
                "Bien joué !" +
                "“ Le coffre n’a pas de trace d’effraction. Comment le voleur a-t-il ouvert le coffre?” - ADAPolice\n" +
                "“ Jetez un coup d'œil sur la table “coffreOuverture”. J’ai indiqué tous les détails expliquant comment le coffre peut être ouvert.” - Fabricant du coffre\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “coffreOuverture”]\n" +
                "\n" +
                "Tips : Signe d’effraction = “rien”\n" +
                "Tips2. Vous allez finalement utiliser le “WHERE”\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Quel outil le coupable a donc utilisé pour ouvrir le coffre?\n"
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});

app.get('/3/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "Clé" || req.params.reponse === "Cle") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});

app.get('/4/:reponse', async (req, res) => {
    try {
        if (req.params.reponse ==="11") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/5/:reponse', async (req, res) => {
    try {
        if (req.params.reponse==="SELECT * FROM employes WHERE etage=11") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/6/:reponse', async (req, res) => {
    try {
        if (req.params.reponse ==="5") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/7/:reponse', async (req, res) => {
    try {
        if (req.params.reponse ==="0574538452"||req.params.reponse==="574538452") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/8/:reponse', async (req, res) => {
    try {
        if (req.params.reponse ==="erlen.meyer@sbank.fr") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/9/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "Oui" || req.params.reponse === "oui") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/10/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "Bague en diamant" || req.params.reponse === "bague en diamant") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/11/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "ABAMA Baraque" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/12/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "0875468545" || req.params.reponse === "875468545") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/13/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "ayayabama@sbank.fr" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/14/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "bob725@gmail.com" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/15/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "ABABA95" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/16/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "10/04/2022") {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/17/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "12/04/2022" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/18/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "11/04/2022" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/19/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "anne.nanaz@sbank.fr" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/20/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "Tarte aux pommes" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/21/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "Nath Poléon"||req.params.reponse==="nath poléon" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/22/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "anne2502" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/23/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "Visite de famille à Londre" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/24/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "152" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/25/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "basile.m3yer@sbank.fr" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/26/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "483 euros" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/27/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "NIKOLAS SACOSIE"||req.params.reponse==="Nikolas Sacosie" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/28/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "0645875325"|| req.params.reponse === "645875325" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});
app.get('/29/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "007" ) {
            res.send(
                ""
            );
        } else {
            res.send(
                "Mauvaise réponse…"
            );
        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});

app.listen(port, () => {
    console.log(`Le serveur a démarré sur le port ${port}`);
});

// Export the Express API
module.exports = app