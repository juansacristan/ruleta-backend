const mongoose = require('mongoose');

const ApuestaSchema = new mongoose.Schema({
  usuario:{ 
    type: mongoose.Schema.ObjectId, 
    ref: 'usuario' 
    },
    tipo: String,
    valor: Number,
    monto: Number
});

const ResultadoSchema = new mongoose.Schema({
  usuario:{
    type: mongoose.Schema.ObjectId, ref: 'usuario' },
    tipo: String,
    valor: Number,
    monto: Number,
    premio: Number
});

const RuletaSchema = new mongoose.Schema({
  estado: {
    type: String,
    enum: ['abierta', 'cerrada'],
    default: 'cerrada'
  },
  numeroGanador: Number,
  colorGanador: String,
  apuestas: [ApuestaSchema],
  resultados: [ResultadoSchema]
}, {
  versionKey: false
});

module.exports = mongoose.model('ruleta', RuletaSchema);