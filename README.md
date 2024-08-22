# DigitalStore Backend

Este repositório contém o backend da **DigitalStore**, uma API desenvolvida em Node.js para gerenciar categorias de produtos, usuários, endereços, imagens de produtos e outras funcionalidades essenciais de uma loja digital.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework web para construção da API RESTful.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **DBeaver**: Ferramenta GUI para gerenciamento e manipulação do PostgreSQL.
- **Insomnia**: Cliente HTTP utilizado para testar e validar os endpoints da API.
- **npm**: Gerenciador de pacotes do Node.js utilizado para instalar as dependências do projeto.

### Dependências Principais

As seguintes bibliotecas e ferramentas foram instaladas via npm para desenvolvimento deste projeto:

- **express**: Framework para criar servidores web e APIs.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **nodemon**: Ferramenta que reinicia automaticamente o servidor quando há alterações no código.
- **pg**: Conector do Node.js para o banco de dados PostgreSQL.
- **pg-hstore**: Utilitário para serializar e desserializar tipos de dados do PostgreSQL.
- **sequelize**: ORM (Object-Relational Mapper) para interagir com bancos de dados SQL.
- **sequelize-cli**: Ferramenta de linha de comando para Sequelize, para executar migrações e outras operações.
- **jsonwebtoken**: Implementação de JSON Web Tokens para autenticação.
- **swagger-jsdoc**: Ferramenta para gerar a documentação da API a partir de comentários no código.
- **swagger-ui-express**: Middleware para servir a documentação da API gerada pelo Swagger.
- **bcrypt**: Biblioteca para criptografia de senhas.


## Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a manutenção e escalabilidade do código:

```
├── Configuração
│   ├── banco de dados.js          # Configurações de conexão com o banco de dados
│   └── swagger.js                 # Configuração da documentação da API com Swagger
├── Controladores
│   ├── CategoryController.js      # Lógica para manipulação de categorias
│   ├── ProductController.js       # Lógica para manipulação de produtos
│   ├── UserController.js          # Lógica para manipulação de usuários
│   └── authController.js          # Lógica para autenticação e autorização
├── Modelos
│   ├── Categoria.js               # Modelo de dados para categorias
│   ├── Endereco.js                # Modelo de dados para endereços
│   ├── Image.js                   # Modelo de dados para imagens
│   ├── Produto.js                 # Modelo de dados para produtos
│   ├── Produto_Categoria.js       # Modelo de dados para associação entre produtos e categorias
│   ├── Produtos_Imagem.js         # Modelo de dados para associação entre produtos e imagens
│   ├── Produtos_Opcaoes.js        # Modelo de dados para opções de produtos
│   └── Usuario.js                 # Modelo de dados para usuários
├── Rotas
│   └── index.js                   # Definição das rotas da API
├── Roteiro
│   ├── createTables.js            # Script para criação das tabelas no banco de dados
│   └── runServer.js               # Script para iniciar o servidor
├── .gitignore                     # Arquivo para ignorar arquivos e pastas no Git
├── LEIA-ME.md                     # Arquivo README com informações sobre o projeto
├── aplicativo.js                  # Arquivo principal da aplicação
├── pacote-lock.json               # Arquivo de bloqueio de dependências do npm
└── pacote.json                    # Arquivo de configuração do npm com dependências do projeto
```

## Configuração e Execução do Projeto

### Pré-requisitos

- **Node.js** e **npm** instalados.
- **Postgress** instalado e em execução.
- **DBeaver** para gerenciamento do banco de dados (opcional).

### Passos para Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/digitalstore-backend.git
   ```

2. **Instale as dependências do projeto:**
   ```bash
   npm install i
   ```

3. **Configuração do Banco de Dados:**
   - Crie um banco de dados Postgress utilizando uma ferramenta como DBeaver.
   - Atualize o arquivo `banco de dados.js` em `Configuração` com as credenciais do seu banco de dados.

4. **Criação das Tabelas:**
   Execute o script de criação das tabelas no MySQL:
   ```bash
   node Roteiro/createTables.js
   ```

5. **Inicie o Servidor:**
   Inicie o servidor Node.js:
   ```bash
   npm start
   ```

6. **Testando a API:**
   Utilize o **Insomnia** ou outra ferramenta similar para testar os endpoints disponíveis na API. A documentação dos endpoints pode ser visualizada através do Swagger.

## Endpoints Principais

- **/categorias**: Gerenciamento de categorias de produtos.
- **/produtos**: Gerenciamento de produtos.
- **/usuarios**: Gerenciamento de usuários.
- **/auth**: Autenticação e autorização de usuários.

## Considerações Finais

- **Integração com Frontend**: A integração com o frontend ainda não foi implementada neste projeto.
- **Testes Automatizados**: Testes automatizados não foram aplicados. É recomendada a adição de testes para garantir a qualidade do código.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Antes de contribuir, por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) (se aplicável) para detalhes sobre o processo de contribuição.

