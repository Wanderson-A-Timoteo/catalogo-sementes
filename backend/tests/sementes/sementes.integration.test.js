const request = require('supertest');
const app = require('../../app');

describe('API de Sementes', () => {

    it('GET /sementes - deve retornar uma lista vazia de sementes inicialmente', async () => {
        const response = await request(app)
            .get('/sementes');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });

});
