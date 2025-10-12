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

/* PUT para atualizar uma semente existente. */
router.put('/:nome', function(req, res, next) {
  const { nome } = req.params;
  const dadosAtualizados = req.body;

  const sementeAtualizada = sementeService.atualizar(nome, dadosAtualizados);

  if (!sementeAtualizada) {
    return res.status(404).json({ erro: 'Semente não encontrada' });
  }

  res.status(200).json(sementeAtualizada);
});

module.exports = router;
