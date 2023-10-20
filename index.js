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
        +"\nPour envoyer une réponse, il suffit d'appeler l'API à l'URL actuelle suivie de :"
        +"\n/{numéro de question}/{réponse}" +
            "\nBonne chance !"
        );
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});

app.get('/1/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "5"){
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
        if (req.params.reponse === "0645555555" || req.params.reponse === "645555555"){
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

app.listen(port, () => {
    console.log(`Le serveur a démarré sur le port ${port}`);
});

// Export the Express API
module.exports = app