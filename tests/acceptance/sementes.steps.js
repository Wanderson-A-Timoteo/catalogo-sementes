const { defineFeature, loadFeature } = require("jest-cucumber");
const path = require("path");
const puppeteer = require("puppeteer");
const axios = require('axios'); // Usaremos para preparar o estado do backend

// Carrega o arquivo .feature
const feature = loadFeature(path.join(__dirname, "../features/sementes.feature"));

// Define a implementação da feature
defineFeature(feature, (test) => {
    let browser;
    let page;
    const backendUrl = 'http://localhost:3000';
    const frontendUrl = 'http://localhost:8080/listagem.html';

    // Inicia o navegador antes de todos os testes
    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: true });
        page = await browser.newPage();
    });

    // Fecha o navegador após todos os testes
    afterAll(async () => {
        await browser.close();
    });

    test('Visualizar a lista de sementes', ({ given, when, then, and }) => {
        given(/^que o backend possui (\d+) sementes cadastradas$/, async (quantidade) => {
            // Este passo prepara o estado do nosso backend.
            // ATENÇÃO: Para garantir um teste limpo, reinicie seu servidor backend
            // antes de rodar os testes para limpar a memória.
            await axios.post(`${backendUrl}/sementes`, {
                nome: 'Tomate Cereja',
                descricao: 'Pequeno e doce.',
                estoque: 100
            });
            await axios.post(`${backendUrl}/sementes`, {
                nome: 'Alface Crespa',
                descricao: 'Folhas crocantes.',
                estoque: 200
            });
        });

        when('eu acesso a página de listagem', async () => {
            await page.goto(frontendUrl);
        });

        then(/^eu devo ver "(.*)" sementes na tabela$/, async (quantidadeEsperada) => {
            // Aguarda a tabela ser preenchida pelo JavaScript
            await page.waitForSelector('#tabela-sementes tr');
            const linhas = await page.$$eval('#tabela-sementes tr', trs => trs.length);
            expect(linhas).toBe(parseInt(quantidadeEsperada, 10));
        });

        and(/^a semente "(.*)" deve estar na lista$/, async (nomeSemente) => {
            // Verifica se o texto da semente aparece no corpo da tabela
            const conteudoTabela = await page.$eval('#tabela-sementes', el => el.innerText);
            expect(conteudoTabela).toContain(nomeSemente);
        });
    });
});
