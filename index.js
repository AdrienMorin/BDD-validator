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
        res.send(```Bienvenue dans l'API de validation du module BDD de la semaine de formation à l'informatique !
        Pour envoyer une réponse, il suffit d'appeler l'API à l'URL actuelle suivie de :
        /{numéro de question}/{réponse}
        ```);
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});

app.listen(port, () => {
    console.log(`Le serveur a démarré sur le port ${port}`);
});

// Export the Express API
module.exports = app