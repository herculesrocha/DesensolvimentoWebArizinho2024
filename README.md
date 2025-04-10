# Projetos do Curso Lógica e Desenvolvimento Web

Este repositório contém a maioria dos projetos e exemplos demonstrados para os alunos do Colégio Arizinho em um curso iniado em 2024.

## 🚀 Vamos lá

Fique à vontade para explorar os projetos que serão atualizados e incluídos outros no decorrer das aulas.

# 🚀 Neste repositório iremos armazenar o Projeto Final

## O Projeto Final consiste em um CRUD de Produtos utilizando Node.js, MySQL e Bootstrap

Para orientação aos alunos, abaixo teremos um tutorial de criação do **CRUD de Produtos**, que como eu mencionei acima, utilizará Node.js, MySQL, HTML5 e Bootstrap! 🤓
O Resitório estará sendo atualizado à medida que formos codificando em sala de aula. 

---

## 📋 Qual o foco de aprendizado neste projeto?
- Como estruturar e organizar um Projeto de Desenvolvimento Web.
- Como criar uma aplicação CRUD (Create, Read, Update, Delete).
- Como conectar o Node.js ao banco de dados MySQL.
- Como utilizar Bootstrap para criar uma interface moderna e responsiva.


---

## 🛠️ Fiquem atentos aos Pré-requisitos

Como mencionamos em sala de aula, antes de começar, certifique-se de que esteja instalado em seu computador as aplicações abaixo, não havendo, realize a instalação através dos links mencionados

1. **Node.js**: [Baixe aqui](https://nodejs.org/).
2. **XAMPP**: Para rodar o servidor MySQL. [Baixe aqui](https://www.apachefriends.org/index.html).
3. **Visual Studio Code**: Um editor de código. [Baixe aqui](https://code.visualstudio.com/).

---

## 📂 Estrutura do Projeto

```
project-root/
├── app.js              # Servidor principal em Node.js
├── package.json        # Dependências do projeto
├── routes/
│   └── index.js        # Arquivo de rotas
├── views/
│   ├── index.ejs       # Página principal do CRUD
│   └── partials/       # Partes reutilizáveis da interface
├── public/
│   ├── css/
│   │   └── styles.css  # Arquivo para estilizações adicionais
│   ├── js/
│   │   └── scripts.js  # Lógica de interação do cliente
│   └── img/            # Pasta para imagens
└── db.sql              # Script para criar o banco de dados
```
---
Obs: O arquivo READM.md ficará no raiz do repositório.

---

## ⚙️ Vamos configurar o Ambiente

### 1️⃣ **Configurando o XAMPP**
1. Abra o painel de controle do XAMPP.
2. Inicie o módulo **MySQL** clicando no botão "Start".
3. Clique no botão **Admin** ao lado do MySQL para abrir o phpMyAdmin ou acesse http://localhost/phpmyadmin/ em seu navegador.
4. No phpMyAdmin, crie um banco de dados chamado `product_db`:
   - Clique em "Novo" no menu lateral.
   - Insira o nome `product_db` e clique em "Criar".
5. Acesse a aba **SQL** no banco de dados e cole o seguinte código para criar a tabela de produtos:
   ```sql
   CREATE TABLE IF NOT EXISTS products (
       id INT AUTO_INCREMENT PRIMARY KEY,
       description VARCHAR(255) NOT NULL,
       value DECIMAL(10, 2) NOT NULL
   );
   ```
6. Se preferir pode utilize a interface do phpMyAdmin para criar o banco de dados e a tabela conforme a SQL.

### 2️⃣ **Configurando o Projeto no VS Code**
1. Abra o VS Code.
2. No terminal, navegue até a pasta definida para criar o projeto.
3. Baixe este repositório que contém o diretório Projeto Final e entre no diretório do projeto:
4. Instale as dependências do projeto:
   ```bash
   npm install
   ```

---

## 🚀 Executando o Projeto

1. No terminal, rode o comando abaixo para iniciar o servidor Node.js:
   ```bash
   node app.js
   ```
   Ou, se você estiver usando o `nodemon`:
   ```bash
   npx nodemon app.js
   ```
2. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

---

## 🌟 Interface Responsiva com Bootstrap

- A interface do projeto foi criada utilizando **Bootstrap** para garantir que seja responsiva, ou seja, ela se ajusta automaticamente para funcionar bem em celulares, tablets e desktops. 📱💻

---

## 🎨 Personalização

- **Estilo:** Para alterar o estilo, edite o arquivo `public/css/styles.css`.
- **Funcionalidades:** Para adicionar novas funcionalidades, edite os arquivos `routes/index.js` e `views/index.ejs`.

---

## 🐛 Solução de Problemas

### 1️⃣ **Erro ao conectar no MySQL?**
- Verifique se o MySQL está rodando no XAMPP.
- Certifique-se de que as credenciais no arquivo `app.js` estão corretas:
  ```javascript
  const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '', // O repositório materá o acesso sem senha, porém os alunos serão intruídos à adicionar a senha do MySQL aqui
      database: 'product_db'
  });
  ```

### 2️⃣ **Erro "Cannot GET /"?**
- Certifique-se de que o servidor Node.js está rodando. Use o comando:
  ```bash
  node app.js
  ```

### 3️⃣ **Mudanças no código não aparecem no navegador?**
- Atualize a página no navegador
- Certifique-se de salvar os arquivos antes de atualizar o navegador.

---

## 🎉 Conclusão

Ufa!!! parabéns conseguimos criar nossa primeira aplicação CRUD com Node.js, MySQL e Bootstrap! 🎊 Este é o seu primeiro projeto, um ponto de partida no aprendizado em Desenvolvimento Web. 
Continue evoluindo, desenvolvendo e aprimorando suas habilidades. 🚀

Havendo dúvidas ou sugestões, fique à vontade para contribuir ou deixar um comentário. 😄

Minhas redes sociais estão em meu [perfil](https://github.com/herculesrocha).

---
