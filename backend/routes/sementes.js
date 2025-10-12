var express = require('express');
var router = express.Router();

const SementeService = require('../src/sementes/SementeService');
const sementeService = new SementeService();

/* GET sementes */
router.get('/', function(req, res, next) {
  const sementes = sementeService.listarTodas();
  res.status(200).json(sementes);
});

module.exports = router;
