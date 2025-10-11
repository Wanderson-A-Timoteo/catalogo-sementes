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

});
