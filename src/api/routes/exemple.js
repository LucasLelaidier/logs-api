const express = require('express');
const { check } = require('express-validator');

const route = express.Router();
const exempleMiddleWare = require('../middlewares/exemple');
const validator = require('../middlewares/validator');

module.exports = (app) => {
    // On défini quel url on veut définir
    app.use('/exemple', route);

    // Je définis une vérification des paramètres de la requête
    // voir https://github.com/validatorjs/validator.js#validators
    // Ne pas oublier validator.validate en dernier
    // C'est un tableau de middlewares, donc il faut l'appeler dans la route ou on souhaite l'utiliser
    const criteria = [
        check('param').not().isEmpty(),
        validator.validate
    ];

    // On setup donc une route en méthode GET
    // Ici je met /, ce qui correspond donc à /exemple/ puisqu'on a defini exemple avant
    // premier middleware: criteria qui est le tableau de middleware qui valide les paramètres$
    // deuxième middleware, verifyparamIsOne voir /middlewares/exemple.js
    // Troisième middleware: fonction anonyme qui retourne simplement un texte JSON
    route.get('/', criteria, exempleMiddleWare.verifyparamIsOne, (req, res) => res.json({ "status": "bravo, vous avez passé 1 en paramètre" }));
};