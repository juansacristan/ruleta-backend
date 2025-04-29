const { dbGetUsuario, dbInsertUsuario, dbDeleteUsuario, dbGetByIdUsuario  } = require("../service/usuario.service");


async function getUsuario (req, res){

    try {
        const data = await dbGetUsuario();
        res.json({
            ok: true,
            data: data
        });

    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            message:'Ha ocurrido un error'
        });
    }   
}

async function crearUsuario(req, res){
    const inputData = req.body;
    try {
        const data = await dbInsertUsuario (inputData);
        res.json({
            ok: true,
            msg: 'Si creaste el usuario para poder jugar la ruleta',
            data: data
        })
        
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error por crear el usuario, debe arreglar dentro de codigo'
        })
    }
    
}

async function deleteUsuario (req, res){
    const id = req.params.id
    try {
        const data = await dbDeleteUsuario(id);
        res.json({
            ok: true,
            data: data
        })
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al eliminar el usuario'
        })
    }
}

async function getbyidUsuario (req, res){
    try {
        const data = await dbGetByIdUsuario (id);
        res.json8({
            ok: true,
            msg: 'Si funciona de actualizacion para el usuario',
            data: data
        })
        
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg:'Error obtener al ususario por id'
        })
    }
}

module.exports = {
    crearUsuario,
    getUsuario,
    deleteUsuario,
    getbyidUsuario
}