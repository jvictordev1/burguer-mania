# BurguerMania

**Descrição do projeto**

O BurguerMania é um sistema web desenvolvido para uma hamburgueria, onde os usuários podem explorar um cardápio interativo. O sistema permite visualizar as categorias de hambúrgueres, seus ingredientes e, ao clicar em uma categoria, mostrar os hambúrgueres dessa categoria com seus respectivos ingredientes. Quando um hambúrguer é selecionado, o usuário pode ver seu preço, descrição e optar por comprá-lo. Após clicar em "comprar", o usuário é redirecionado para a página de pedidos, onde pode preencher o nome do produto, quantidade e uma observação opcional. A aplicação é totalmente responsiva e foi criada para o projeto front-end da unidade 9 do **Restic-36**.

## Instruções de como executar a aplicação

Siga o passo a passo descrito abaixo para executar a aplicação. O sistema requer que a interface e o servidor de dados estejam rodando corretamente.

### Interface

No terminal, execute os seguintes comandos:

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/burguer-mania.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd burguer-mania
   ```

3. Acesse o arquivo **src/environments/environment.development.ts** e modifique o campo **apiUrl** para a URL da API que você esta rodando:

   ```Typescript
      ...
      apiUrl: URL DA API,
      ...
   ```

4. Instale as dependências:

   ```bash
   npm install
   ```

5. Inicie o servidor local de desenvolvimento:
   ```bash
   ng serve
   ```

Acesse a página da aplicação em `http://localhost:4200`.

## Tecnologias utilizadas

- **Typescript**
- **HTML**
- **CSS**
- **Angular**

## Possíveis melhorias futuras

- Adicionar um sistema de login para os usuários.
- Implementar um sistema de pagamento integrado.
- Permitir a personalização dos hambúrgueres (escolha de ingredientes extras).
- Adicionar avaliações e comentários dos usuários para os hambúrgueres.
- Adicionar suporte para múltiplos idiomas.
