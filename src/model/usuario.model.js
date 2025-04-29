const mongoose = require ('mongoose')

const UsuarioSchema = new mongoose.Schema({
    nombre:{
        type: String, 
        required: true
    },
    dinero:{
        type: Number, 
        default: 50000, 
    },
    apostado:{
        type: Number
    },
    color:{
        type: String
    },
    ganancia:{
        type: Number
    }    
},{
    versionKey: false
});

const UsuarioModel = mongoose.model(
    'usuario',
    UsuarioSchema
)

module.exports = UsuarioModel;