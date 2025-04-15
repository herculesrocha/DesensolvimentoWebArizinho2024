// Importação dos módulos necessários
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product_db'
});

// Rota para exibir a página de produtos
router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) throw err;
        res.render('index', { products: results });
    });
});

// Rota para adicionar um produto
router.post('/add', (req, res) => {
    const { description, value } = req.body;
    const query = 'INSERT INTO products (description, value) VALUES (?, ?)';
    db.query(query, [description, value], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Rota para editar um produto
router.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { description, value } = req.body;
    const query = 'UPDATE products SET description = ?, value = ? WHERE id = ?';
    db.query(query, [description, value, id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Rota para excluir um produto
router.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

module.exports = router;