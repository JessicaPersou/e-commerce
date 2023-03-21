CREATE DATABASE cervejaria DEFAULT CHARSET=utf8mb4;
USE cervejaria;

# tabela um cliente para muitos endereços
CREATE TABLE client(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    birthdate DATE
)ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

# muitos endereços para um cliente
CREATE TABLE address(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    street VARCHAR(100) NOT NULL,
    zipcode VARCHAR(100) NOT NULL,
    number VARCHAR(10) NULL,
    city VARCHAR(45) NOT NULL,
    state VARCHAR(2) NOT NULL,
    country VARCHAR(100) NOT NULL,
    client_id INT NOT NULL, 
    FOREIGN KEY (client_id) REFERENCES client (id) #está associada ao id da tabela de cliente
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

# muitas vendas podem pertencer a um único cliente
CREATE TABLE sale(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    client_id INT NOT NULL, FOREIGN KEY (client_id) REFERENCES client (id) #está associada a tabela id de cliente
) DEFAULT CHARSET=utf8mb4;

# muitas categorias para muitas subcategorias
CREATE TABLE category(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	description VARCHAR(100) NOT NULL,
    sub_category_id INT NOT NULL, 
    FOREIGN KEY (sub_category_id) REFERENCES category (id)
) DEFAULT CHARSET=utf8mb4;

# muitos produtos podem pertencer a uma mesma categoria ou a muitas categorias 
CREATE TABLE product(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100) NULL,
    price DECIMAL(10,2) NOT NULL,
    category_id INT NOT NULL, FOREIGN KEY (category_id) REFERENCES category (id)
) DEFAULT CHARSET=utf8mb4;

# muitas vendas para muitos produtos
CREATE TABLE product_sale(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL, 
    FOREIGN KEY (product_id) REFERENCES product (id),
    sale_id INT NOT NULL, 
    FOREIGN KEY (sale_id) REFERENCES sale (id)
) DEFAULT CHARSET=utf8mb4;

#drop database cervejaria;