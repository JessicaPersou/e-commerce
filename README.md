# Cervejaria - Sistema de E-commerce

Este é um sistema de e-commerce para uma cervejaria, permitindo que os clientes comprem produtos de cerveja online. O sistema possui recursos para gerenciar compradores, endereços, produtos, categorias e vendas.

## Tecnologias Utilizadas

- Linguagem de programação: [Java](https://www.java.com/)
- Framework web: [Spring Boot](https://spring.io/projects/spring-boot)
- Banco de dados: [MySQL](https://www.mysql.com/)
- Ferramenta de build: [Maven](https://maven.apache.org/)

## Funcionalidades

O sistema de e-commerce de cervejaria possui as seguintes funcionalidades principais:

- Cadastro e gerenciamento de compradores.
- Adição, consulta, atualização e exclusão de endereços associados aos compradores.
- Cadastro e gerenciamento de produtos de cerveja.
- Criação de categorias para classificar os produtos.
- Registro e acompanhamento de vendas, incluindo detalhes dos produtos vendidos, comprador e endereço de entrega.
- Paginação para lidar com grandes volumes de produtos e vendas.

## Configuração do Projeto

Siga as etapas abaixo para configurar o projeto em seu ambiente local:

1. Certifique-se de ter o Java e o MySQL instalados em sua máquina.
2. Clone este repositório para o seu diretório local.
3. Importe o projeto em sua IDE de preferência (por exemplo, Eclipse ou IntelliJ).
4. Configure as credenciais do banco de dados no arquivo `application.properties`.
5. Execute as migrações do banco de dados usando as ferramentas de migração do Spring Boot, como o Flyway ou Liquibase.
6. Execute o aplicativo e acesse-o localmente em `http://localhost:8080`.

## Documentação da API

A documentação da API do sistema de e-commerce está disponível em [API Documentation](api-documentation.md). Ela descreve todos os endpoints disponíveis, seus parâmetros, retornos e exemplos de uso.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar o sistema.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).


>## FUTURE IMPLEMENTATIONS
 - JWT
 - Verification of age to access home page
