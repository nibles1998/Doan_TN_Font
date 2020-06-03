const express = require('express');
const { PORT } = require('./config');
const bodyParser = require('body-parser');
const initRoute = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

initRoute(app);

app.listen(PORT, () => {
    console.log('\x1b[33m%s\x1b[0m', `WebsiteAppication listening on port ${PORT}`);
});