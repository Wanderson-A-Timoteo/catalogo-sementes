class Semente {
    constructor(nome, descricao, estoque) {
        if (!nome) {
            throw new Error('O nome da semente é obrigatório.');
        }

        if (estoque < 0) {
            throw new Error('O estoque não pode ser negativo.');
        }

        this.nome = nome;
        this.descricao = descricao;
        this.estoque = estoque;
    }
}

module.exports = Semente;
