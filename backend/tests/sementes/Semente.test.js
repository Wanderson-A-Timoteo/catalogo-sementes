const Semente = require('../../src/sementes/Semente');

describe('Classe Semente', () => {

    it('deve criar uma nova semente com nome, descrição e estoque', () => {
        const nome = 'Tomate Cereja';
        const descricao = 'Pequeno e doce, ideal para saladas.';
        const estoque = 100;

        const semente = new Semente(nome, descricao, estoque);

        expect(semente.nome).toBe(nome);
        expect(semente.descricao).toBe(descricao);
        expect(semente.estoque).toBe(estoque);
    });

});
