const admin = require('../routes/admin');
const tour = require('../routes/tour');
const express = require('express');

const initRoute = function (app) {
    app.use('/admin', express.static('src/RuangAdmin-master'), admin);
    app.use('/tour', express.static('src/travelco'), tour);
};

module.exports = initRoute;
