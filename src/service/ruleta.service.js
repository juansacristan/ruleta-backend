const RuletaSchema = require("../model/ruleta.model");

async function dbInsertRuleta (newRuleta){
    return await RuletaSchema.create (newRuleta);
}

async function dbGetRuleta (){
    return await RuletaSchema.find();
}

async function dbDeleteRuleta (id){
    return await RuletaSchema.findOneAndDelete(id);
}

async function dbGetByIdRuleta (id){
    return await RuletaSchema.findById(id);
}

async function dbUpdateRuletaById (id, newUsuario){
    return await RuletaSchema.findByIdAndUpdate(
        id,
        newUsuario,
        {new: true}
    );
}

module.exports ={
    dbInsertRuleta,
    dbGetRuleta,
    dbDeleteRuleta,
    dbGetByIdRuleta,
    dbUpdateRuletaById
}