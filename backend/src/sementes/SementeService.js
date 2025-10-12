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

    atualizar(nome, dadosParaAtualizar) {
        const semente = this.encontrarPorNome(nome);

        if (!semente) {
            return null; 
        }

        semente.descricao = dadosParaAtualizar.descricao || semente.descricao;
        semente.estoque = dadosParaAtualizar.estoque !== undefined ? dadosParaAtualizar.estoque : semente.estoque;

        return semente;
    }

    deletar(nome) {
        const index = this.sementes.findIndex(semente => semente.nome === nome);

        if (index === -1) {
            return false; // Indica que a semente não foi encontrada
        }

        this.sementes.splice(index, 1);
        return true; // Indica que a deleção foi bem-sucedida
    }
}

module.exports = SementeService;
