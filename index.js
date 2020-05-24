const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send();
});

app.listen(4445, () => console.log('Gator app listening on port 4445!'));