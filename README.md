<h1 align="center">{CRUD Books API's}</h1>

<div align="center">
   Um simples cadastro de livros com Node.js e MySQL.
</div>

<br>

<div align="center">
   <img src="https://raw.githubusercontent.com/GabrielWolf-Dev/crud-books-api/1957fb480bdf7dd8c677d3341eab4ccd018fd4dc/public/svg/book_readme.svg" alt="Ilustração de uma livraria" />
</div>
<br>

## Índice

- [Visão Geral](#visao-geral)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Como usar](#como-usar)
- [Contato](#contato)
- [Conhecimentos adquiridos](#conhecimentos-adquiridos)

<h1 id="visao-geral">Visão Geral</h1>

O projeto teve o intuito de dar os primeiros passos no desenvolvimento moderno de aplicações back-end com web API's, com a tecnologia Node.js, junto com os conhecimentos de SQL e algum gerenciador de banco de dados(MySQL neste projeto).
<br>
Me preocupei em aplicar as boas práticas que aprendi até este momento e desenvolver uma aplicação, mesmo que básica, com uma boa consistência. Padronização dos commits inspirado no "Conventional Commits".
<br>
A API tem duas rotas "/books" e "/reviews", a "/reviews" tem avaliações e resenhas dos usuários que leram algum livro cadastrado na aplicação, foi uma ótima forma de trabalhar com o relacionamento básico entre tabelas neste projeto.
<br>
Depois desse projeto, vou finalizar no outro repositório a parte do front-end com algum framework React.js ou Vue.

<h1 id="tecnologias">Tecnologias:</h1>

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)
- [Node.js](https://nodejs.org/en)
- [MySQL](https://www.mysql.com/)
- [NPM](https://www.npmjs.com/)

<h1 id="funcionalidades">Funcionalidades</h1>

A aplicação é constituída por duas rotas: "/books" e "/reviews".
Dentro de "/books", o usuário pode solicitar a busca de todos os livros, busca de um livro específico a partir do seu nome, criação de uma livro novo, atualização e exclusão do mesmo de acordo com o seu id.
<br>
Na rota "/reviews" é a mesma coisa, mas não é possível buscar todas as avaliações/resenhas e sim buscar de acordo com o livro que tem alguma escrita de um usuário de acordo com o "id" do livro.
<br>
Em ambas as rotas tem validações a partir de um middleware, validando os valores indefinidos, do tipo incorreto e campos vazios nas requisições que o usuário realiza na criação e atualizados dos dados.

<h1 id="como-usar">Como usar:</h1>

Para clonar e executar este projeto, você precisará de [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com [ npm](http://npmjs.com)) instalado em seu computador. Na sua linha de comando:

```bash
# Clone este repositório:
$ git clone git@github.com:GabrielWolf-Dev/crud-books-api.git

# Instale as dependências:
$ npm install

# ANTES DE RODAR O PROJETO: Importe o script.sql, que está na raíz do projeto, no seu SGBD.
# E crie um arquivo ".env" inserindo as variáveis de ambiente que você pode olhar no arquivo ".env.exmaple" na raíz do projeto.

# Rode a aplicação:
$ npm run dev
```

<h1 id="conhecimentos-adquiridos">Conhecimentos Adquiridos</h1>

- Como mexer no express para o desenvolvimento de API's REST;
- Como desenvolver um CRUD;
- Como desenvolver em Node.js;
- Aprendi as demais libs do projeto: nodemon, mysql2, cors, dotenv;
- Aprendi a criar consultas básicas no SQL e relacionamentos entre tabelas com "INNER JOIN/JOIN";
- Criar middlewares em uma rota com express;
- Aprendi os principais "status code" de cada requisição como: status 200, 201, 204, 400, 404;
- A gerenciar os dados a partir de um SGBD, no caso o MySQL Workbench, mas também mexi um pouco com o "PHP My Admin" do XAMPP no início do projeto.

<h1 id="contato">Contato:</h1>

- Website [gwdev-portfolio](https://gwdev-portfolio.vercel.app/)
- GitHub [@GabrielWolf-Dev](https://github.com/GabrielWolf-Dev)
