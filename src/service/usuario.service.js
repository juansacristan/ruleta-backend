const UsuarioSchema = require("../model/usuario.model");

async function dbInsertUsuario (newUsuario){
    return await UsuarioSchema.create (newUsuario);
}

async function dbGetUsuario (){
    return await UsuarioSchema.find();
}

async function dbDeleteUsuario (id){
    return await UsuarioSchema.findOneAndDelete(id);
}

async function dbGetByIdUsuario (id){
    return await UsuarioSchema.findById(id);
}

module.exports ={
    dbInsertUsuario,
    dbGetUsuario,
    dbDeleteUsuario,
    dbGetByIdUsuario
}