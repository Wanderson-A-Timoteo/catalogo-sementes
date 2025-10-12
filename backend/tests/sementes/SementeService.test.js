const SementeService = require('../../src/sementes/SementeService');
const Semente = require('../../src/sementes/Semente');

describe('SementeService', () => {
    
    it('deve criar uma nova semente com sucesso', () => {
        const sementeService = new SementeService();

        const dadosSemente = {
            nome: 'Abóbora',
            descricao: 'Uma abóbora de tamanho médio.',
            estoque: 20
        };

        const novaSemente = sementeService.criar(dadosSemente);

        expect(novaSemente).toBeInstanceOf(Semente);
        expect(novaSemente.nome).toBe(dadosSemente.nome);
    });

    it('deve encontrar uma semente pelo nome', () => {
        const sementeService = new SementeService();
        const dadosSemente = {
            nome: 'Alface Crespa',
            descricao: 'Folhas crocantes e crespas.',
            estoque: 500
        };

        sementeService.criar(dadosSemente);

        const sementeEncontrada = sementeService.encontrarPorNome('Alface Crespa');

        expect(sementeEncontrada).toBeDefined();
        expect(sementeEncontrada.nome).toBe('Alface Crespa');
    });

});
