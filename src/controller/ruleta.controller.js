const { dbGetRuleta, dbInsertRuleta, dbDeleteRuleta, dbGetByIdRuleta, dbUpdateRuletaById, dbAbiertaRuleta, dbApuestaRuleta, dbCerradaRuleta } = require("../service/ruleta.service");


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


async function abiertaRuleta(req, res) {
    try {
      const { id } = req.params;
      const ruleta = await dbAbiertaRuleta(id);
  
      if (!ruleta) {
        return res.status(404).json({ msg: "Ruleta no encontrada" });
      }
  
      ruleta.estado = 'abierta';
      await ruleta.save();
  
      res.json({ msg: 'Mesa de ruleta está abierta' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ ok: false, msg: 'No se pudo abrir la mesa de ruleta' });
    }
  }

  async function apuestaRuleta(req, res) {
    try {
      const { id } = req.params;
      const { usuario, tipo, valor, monto } = req.body;
  
      if (tipo !== 'numero') {
        return res.status(400).json({ error: 'Solo se permiten apuestas por número' });
      }
      if (valor < 0 || valor > 36) {
        return res.status(400).json({ error: 'Número fuera de rango (0-36)' });
      }
      if (monto > 10000) {
        return res.status(400).json({ error: 'Monto máximo excedido' });
      }
  
      const ruleta = await dbApuestaRuleta(id);
      if (!ruleta || ruleta.estado !== 'abierta') {
        return res.status(400).json({ error: 'Ruleta no disponible para apostar' });
      }
  
      ruleta.apuestas.push({ usuario, tipo, valor, monto });
      await ruleta.save();
  
      res.json({ msg: 'Apuesta registrada' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ ok: false, msg: 'No se pudo registrar la apuesta' });
    }
  }

  async function cerradaRuleta(req, res) {
    try {
      const { id } = req.params;
      const ruleta = await dbCerradaRuleta(id);
  
      if (!ruleta || ruleta.estado !== 'abierta') {
        return res.status(400).json({ error: 'Ruleta no disponible o ya cerrada' });
      }
  
      const numeroGanador = Math.floor(Math.random() * 37);
      const colorGanador = numeroGanador % 2 === 0 ? 'rojo' : 'negro';
  
      ruleta.estado = 'cerrada';
      ruleta.numeroGanador = numeroGanador;
      ruleta.colorGanador = colorGanador;
  
      ruleta.resultados = ruleta.apuestas.map(apuesta => {
        let premio = 0;
  
        if (apuesta.tipo === 'numero' && apuesta.valor === numeroGanador) {
          premio = apuesta.monto * 5;
        }
  
        return {
          usuario: apuesta.usuario,
          tipo: apuesta.tipo,
          valor: apuesta.valor,
          monto: apuesta.monto,
          premio
        };
      });
  
      await ruleta.save();
  
      res.json({
        ok: true,
        msg: 'Ruleta cerrada correctamente',
        numeroGanador,
        resultados: ruleta.resultados
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al cerrar la ruleta' });
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
    abiertaRuleta,
    apuestaRuleta,
    cerradaRuleta,
    getRuleta,
    deleteRuleta,
    getbyidRuleta,
    patchRuleta,
}