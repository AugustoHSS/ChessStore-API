# ChessStore API

A **ChessStore API** é uma API RESTful para uma loja de itens relacionados ao xadrez, oferecendo funcionalidades de gerenciamento de produtos, pedidos e usuários.

## Funcionalidades

- **Gerenciamento de Produtos**: Criação, atualização e exclusão de produtos.
- **Pedidos**: Criação de pedidos.
- **Autenticação de Usuários**: Registro, login e gerenciamento de contas.

## Tecnologias Utilizadas

- Node.js com Express
- MongoDB

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/AugustoHSS/ChessStore-API.git
   cd ChessStore-API
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` com as seguintes variáveis:
   ```
   MONGO_URI=<sua-url-do-mongodb>
   PORT=
   ```

4. Inicie a aplicação:
   ```bash
   npm start
   ```

## Endpoints Principais

- `GET /home`: Lista todos os produtos.
- `GET /home/:productId`: Lista um produto.
- `GET /cupom/:cupomName`: verifica um cupom.
- `POST /checkout`: faz o chechout do carrinho.
- `POST /cart`: envia um produto para o carrinho .
- `GET cart`: Recupera detalhes do carrinho.
- `DELETE /cart/:productId`: deleta um produto do carrinho.
- `POST /sign-in`: faz o login do usuario.
- `POST /sign-up`: cria uma conta.
