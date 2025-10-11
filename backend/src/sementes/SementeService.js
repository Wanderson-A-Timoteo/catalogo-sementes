const Semente = require('./Semente');

class SementeService {

    constructor() {
        this.sementes = [];
    }

    criar(dadosSemente) {
        const { nome, descricao, estoque } = dadosSemente;

        const novaSemente = new Semente(nome, descricao, estoque);

        this.sementes.push(novaSemente);

        return novaSemente;
    }
}

module.exports = SementeService;
