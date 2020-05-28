const routerTour = require('express').Router();
const path = require('path');

routerTour.get('/', (req, res) => {
    res.sendFile(path.resolve('src/travelco/index.html'));
});

module.exports = routerTour;