# 🌱 Projeto Final - Catálogo de Sementes

A aplicação consiste em um **Catálogo de Sementes** simples, com uma API back-end construída em Node.js/Express e um front-end com 3 telas em HTML/Bootstrap. O desenvolvimento foi guiado por testes (TDD), cobrindo **testes unitários**, **de integração** e **de aceitação**, com versionamento de código seguindo o fluxo de *feature branches* e *Pull Requests*.
---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados em seu ambiente:

- **Git**
- **Node.js** (v20.x ou superior) e **npm**
- **live-server** (instalado globalmente)
- **Bash** (Recomenda-se o uso do **WSL 2** no Windows)

### Instalação de Ferramentas Globais

```bash
# Instala o live-server para servir o front-end
npm install -g live-server

# Instala o express-generator para gerar o esqueleto de projetos Express
npm install -g express-generator
```

## 🚀 Instalação do Projeto
Siga os passos abaixo para baixar e configurar o projeto em sua máquina.

### 1. Clone o repositório
```bash
git clone https://github.com/Wanderson-A-Timoteo/catalogo-sementes.git

cd catalogo-sementes
```

### 2. Instale as dependências da raiz
Essas dependências são necessárias para os testes de aceitação (Jest, Cucumber, Puppeteer).

```bash
npm install
```

### 3. Instale as dependências do Back-end
Navegue até a pasta backend e instale suas dependências (Express, Jest, Supertest, etc.).

```bash
cd backend

npm install
```

### 🧪 Executando os Testes
O projeto possui uma suíte de testes completa. Siga as instruções para cada tipo.

### 1. Testes Unitários e de Integração (Back-end)
Estes testes verificam a lógica de negócio e as rotas da API back-end.

Navegue até o diretório do back-end:

```bash
cd backend
```

Execute o comando de teste do Jest:

```bash
npm test
```

### 2. Testes de Aceitação (BDD com Cucumber)
Estes testes simulam a interação de um usuário real com o front-end e exigem que ambos os servidores (back-end e front-end) estejam rodando.

Você precisará de três terminais abertos.

### 🖥️ Terminal 1 - Iniciar o Back-end
Navegue até a pasta backend e inicie o servidor da API.

```bash
cd backend

npm start
```

### 🖥️ Terminal 2 - Iniciar o Front-end
Navegue até a pasta frontend e inicie o servidor estático.

```bash
cd frontend

live-server
```

### 💻 Terminal 3 - Executar os Testes
Navegue até a pasta raiz do projeto e execute o script.

```bash
npm run test:acceptance
```
O Puppeteer iniciará um navegador, executará os cenários e exibirá o resultado.

## 🧭 Executando a Aplicação
Para executar a aplicação completa, é necessário iniciar o back-end e o front-end separadamente.

🔙 Back-end (API)
Navegue até a pasta backend e inicie o servidor Express.

```bash
npm start
```

O servidor estará disponível em: 👉 http://localhost:3000

## 🎨 Front-end (Interface do Usuário)
Navegue até a pasta frontend e inicie o live-server.

```bash
live-server
```

A interface estará acessível em: 👉 http://localhost:8080/listagem.html

## 🗂️ Estrutura do Projeto
```
catalogo-sementes/
├── backend/      # Aplicação Node.js com Express
│   ├── src/      # Lógica de negócio (Classes, Serviços)
│   ├── routes/   # Definição das rotas da API
│   └── tests/    # Testes unitários e de integração
│
├── frontend/     # Interface de usuário com 3 telas (HTML, Bootstrap)
│
└── tests/        # Testes de aceitação (BDD)
    ├── features/   # Especificações dos cenários (.feature)
    └── acceptance/ # Implementação dos passos (.steps.js)
```

## 🧑‍💻 Autor
Wanderson de Almeida Timóteo