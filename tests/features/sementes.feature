# language: pt
Funcionalidade: Catálogo de Sementes

  Como usuário
  Eu quero ver a lista de sementes cadastradas
  Para saber quais itens estão disponíveis no catálogo

  Cenário: Visualizar a lista de sementes
    Dado que o backend possui 2 sementes cadastradas
    Quando eu acesso a página de listagem
    Então eu devo ver "2" sementes na tabela
    E a semente "Tomate Cereja" deve estar na lista