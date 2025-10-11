class Semente {
    constructor(nome, descricao, estoque) {
        if (!nome) {
            throw new Error('O nome da semente é obrigatório.');
        }

        this.nome = nome;
        this.descricao = descricao;
        this.estoque = estoque;
    }
}

module.exports = Semente;
