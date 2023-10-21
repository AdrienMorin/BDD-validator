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
            "\nPour lancer la première énigme, il suffit d'appeler l'API avec question numéro 0 et réponse = enigme " +
            "\nBonne chance !"
        );
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
});

app.get('/0/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "enigme") {
            res.send(
                "Bienvenu, Agent !\n" +
                "Voici votre mission du jour! Un diamant a été volé du coffre-fort à la banque SBANK. Nous avons besoin de vous, détective affilié à l’INSAgent-secret spécialisé en résolution d’enquête à travers des outils informatiques, pour retrouver le voleur.\n" +
                "°˖✧◝(⁰▿⁰)◜✧˖° \n" +
                "\n" +
                "Vous êtes un des meilleur agent secret du groupe! \n" +
                "Votre mission est d’attraper le COUPABLE en utilisant les informations de la base de données et en résolvant les énigmes!\n" +
                "“ Nous avons reçu la base des données contenant la liste des trésors. Il s’agit de la table “coffreFort”. Jetez un coup d’oeil et informez-nous il y a combien de trésors au fond de ce coffre ” - ADAPolice \n" +
                "\n" +
                "Bon… Du coup la police vous a donné le nom de la table concernée sans donner trop de détails. Puisque c’est vos premières lignes de code, on va vous montrer un petit exemple! \n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “coffreFort”]\n" +
                "\n" +
                "Pour lire “tous les données” de la table coffreFort, testez ceci :\n" +
                "SELECT *\n" +
                "FROM coffreFort\n" +
                "\n" +
                "On ne va quand-même pas toujours tout afficher… C’est trop lourd. Puisque là on s'intéresse juste à compter les objets, on peut juste lire le nom des objets par exemple:\n" +
                "SELECT objets\n" +
                "FROM coffreFort\n" +
                "\n" +
                "Par contre, vous pouvez peut-être voir que certaine ligne s’agit d’un objet du même nom (car il y a par exemple plusieurs diamants dans le coffre). Utilisez le mot “DISTINCT” sur “objets” pour ne pas afficher les répétitions:\n" +
                "SELECT DISTINCT objets\n" +
                "FROM coffreFort\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "Question 1 : Maintenant, compter les lignes pour obtenir le nombre des éléments dans le coffre, puis, envoyez un mail en réponse en suivant les indications qu’on vous a apprises plus tôt.\n"
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

app.get('/1/:reponse', async (req, res) => {
    try {
        if (req.params.reponse === "5") {
            res.send(
                "Bien joué !" +
                "“ Bravo pour l’étape précédente. Maintenant, on va s'intéresser à la manière dont le coupable a ouvert ce coffre fort. Le fabricant du coffre pourra vous fournir des informations nécessaires. Contactez le fabricant du coffre.” - ADAPolice\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “coffreCreateurs”]\n" +
                "\n" +
                "Tips : Utiliser SELECT * pour cette étape car c’est une petite table.\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Question 2 : Cherchez le numéro de portable du fabricant du coffre et envoyez ça en réponse du mail ! \n"
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
                "Question 3 : Quel outil le coupable a donc utilisé pour ouvrir le coffre?\n"
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
        if (req.params.reponse === "Clé" || req.params.reponse === "Cle" || req.params.reponse === "clef" || req.params.reponse === "Clef") {
            res.send(
                "L’outil utilisé est donc une clé!\n" +
                "Intéressons maintenant à un autre détail. Où est le coffre? \n" +
                "Vous contactez votre collègue, un hacker, s’il connaît la localisation de ce coffre au sein de la banque. Attention, il nous troll souvent.\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : votre cerveau]\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "“OUiiiiiii j3 sAis où e5T le c0FfRe. C’35t à l’éTAge [1011] :) \n" +
                "Lololololol.\" - Agent Z\n" +
                "Question 4 : Quel est l’étage du coffre?\n"
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
                "Qui sont les personnes qui peuvent obtenir la clé d’accès ? Vous soupçonnez des employés.\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : \"employes\"]\n" +
                "\n" +
                "Tips: Utiliser SELECT nom, prenom\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "“PaR ailLeurRrrRs, seUls le5 eMpl0yés qui trAva1lleNT au mêM3 étAge qUe le coFfre f0rT ont aCcè5 à la sALLe. ╰(*°▽°*)╯” - Agent Z   \n" +
                "\n" +
                "Il y a trop d’employés. Vous devez les filtrer en cherchant seulement ceux qui travaillent à l’étage concerné.\n" +
                "\n" +
                "Question 5 : Aviez-vous réussi? Votre collègue souhaite vous aider un peu mais il a besoin de voir votre avancement. Quelle est la requête (le code SQL) utilisée? "
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
        if (req.params.reponse==="SELECT nom, prenom FROM employes WHERE etage=11" || req.params.reponse==="SELECT nom, prenom FROM employes WHERE etage=11;" || req.params.reponse==="SELECT nom, prenom FROM employes WHERE etage = 11" || req.params.reponse==="SELECT nom, prenom FROM employes WHERE etage = 11;" || req.params.reponse==="select nom, prenom from employes where etage=11" || req.params.reponse==="select nom, prenom from employes where etage=11;") {
            res.send(
                "“ 0k, la r3QuêTe e5t cOrREct3. SUuuupEr! Co0l! (☞ﾟヮﾟ)☞\n" +
                "J3 te d0NNe aLoRrrs uNe nOUveLLe inD1cati0n : le cOupaBle a sûREmeNt un sALaire c0mpr1s eNTRe 1000 et 1500 €!” - Ton best bro, Agent Z\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “employes”]\n" +
                "\n" +
                "Tips : On va commencer à donner moins de tips car plus c’est loin plus c’est dur!\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Filtrer encore plus votre requête de l’étape 5 avec ces nouvelles caractéristiques.\n" +
                "Question 6 : Combien de suspects avez-vous obtenu après ce filtrage?"
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
                "Il vous reste donc 5 suspects. Par contre, ce serait difficile de les analyser un par un en un jour! (car vous avez déjà envie de rentrer chez vous). Vous avez besoin de plus d’indices… Disons… on cherchera à avoir 3 suspects au maximum.\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : votre cerveau]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "Ah! Et si on demande des informations supplémentaires à l’agence de police?\n" +
                "\n" +
                "“Des pistes pour votre enquête? Bahh… Ce n'est pas moi qui suis responsable en tout cas. \n" +
                "Voici les affaires en cours : https://we.tl/t-l4FcGWbKHf \n" +
                "Question 7 : Cherchez le numéro de téléphone portable de l’officier responsable et contactez-le vous-même” - Assistant de l’agence officier\n"
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
                "“ Bonjour. Nous avons une information supplémentaire concernant un objet retrouvé sur la scène de l’incident. Puisque ce n’est pas un trésor volé, la police n’a pas enregistré les détails de cet objet. Vous pouvez contacter le témoin qui a trouvé l’objet. Il s’agit d’une employée de SBank appelé Erlen Meyer.” - Officier responsable de l’affaire\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “employes”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Mais comment pourra-t-on contacter le témoin sans son numéro de téléphone ou son mail?! Heureusement, vous savez que cette personne est une employée de SBank et vous avez en possession la table “employes” ayant tous les informations de tous ceux qui travaillent ici.\n" +
                " \n" +
                "Question 8 : Cherchez cette personne et récupérez son adresse mail."
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
        if (req.params.reponse ==="erlen.meyer@sbank.com") {
            res.send(
                "Vous avez envoyé un mail à Erlen pour lui demander si c’est vrai qu’elle a trouvé un objet sur le sol. Par contre, son ordinateur est un peu buggé…\n" +
                "\n" +
                "Voici le contenu de son mail :\n" +
                "“ 01001111 01110101 01101001 ” - Erlen Meyer \n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : votre cerveau]\n" +
                "Tips: ASCII\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Question 9 : Traduisez ce message en quelque chose de plus compréhensible. Quelle est sa réponse?\n"
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
                "Bon ok. Elle a dit “Oui” à notre question. Suite à sa réponse, vous lui avez demandé quel est l’objet qu’elle a retrouvé sur le sol. \n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : votre cerveau]\n" +
                "Tips: Encore?\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "“01000010 01100001 01100111 01110101 01100101 00100000 01100101 01101110 00100000 01100100 01101001 01100001 01101101 01100001 01101110 01110100” -  Erlen Meyer\n" +
                "\n" +
                "Question 10 : Qu’elle est l'objet qu’elle a trouvé?\n"
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
                "Une bague en diamant?!! Puisque cette bague n’est pas l’un des trésors du coffre, elle appartient sûrement au coupable. En plus, il s’agit d’une bague de mariage. Vous suspectez donc que le voleur est marié. \n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “employes”]\n" +
                "\n" +
                "Tips: Un salarié marié a l’attribut “statutMarital” à 1. Un salarié célibataire a cette même attribut à 0.\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "Modifiez votre requête de filtrage (celui de l’étape 6) en ajoutant cette dernière caractéristique suspecte.\n" +
                "Triez ces salariés par ordre alphabétique (nom puis prenom) avec ORDER BY .\n" +
                "\n" +
                "Question 11 : Quel est le nom et prénom de la première personne de la liste?(format:Nom Prénom)\n"
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
        if (req.params.reponse === "ABAMA Baraque" || req.params.reponse === "Abama Baraque") {
            res.send(
                "Contactons “Baraque Abama”. Question 12 :  Quel est son numéro de téléphone portable?\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “employes”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"
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
                "Malheureusement, Baraque ne répond pas à l’appel. Il faudra donc le contacter d’une manière différente…\n" +
                "\n" +
                "“H3y! ApPAaaareMM3nt sa feMme b0sSe aUSsi à SbAnk! ” (/ °[] °)/ - Agent Z\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “employes”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "Question 13 : Cherchons l’adresse mail de la femme de Baraque.\n"
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
                "“ Bonjour, je suis Aya Abama.\n" +
                "Mon mari est actuellement en voyage au Canada. \n" +
                "Si vous avez des questions concernant son travail, veuillez contacter ses collègues.\n" +
                "Voici une carte de travail d’un d’entre eux : https://we.tl/t-qiEYhFwzsQ \n" +
                "\n" +
                "Cordialement,” - Aya Abama \n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé: Votre cerveau] \n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Question 14 : Contactez le collègue de Baraque par téléphone ou par mail.\n"
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
                "“ Je n’arrive pas à croire que Baraque est dans la liste des suspects. Je vous jure que cet homme est très charitable et doux, en plus, il ne se plaint jamais de son boulot. \n" +
                "Par ailleurs, il a bien mérité ce voyage au Québec! C’est le bon karma qui l’a fait gagner à la loterie” - Bob Eponge\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé: SQL] \n" +
                "[Table concernée : “employes”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "C’est quand même étrange que c’est exactement à cette semaine qu’il gagne soudainement à la loterie, obtient une grosse somme d’argent, et voyage très loin.\n" +
                "On trouvera peut-être des indices dans les dates.\n" +
                "Vérifions quand est-ce qu’il a demandé ses congés.\n" +
                "\n" +
                "Les dates de congés se trouvent sur une autre table utilisant comme attribut les codes d’employés et pas leur nom. Commençons par chercher cette information sur la table “employés”.\n" +
                "Question 15 : Quel est le code de Baraque Abama?\n"
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
                "“Baraque a demandé ses congés le même jour qu’il a appris qu’il a gagné à la loterie. En plus, c’est ses premiers congés depuis un an. Il les mérite totalement!” - Sonique Ninjah, un autre collègue de Baraque\n" +
                "\n" +
                "Question 16 : En utilisant son code Employé “ABABA95”, chercher dans la table d’informations concernant les congés sa date de demande de congé. \n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé: SQL] \n" +
                "[Table concernée : “employesConges”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"
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
        if (req.params.reponse === "10/04/2022" || req.params.reponse === "10.04.2022") {
            res.send(
                "Question 17 : Quel est la date quand les trésors ont été volés? \n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé: Votre cerveau] \n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"
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
        if (req.params.reponse === "12/04/2022" || req.params.reponse === "12.04.2022") {
            res.send(
                "Vous voulez aussi vérifier si le ticket d’avion a été bien acheté après la date qu’il réclame gagner la loterie. Vous demandez donc à votre collègue s’il peut vous retrouver ces détails.\n" +
                "\n" +
                "“Ok Br0! 3…2…1… HOP! C’est fAit! (∩｀-´)⊃━☆ﾟ.*･｡ﾟ\n" +
                "J’Ai m1s LA faCTuRe du b1LLet d’aV10n eN pIèCe-j0INte. Ch3ck it OUt! https://we.tl/t-MmHgsCqe6P ” - Agent Z\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé: Votre cerveau] \n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "Question 18 : Quand Baraque a-t-il payé son billet d’avion?\n"
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
        if (req.params.reponse === "11/04/2022" || req.params.reponse === "11.04.2022") {
            res.send(
                "Vous avez fini d’investiguer le premier suspect. \n" +
                "Passons donc à la deuxième personne: Mme. Anne Nanaz. \n" +
                "Question 19 : Quel est son email?\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé: SQL] \n" +
                "[Table concernée : “employes”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"
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
                "“Bonjour,\n" +
                "Veuillez m’excuser d’avance pour mon désagrément, mais je trouve que vous êtes très insolents à m’accuser comme cela.\n" +
                "Je n’ai pas d’intention de révéler mes informations personnelles. Je suis très occupée et je n’ai pas de temps pour m'intéresser à votre jeu de détective. \n" +
                "\n" +
                "Très cordialement et en vous souhaitant une bonne journée,” - Anne Nanaz\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé: Votre cerveau] \n" +
                "Tips: HEX\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "“ 0 ooh! T’3s cO1nCé cAr le SUSp3ct ne c0LLaBORe pas? No pR0bL3mo BRO ⊂◉‿◉つ    je ré5OUs çA raP1d0” - Agent Z\n" +
                "\n" +
                "Après quelques secondes, vous recevez un nouveau mail:\n" +
                "\n" +
                "“Bonjour.\n" +
                "J’ai changé d’avis. Je vous offre une chance de me poser une question. \n" +
                "Si vous résolvez l’énigme ci-dessous, je répondrai à vos interrogations : \n" +
                "[54 61 72 74 65 20 61 75 78 20 70 6F 6D 6D 65 73]\n" +
                "Sincèrement,” - Anne Nanaz\n" +
                "(Question 20)"
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
                "“Chers détectives,\n" +
                "Surprenamment, vous avez vraiment réussi à résoudre mon énigme.\n" +
                "Je vous adresse toutes mes félicitations. \n" +
                "\n" +
                "Sur ce, malheureusement, je suis actuellement très occupée avec mes tâches et je ne pourrai pas répondre à vos questions. \n" +
                "Veuillez contacter mon ami, le plus jeune de l’entreprise.\n" +
                "\n" +
                "Bonne semaine à vous,” - Anne Nanaz\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “employes”]\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "Question 21 : Quel est le nom et prénom de cette personne?\n"
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
        if (req.params.reponse === "Nath Poléon"||req.params.reponse==="nath poléon" || req.params.reponse==="Poléon Nath") {
            res.send(
                "“Bonjour M./Mme. les Détectives ! \n" +
                "Je m’appelle Nath et je travaille à SBank depuis l’an dernier.\n" +
                "Ça fait quelques mois que je suis devenu ami avec Anne. Il se peut qu’elle donne une impression un peu désagréable à votre première rencontre, mais au fond, c’est une gentille dame.\n" +
                "Ces derniers temps, j'ai appris à Anne comment utiliser les médias sociaux et elle est devenue légèrement addicte. \n" +
                "Je suis certain que vous pouvez retrouver des indices sur ses posts de Twitta.” - Nath Poléon\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL et un bout de votre cerveau]\n" +
                "[Table concernée : “employes”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Apparemment, l’username est son prénom suivi de sa date de naissance (JJMM) . \n" +
                "Question 22 : Quel est le username de compte twitta de notre suspect?"
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
                "Vous avez accès à la base de données de Twitta. Filtrez la table en utilisant l’username de Anne.\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “twittar”]\n" +
                "Tips : Vérifiez le format des dates de cette table\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Question 23 : Que fait Anne le jour de l’incident? \n"
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
        if (req.params.reponse === "Visite de famille à Londres" || req.params.reponse === "visite de famille à Londres" || req.params.reponse === "visite en famille à Londres" || req.params.reponse === "Visite en famille à Londres") {
            res.send(
                "Anne n’est pas à l’entreprise le jour du vol de trésors. Apparemment, elle est en vacances chez sa famille à Londre. Vérifiez si elle a vraiment pris des congés.\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “employesConges”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Le code d’employé de Anne est “NANAN80” \n" +
                "Question 24 : Si elle a demandé un congé recemment, donner le id de sa demande de congé.\n" +
                "Si non, répondre “NON”\n"
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
                "Question 25 : Vous avez fini d’investiguer le 2nd suspect. Passons maintenant à la dernière personne: Basile Meyer. Quelle est son adresse mail?\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée : “employes”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"
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
                "“Bonjour,\n" +
                "Je m’appelle Basile Meyer et je travaille en finance chez Sbank.\n" +
                "C’est un plaisir de faire votre connaissance, détective, mais il faut que je finisse mon travail actuel avant de pouvoir vous assister.  Ça prendra un peu de temps car j’ai perdu ma calculatrice… Pourriez-vous m’aider? Voici le lien du fichier : https://we.tl/t-h8jTfz4WYV” - Basile Meyer\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : Votre cerveau]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Question 26 : Quelle est la réponse que Basile cherchait?\n"
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
        if (req.params.reponse === "483 euros" || req.params.reponse === "483€" || req.params.reponse === "483 €" || req.params.reponse === "483") {
            res.send(
                "Vous demandez à Basile ce qu’il faisait le jour de l’accident. \n" +
                "\n" +
                "“Le 12/04/2022? Dans la journée, j’avais des réunions avec notre client AquaWorld qui souhaite utiliser notre service de paiement. Le soir, j’avais un dîner avec mon chef de l’équipe au restaurant Ratontouille. Je n’ai pas mis pied dans l’entreprise ce jour-ci.\n" +
                "SI vous voulez confirmer, vous pouvez demander à mon chef de projet” - Basile Meyer\n" +
                "    \n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée: “employes”]\n" +
                "Tips: le chef de projet de Basile a comme métier “Chef Finance” sur la table\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "Question 27 : Quel est le nom et prénom de cette personne?\n"
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
        if (req.params.reponse === "NIKOLAS SACOSIE"||req.params.reponse==="Nikolas Sacosie" ||req.params.reponse==="Sacosie Nikolas") {
            res.send(
                "Vous contactez le chef de l’équipe de Finance.\n" +
                "“Oui, le 12/04, M.Meyer avait assisté à la réunion de formation avec notre partenaire AquaWorld de 8:00 à 16:00 et je peux confirmer que personne ne l’a vu à l’entreprise. A 19:00, nous avons diné ensemble dans un restaurant pour discuter des conséquences de ce partenariat.”\n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : SQL]\n" +
                "[Table concernée: “employes”]\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Question 28 : Appeler Basile pour demander pourquoi il n’est pas revenu à l’entreprise entre 16:00 et 18:00."
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
                "Question 29 : “Oui oui oui. J’ai terminé ma réunion avec AquaWorld à 16:00 et j’ai un peu hésité à retourner à l’entreprise. Mais je me suis rendu compte que j’ai laissé mon badge d’accès à la maison. Puisque je n’ai pas de temps de retourner chez moi puis revenir à l’entreprise, j’ai attendu jusqu’à 19:00 à StarBACKs, à côté du restaurant.” - Erlen Meyer \n" +
                "\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : Votre cerveau]\n" +
                "Tips: Dec → Char\n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "\n" +
                "Vous avez interrogé les trois suspects et il est temps de trouver le coupable. \n" +
                "Appeler le numéro de votre collègue Agent Z pour conclure. \n" +
                "Vous vous rappelez plus de son numéro mais voici les notes qu’il a laissées sur votre ordinateur.\n" +
                "\n" +
                "“[48 48 55] So call me maybe 〔´∇｀〕” - Agent Z "
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
                "“HeYyYyyy ! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Tu eS pRêt à aTTr4per LE c0UPabLe? VAs-y, c’3St ki? ” - Agent Z\n" +
                "\n" +
                "Le document final.pdf est verrouillé avec le nom du coupable. \n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "[Outil utilisé : Votre cerveau]\n" +
                "Ceci est la fin de votre enquête, vous n’avez plus besoin d’envoyer de requête à l'API.\n" +
                "\n" +
                "Tips : Lire le résumé de l’enquête et concluez qui est le coupable selon vous\n" +
                "Tips2 : Entrez le nom du coupable dans le pdf, tout en majuscule sans espace et sans accent\n" +
                "exemple: Bob Smith → BOBSMITH\n \n" +
                + "lien des fichiers : https://we.tl/t-md9pyLRyC9 \n" +
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
                "Question 30 : La conclusion de cette enquête sera révélée après l’ouverture du document.\n"
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