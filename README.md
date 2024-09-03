# PeoplePulse - Gerenciador de Contatos 📇

Bem-vindo ao **PeoplePulse**! 🎉  
Uma aplicação web elegante e intuitiva para gerenciar seus contatos com facilidade. Adicione, edite, exclua e visualize seus contatos de maneira organizada, garantindo que você nunca perca as informações importantes.

![PeoplePulse Banner](link_para_imagem) <!-- Substitua pelo link de uma imagem/banner do projeto -->

## ✨ Funcionalidades Principais

- **Adicionar Contato:**

  - Crie novos contatos com nome, e-mail e telefone.
  - Formatação automática para o campo de telefone no formato `(XX) XXXXX-XXXX`.

- **Editar Contato:**

  - Atualize informações de contatos existentes facilmente.
  - Dados pré-preenchidos para edição rápida e eficiente.
  - Formatação automática do telefone durante a edição.

- **Excluir Contato:**

  - Remova contatos indesejados com apenas um clique.
  - Sincronização instantânea com a interface e banco de dados.

- **Visualizar Lista de Contatos:**
  - Tabela responsiva e organizada para exibição de contatos.
  - Design adaptado para diferentes dispositivos e tamanhos de tela.

## 🧭 Fluxo da Aplicação

1. **Página Inicial:**

   - Apresentação simples e limpa do PeoplePulse, com fácil navegação para as funcionalidades principais.

2. **Página de Adicionar Contato:**

   - Formulário intuitivo para adicionar novos contatos com validação de dados.

3. **Página de Lista de Contatos:**

   - Exibição clara e organizada de todos os contatos cadastrados.
   - Opções para editar ou excluir diretamente da lista.

4. **Página de Edição de Contato:**

   - Editar contatos existentes de maneira rápida e eficaz.
   - Alterações são refletidas instantaneamente.

5. **Página de Exclusão de Contato:**
   - Remova contatos com um simples clique.

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/):** Framework React para aplicações com renderização no lado do servidor.
- **[React.js](https://reactjs.org/):** Biblioteca JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para um desenvolvimento mais seguro.
- **[Prisma ORM](https://www.prisma.io/):** ORM para PostgreSQL, simplificando o gerenciamento do banco de dados.
- **[PostgreSQL](https://www.postgresql.org/):** Banco de dados relacional robusto e escalável.
- **[TailwindCSS](https://tailwindcss.com/):** Framework CSS utilitário para um design rápido e responsivo.
- **[Vercel](https://vercel.com/):** Plataforma de deploy contínuo para hospedar a aplicação.

## 🛠️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar o projeto em sua máquina local:

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **NPM** ou **Yarn**
- **PostgreSQL** (ou um banco de dados compatível)

### Passos para Iniciar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SeuUsuario/PeoplePulse.git
   cd PeoplePulse
   Instale as dependências:
   ```

bash
Copiar código
npm install

# ou

yarn install
Configure o banco de dados: Atualize o arquivo .env com as configurações do seu banco de dados PostgreSQL.

plaintext
Copiar código
DATABASE_URL="sua-url-do-postgresql"
Execute as migrações do Prisma:

bash
Copiar código
npx prisma migrate dev
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev

# ou

yarn dev
Acesse a aplicação no navegador: Abra http://localhost:3000 para ver a aplicação em execução.

🎯 Contribuição
Quer contribuir para o PeoplePulse? Estamos abertos a melhorias, correções de bugs e novas funcionalidades!

Faça um fork do repositório.
Crie uma nova branch para sua funcionalidade (git checkout -b feature/nova-funcionalidade).
Envie suas alterações (git commit -m 'Adiciona nova funcionalidade').
Faça um push para a branch (git push origin feature/nova-funcionalidade).
Abra um Pull Request e descreva suas alterações.
📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Mantenha seus contatos organizados e acessíveis com o PeoplePulse!

👤 Desenvolvedor Principal: Márcia Agostinho

💌 **Contato:** [LinkedIn](https://www.linkedin.com/in/marcia-agostinho-developer/)
