module.exports = {
  // O ambiente de teste que será usado para o teste
  testEnvironment: 'node',

  // Um padrão que o Jest usa para detectar arquivos de teste
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',

  // Um mapa de caminhos de módulo que são stubbed out durante os testes
  moduleNameMapper: {},

  // Indica se a cobertura de código deve ser coletada durante a execução do teste
  collectCoverage: true,

  // O diretório onde o Jest deve produzir seus relatórios de cobertura
  coverageDirectory: 'coverage',

  // Uma lista de padrões de caminho de arquivo que são cobertos pela coleta de cobertura
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/index.js',
  ],
};
