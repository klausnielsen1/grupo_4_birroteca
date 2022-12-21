const express = require('express');
const app = express();

const path = require('path');

app.use(express.static("public"));

const port = 3000;



app.listen(port, () => {
    console.log('Servidor corriendo en puerto', port);
});

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
