var express = require('express');
var router = express.Router();

const SementeService = require('../src/sementes/SementeService');
const sementeService = new SementeService();

/* GET sementes */
router.get('/', function(req, res, next) {
  const sementes = sementeService.listarTodas();
  res.status(200).json(sementes);
});

/* POST para criar uma nova semente. */
router.post('/', function(req, res, next) {
  const novaSemente = sementeService.criar(req.body);
  res.status(201).json(novaSemente);
});

module.exports = router;
