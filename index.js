const express = require('express');
const { PORT } = require('./config');
const bodyParser = require('body-parser');

const app = express();
const admin = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('src/travelco'));

app.get('/', (req, res) => {
    res.sendFile('src/travelco/index.html', { root: __dirname });
});

admin.use(express.static('src/RuangAdmin-master'));

admin.get('/', (req, res) => {
    res.sendFile('src/RuangAdmin-master/index.html', { root: __dirname });
});

app.use('/admin', admin);

app.listen(PORT, () => {
    console.log(`Gator app listening on port ${PORT}`)
});