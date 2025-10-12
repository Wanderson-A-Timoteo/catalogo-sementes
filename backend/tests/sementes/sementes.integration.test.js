const request = require('supertest');
const app = require('../../app');

describe('API de Sementes', () => {

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

        expect(response.status).toBe(201); // 201 Created
        expect(response.body.nome).toBe('Manjericão');
    });

});
