-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS product_db;

-- Uso do banco de dados
USE product_db;

-- Criação da tabela de produtos
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    value DECIMAL(10, 2) NOT NULL
);