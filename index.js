const express = require('express');
const { PORT } = require('./config');
const bodyParser = require('body-parser');
const initRoute = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

initRoute(app);

app.listen(PORT, () => {
    console.log(`Gator app listening on port ${PORT}`);
});