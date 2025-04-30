const express = require ('express');
const { getRuleta, crearRuleta, deleteRuleta, getbyidRuleta, patchRuleta } = require('../controller/ruleta.controller');
const router = express.Router();


// http://localhost:3000/api/ruleta

router.get('/', getRuleta)
router.post('/', crearRuleta)
router.delete('/:id', deleteRuleta)
router.get('/:id', getbyidRuleta)
router.patch('/:id', patchRuleta)

module.exports = router;