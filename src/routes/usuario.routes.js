const express = require('express');
const { getRuleta, crearRuleta, deleteRuleta, getbyidRuleta, patchRuleta,
  abiertaRuleta, apuestaRuleta, cerradaRuleta } = require('../controller/ruleta.controller');

const router = express.Router();

// http://localhost:3000/api/ruleta
router.get('/', getRuleta);
router.post('/', crearRuleta);
router.get('/:id', getbyidRuleta);
router.patch('/:id', patchRuleta);
router.patch('/abrir/:id', abiertaRuleta);
router.patch('/apostar/:id', apuestaRuleta);
router.patch('/cerrar/:id', cerradaRuleta);

module.exports = router;