//Express
const express = require ('express');
const dbConexion = require('./config/mongo.config');
const app = express();
const cors = require('cors');

dbConexion();


app.use(express.json());
app.use(cors())


//http://localhost:3000/
app.use('/api/usuario', require('./routes/usuario.routes'));
app.use('/api/ruleta', require('./routes/ruleta.routes'));

app.listen(3000, function(){
    console.log('Servidor si esta corriendo');  
});