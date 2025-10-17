const request = require('supertest');
const app = require('../../app');

describe('API de Sementes', () => {
    beforeEach(async () => {
         // Limpa o estado da API antes de cada teste
        await request(app).post('/sementes/reset');
    });

    it('GET /sementes - deve retornar uma lista vazia de sementes inicialmente', async () => {
        const response = await request(app)
            .get('/sementes');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });

    it('POST /sementes - deve criar uma nova semente com sucesso', async () => {
        const novaSemente = {
            nome: 'Manjericão',
            descricao: 'Ideal para molhos e pestos.',
            estoque: 150
        };

        const response = await request(app)
            .post('/sementes')
            .send(novaSemente);

        expect(response.status).toBe(201);
        expect(response.body.nome).toBe('Manjericão');
    });

    it('PUT /sementes/:nome - deve atualizar uma semente existente', async () => {
        const sementeOriginal = {
            nome: 'Coentro',
            descricao: 'Erva aromática.',
            estoque: 70
        };
        await request(app).post('/sementes').send(sementeOriginal);

        const dadosAtualizados = {
            descricao: 'Erva aromática muito utilizada na culinária nordestina.',
            estoque: 60
        };

        const response = await request(app)
            .put(`/sementes/${sementeOriginal.nome}`)
            .send(dadosAtualizados);

        expect(response.status).toBe(200);
        expect(response.body.descricao).toBe(dadosAtualizados.descricao);
        expect(response.body.estoque).toBe(dadosAtualizados.estoque);
    });

    it('PUT /sementes/:nome - deve retornar 404 se a semente não for encontrada', async () => {
        const response = await request(app)
            .put('/sementes/NomeInexistente')
            .send({ estoque: 10 });

        expect(response.status).toBe(404);
    });

    it('DELETE /sementes/:nome - deve deletar uma semente existente', async () => {
        const semente = {
            nome: 'Pimenta Biquinho',
            descricao: 'Pimenta de cheiro, sem ardor.',
            estoque: 200
        };
        await request(app).post('/sementes').send(semente);

        const response = await request(app)
            .delete(`/sementes/${semente.nome}`);

        expect(response.status).toBe(204);
    });

    it('DELETE /sementes/:nome - deve retornar 404 se a semente a ser deletada não for encontrada', async () => {
        const response = await request(app)
            .delete('/sementes/NomeInexistente');

        expect(response.status).toBe(404);
    });

    it('GET /sementes/:nome - deve retornar os detalhes de uma semente específica', async () => {
        // Primeiro, cria uma semente para garantir que ela exista no nosso "banco" em memória
        const semente = { nome: 'Rúcula', descricao: 'Folhas de sabor picante.', estoque: 80 };
        await request(app).post('/sementes').send(semente);

        // Agora, tenta buscar essa semente
        const response = await request(app)
            .get(`/sementes/${semente.nome}`);

        expect(response.status).toBe(200);
        expect(response.body.nome).toBe('Rúcula');
        expect(response.body.estoque).toBe(80);
    });

    it('GET /sementes/:nome - deve retornar 404 se a semente não for encontrada', async () => {
        const response = await request(app)
            .get('/sementes/NomeInexistente');

        expect(response.status).toBe(404);
    });

    it('DELETE /sementes/:nome - deve retornar 404 se a semente a ser deletada não for encontrada', async () => {
        const response = await request(app)
            .delete('/sementes/NomeInexistente');

        expect(response.status).toBe(404);
    });
});
