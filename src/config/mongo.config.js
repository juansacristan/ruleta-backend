const mongoose = require( 'mongoose' );

// Conectar con Base de Datos Mongoose

async function dbConexion() {
    try {
        await mongoose.connect ('mongodb://localhost:27017/db-ruletas',{});
        console.log ('Base de datos inicializada correctamente');
        
    }
     catch (error) {
        console.error('Error al inicializar base de datos')
        
    }
    
}



module.exports = dbConexion;