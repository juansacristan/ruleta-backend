const mongoose = require ('mongoose')

const RuletaSchema = new mongoose.Schema({
    numeromesa:{
        type: String
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
    }

},{
    versionKey: false
});

const RuletaModel = mongoose.model(
    'ruleta',
    RuletaSchema
)

module.exports = RuletaModel;