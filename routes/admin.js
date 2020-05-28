const routerAdmin = require('express').Router();
const path = require('path');

routerAdmin.get('/', (req, res) => {
    res.sendFile(path.resolve('src/RuangAdmin-master/login.html'));
});

module.exports = routerAdmin;