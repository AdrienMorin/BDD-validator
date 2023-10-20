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
        res.send("Hello world!");
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});

app.listen(port, () => {
    console.log(`Le serveur a démarré sur le port ${port}`);
});

// Export the Express API
module.exports = app