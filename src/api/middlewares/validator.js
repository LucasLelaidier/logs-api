// Middleware qui vérifie que la requête contient bien tous les paramètres attendus
// Faut juste l'utiliser (expliqué dans /routes/exemple.js)

const { validationResult } = require('express-validator');

const validate = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    return next();
};

exports.validate = validate;