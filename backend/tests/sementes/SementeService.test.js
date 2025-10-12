const SementeService = require('../../src/sementes/SementeService');
const Semente = require('../../src/sementes/Semente');

describe('SementeService', () => {
    let sementeService;

    beforeEach(() => {
        sementeService = new SementeService();
    });
    
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

    it('deve listar todas as sementes cadastradas', () => {
        
        sementeService.criar({ nome: 'Tomate', descricao: 'Vermelho e suculento', estoque: 10 });
        sementeService.criar({ nome: 'Cenoura', descricao: 'Laranja e crocante', estoque: 25 });

        const sementes = sementeService.listarTodas();

        expect(Array.isArray(sementes)).toBe(true);
        expect(sementes.length).toBe(2);
        expect(sementes[0].nome).toBe('Tomate');
    });

    it('deve retornar null ao tentar atualizar uma semente que não existe', () => {
        const sementeAtualizada = sementeService.atualizar('Nome Inexistente', {});
        expect(sementeAtualizada).toBeNull();
    });

    it('deve atualizar apenas a descrição da semente', () => {
        sementeService.criar({ nome: 'Manjericão', descricao: 'Original', estoque: 10 });
        const sementeAtualizada = sementeService.atualizar('Manjericão', { descricao: 'Nova Descrição' });

        expect(sementeAtualizada.descricao).toBe('Nova Descrição');
        expect(sementeAtualizada.estoque).toBe(10);
    });

    it('deve atualizar apenas o estoque da semente, incluindo o valor 0', () => {
        sementeService.criar({ nome: 'Manjericão', descricao: 'Original', estoque: 10 });
        const sementeAtualizada = sementeService.atualizar('Manjericão', { estoque: 0 });

        expect(sementeAtualizada.descricao).toBe('Original');
        expect(sementeAtualizada.estoque).toBe(0);
    });

    it('deve retornar false ao tentar deletar uma semente que não existe', () => {
        const sucesso = sementeService.deletar('Nome Inexistente');
        expect(sucesso).toBe(false);
    });

});
