// Importação dos módulos necessários
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuração do EJS como motor de templates
app.set('view engine', 'ejs');

// Configuração do parser de corpo
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do caminho para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL.');
});

// Rotas
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});