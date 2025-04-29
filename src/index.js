//Express
const express = require ('express');
const dbConexion = require('./config/mongo.config');
const app = express();

dbConexion();


app.use(express.json());


//http://localhost:3000/
app.use('/api/usuario', require('./routes/usuario.routes'));


app.listen(3000, function(){
    console.log('Servidor si esta corriendo');  
});