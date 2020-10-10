// MIDDLEWARE
// https://expressjs.com/fr/guide/writing-middleware.html

// Fonction verifyparamIsOne()
// req: requête envoyée par un client https://expressjs.com/fr/4x/api.html#req
// res: requête que le serveur va renvoyer https://expressjs.com/fr/4x/api.html#res
// next: /!\ c'est une fonction /!\ c'est le middleware suivant
const verifyparamIsOne = (req, res, next) => {
    // Je vérifie que la requête du client contient le paramètre 'param' et que sa valeur est à 1
    console.log(req.query.param);
    if(req.query.param === '1') {
        // Si ou j'apelle le middleware suivant
        next();
    } else {
        // Sinon je retourne une requête avec le status 400 (Bad Request)
        res.sendStatus(400);
    }
}

// Ne pas oublier d'exporter la fonction pour qu'elle sois accessible
exports.verifyparamIsOne = verifyparamIsOne;