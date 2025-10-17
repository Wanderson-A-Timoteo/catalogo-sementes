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

  Cenário: Cadastrar uma nova semente com sucesso
    Quando eu acesso a página de cadastro
    E eu preencho o nome com "Manjericão"
    E eu preencho a descrição com "Folhas aromáticas para molho."
    E eu preencho o estoque com "300"
    E eu clico no botão "Cadastrar"
    Então eu devo ser redirecionado para a página de listagem
    E a semente "Manjericão" deve estar na lista