# Listar todos os clientes em ordem alfabética que tenham mais de 18 anos
SELECT * FROM client where birthdate <= DATE_SUB(CURDATE(), INTERVAL 18 YEAR) ORDER BY fullname ASC; 

# Listar todos os endereços onde o número não seja vazio
SELECT number FROM cervejaria.address WHERE number <> ''; 

# Listar todos os clientes que tenham realizado compras
SELECT c.fullname, s.client_id FROM client as c INNER JOIN sale as s ON s.client_id = c.id ; 

# Listar todos os produtos que custem mais que 50 reais
SELECT * FROM cervejaria.product WHERE price > 50; 

# Listar todos os clientes e trazer o país que ele mora
select c.id, c.fullname, a.country from client c inner join address a ON a.client_id = c.id where c.fullname like '%adriano%'; 
select * from address where client_id = 1;
select fullname from client;

# Listar todos os produtos de uma venda de um cliente por CPF
select c.cpf, s.id, p.name from client as c inner join sale as s inner join product as p ON s.client_id = c.id; 

# Listar todas subcategorias da categoria cerveja
SELECT sub_category_id FROM cervejaria.category; 

# Listar todos os produtos de uma determinada categoria
SELECT * FROM product WHERE category_id LIKE 1;

# Listar todos os clientes que não tenham número do endereço cadastrado, que tenham realizado pelo menos 3 compras e que tenham comprador cerveja LARGER.
SELECT c.fullname AS Nome_Cliente FROM client c inner join sale s ON c.id = s.client_id inner join product_sale ps ON s.id = ps.sale_id inner join product p ON ps.product_id = p.id
WHERE c.id NOT IN ( SELECT a.client_id  FROM address a  WHERE a.number IS NOT NULL) AND p.name = 'LARGER' GROUP BY c.id HAVING COUNT(DISTINCT s.id) >= 3;

# Listar produtos e nome da categoria;
select c.description from product as p inner join category as c ON p.category_id = c.id ; 

#------------------------------------------------------------------------------------------------------------------------------------------------------------------#

# Selecione todos os clientes.
SELECT * FROM client;

# Selecione o nome e o CPF de todos os clientes.
SELECT fullname, cpf FROM client;
 
# Selecione o nome e o e-mail de todos os clientes com idade acima de 30 anos.
SELECT fullname, email FROM client WHERE birthdate > date_sub(curdate(), INTERVAL 30 YEAR);

# Selecione todos os endereços.
SELECT * FROM address;

# Selecione o número e o CEP de todos os endereços.
SELECT number, zipcode FROM address;

# Selecione o nome do cliente e o endereço completo de todos os clientes.
SELECT c.fullname,a.street FROM client as c INNER JOIN address AS a ON c.id = a.client_id WHERE c.id = 1;

# Selecione todos os produtos.
# Selecione o nome e o preço de todos os produtos.
# Selecione o nome e a categoria de todos os produtos.
# Selecione o nome do cliente e o nome do produto de todas as vendas.
# Selecione o nome do cliente e o preço total de cada venda.
# Selecione a categoria e a subcategoria de cada produto.
# Selecione o nome do cliente e o nome da categoria de todos os produtos vendidos.
# Selecione a quantidade de produtos vendidos em cada venda.
# Selecione o nome do produto e a quantidade vendida de cada produto.
# Selecione o número total de vendas realizadas.
# Selecione o preço médio de todos os produtos.
# Selecione o preço médio de cada categoria de produto.
# Selecione o número de produtos vendidos por cliente.
# Selecione o nome do cliente e o valor total gasto por ele em compras.
# Selecione o nome do cliente que gastou mais dinheiro em compras.
# Selecione a categoria com a maior quantidade de produtos vendidos.
# Selecione a subcategoria com a maior quantidade de produtos vendidos.
# Selecione o nome do cliente que comprou mais produtos.
# Selecione o nome do produto que foi vendido mais vezes.
# Selecione o nome do cliente que realizou a venda com o maior valor total.
# Selecione o número total de vendas realizadas por cada cliente.
# Selecione o nome da categoria e o valor total de vendas de cada categoria.
# Selecione o nome do produto e o valor total de vendas de cada produto.
# Selecione o nome da categoria e o número total de produtos vendidos de cada categoria.
# Selecione o nome do cliente que não possui endereço cadastrado.
# Selecione o nome do cliente que não realizou nenhuma venda.
# Selecione o nome do produto e a quantidade vendida de cada produto em ordem decrescente de quantidade.
# Selecione o nome do cliente e a quantidade de produtos comprados por ele em ordem decrescente de quantidade.
# Selecione o nome da categoria e o valor médio de vendas de cada categoria em ordem decrescente de valor médio.
# Selecione o nome do cliente e o valor total de compras realizadas por ele em ordem decrescente de valor total.
# Selecione o nome do produto e a quantidade vendida de cada produto em ordem crescente de quantidade.
# Selecione o nome do cliente e a quantidade de produtos comprados por ele em ordem crescente de quantidade.
# Selecione o nome da categoria e o valor médio de vendas de cada categoria em ordem crescente de valor médio.
# Selecione o nome do cliente e o valor total de compras realizadas por ele em ordem crescente de valor total.




