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

    encontrarPorNome(nome) {
        const sementeEncontrada = this.sementes.find(
            (semente) => semente.nome === nome
        );
        return sementeEncontrada;
    }

    listarTodas() {
        return this.sementes;
    }
}

module.exports = SementeService;
