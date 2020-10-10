const express = require('express');
const exemple = require('./routes/exemple');

// Ici on met en place toutes les routes que l'on a codé dans /routes/
module.exports = () => {
    const app = express.Router();

    exemple(app);

    return app;
};