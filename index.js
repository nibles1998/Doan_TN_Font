const express = require('express');
const { PORT } = require('./config');

const app = express();
const admin = express();

app.use(express.static('src/travelco'));

app.get('/', (req, res) => {
    res.render('index');
});

admin.use(express.static('src/RuangAdmin-master'));

admin.get('/', (req, res) => {
    res.render('index');
});

app.use('/admin', admin);

app.listen(PORT, () => {
    console.log(`Gator app listening on port ${PORT}`)
});