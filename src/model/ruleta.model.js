const mongoose = require ('mongoose')

const RuletaSchema = new mongoose.Schema({
    usuario:{
        type: mongoose.Schema.ObjectId,
        ref: 'usuario'
    },
    numero:{
        type: Number
    },
    estado:{
        type: String,
        enum:['abierta', 'cerrada'],
        default:'abierta'
    },
    apuestas:{
        type: Array
    },
    resultados:{
        type: Array
    },
    monto:{
        type: Number
    }

},{
    versionKey: false
});

const RuletaModel = mongoose.model(
    'ruleta',
    RuletaSchema
)

module.exports = RuletaModel;