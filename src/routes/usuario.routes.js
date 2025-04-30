const express = require ('express')
const router = express.Router();
const { getUsuario, crearUsuario, deleteUsuario, getbyidUsuario } = require('../controller/usuario.controller');

// http://localhost:3000/api/usuario

router.get('/', getUsuario);
router.post('/', crearUsuario);
router.delete('/:id', deleteUsuario);
router.get('/:id', getbyidUsuario);

module.exports = router;