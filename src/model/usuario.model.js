const mongoose = require ('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre:{
        type: String 
    },
    dinero:{
        type: Number,
        default: 10000
    },
    numero:{
        type: Number,
    }
},{
    versionKey: false
});

const UsuarioModel = mongoose.model(
    'usuario',
    UsuarioSchema
)

module.exports = UsuarioModel;
