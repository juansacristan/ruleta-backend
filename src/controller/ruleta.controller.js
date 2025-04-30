const { dbGetRuleta, dbInsertRuleta, dbDeleteRuleta, dbGetByIdRuleta, dbUpdateRuletaById } = require("../service/ruleta.service");


async function getRuleta(req, res) {
    try {
        const data = await dbGetRuleta ();
        res.json({
            ok: true,
            data: data,
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

async function crearRuleta(req, res){
    const inputData = req.body;
    try {
        const data = await dbInsertRuleta (inputData);
        res.json({
            ok: true,
            msg: 'Entraste a jugar la ruleta',
            data: data
        });
        
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al entrar el juego de la ruleta'
        });
    }
    
}

async function deleteRuleta (req, res){
    const id = req.params.id
    try {
        const data = await dbDeleteRuleta(id);
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al eliminar la ruleta'
        });
    }
}

async function getbyidRuleta (req, res){
    try {
        const data = await dbGetByIdRuleta (id);
        res.json8({
            ok: true,
            msg: 'Si funciona la actualizacion para ruleta',
            data: data
        });
        
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg:'Error obtener al ruleta por id'
        });
    }
}
async function patchRuleta(req, res) {
    const id = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateRuletaById (id, inputData);
        res.json({
            ok: true,
            data: data,
            msg: 'Denegada a la ruleta'
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Error de denegada a la ruleta'
        })
    }
    
}

module.exports={
    crearRuleta,
    getRuleta,
    deleteRuleta,
    getbyidRuleta,
    patchRuleta
}