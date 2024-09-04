# PeoplePulse - Gerenciador de Contatos 📇

**Uma aplicação web para gerenciar contatos de forma eficiente e intuitiva**

Bem-vindo ao **PeoplePulse**! 🎉  
Uma aplicação web elegante e intuitiva para gerenciar seus contatos com facilidade. Adicione, edite, exclua e visualize seus contatos de maneira organizada, garantindo que você nunca perca as informações importantes.

## 🚀 Demonstração ao Vivo

Confira a versão ao vivo do PeoplePulse clicando no link abaixo:

🔗 [PeoplePulse](https://contact-pied-two.vercel.app/)

## ✨ Funcionalidades Principais

- **➕ Adicionar Contato:**

  - Crie novos contatos com nome, e-mail e telefone.
  - Formatação automática para o campo de telefone no formato `(XX) XXXXX-XXXX`.

- **✏️ Editar Contato:**

  - Atualize informações de contatos existentes facilmente.
  - Dados pré-preenchidos para edição rápida e eficiente.
  - Formatação automática do telefone durante a edição.

- **❌ Excluir Contato:**

  - Remova contatos indesejados com apenas um clique.
  - Sincronização instantânea com a interface e banco de dados.

- **📄 Visualizar Lista de Contatos:**
  - Tabela responsiva e organizada para exibição de contatos.
  - Design adaptado para diferentes dispositivos e tamanhos de tela.

## 🧭 Fluxo da Aplicação

1. **Página Inicial:** Uma apresentação simples e visualmente atrativa do PeoplePulse, com botão de login via Google. Usuários autenticados são redirecionados automaticamente para a lista de contatos.

2. **Página de Adicionar Contato:** Formulário intuitivo para adicionar novos contatos, com validação de e-mail e formatação automática de telefone. Após a adição, uma notificação confirma o sucesso.

3. **Página de Lista de Contatos:** Exibição clara e responsiva de todos os contatos cadastrados, com ações rápidas para editar ou excluir diretamente da lista.

4. **Página de Edição de Contato:** Permite edição rápida de contatos. O formulário já vem pré-preenchido, e uma notificação confirma a atualização após salvar.

5. **Página de Exclusão de Contato:** Remova contatos com um simples clique. A lista é atualizada instantaneamente e uma notificação confirma a exclusão.

6. **Autenticação com Google:** Usuários podem fazer login com o Google pela Navbar ou página inicial. Após o login, o nome do usuário aparece na Navbar com a opção de logout.

7. **Redirecionamento Automático:** Usuários autenticados são redirecionados automaticamente para a página de contatos. Tentativas de acessar rotas protegidas sem estar logado resultam em redirecionamento para a página de login.

8. **Toasts de Feedback:** Notificações aparecem para confirmar ações importantes como adicionar, editar ou excluir contatos.

9. **Validação de Inputs:** O e-mail é validado e o telefone é formatado automaticamente ao adicionar ou editar contatos, garantindo consistência dos dados.

10. **Proteção de Rotas:** Apenas usuários logados podem acessar as páginas de lista e adição de contatos. Rotas protegidas redirecionam usuários não autenticados para a página de login.

### 🔐 Gerenciamento de Sessão:

- **Autenticação com Google:** Usuários podem fazer login com o Google; nome do usuário aparece na Navbar com opção de logout.
- **Redirecionamento Automático:** Usuários logados são redirecionados para a página de contatos; rotas protegidas redirecionam usuários não autenticados para login.

### 💡 Melhorias no UX:

- **Toasts de Feedback:** Exibidos após ações como adicionar, editar ou excluir contatos.
- **Validação de Inputs:** E-mails são validados e telefones são formatados automaticamente.

### 🔐 Proteção de Rotas:

- **Rotas Protegidas:** Apenas usuários logados podem acessar a lista de contatos e adicionar novos. O sistema redireciona usuários não autenticados para a página de login.

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/):** Framework React para renderização no lado do servidor.
- **[React.js](https://reactjs.org/):** Biblioteca JavaScript para construção de UIs.
- **[TypeScript](https://www.typescriptlang.org/):** Superset de JavaScript com tipagem estática.
- **[Prisma ORM](https://www.prisma.io/):** ORM utilizado para gerenciamento do banco de dados PostgreSQL.
- **[PostgreSQL](https://www.postgresql.org/):** Banco de dados relacional utilizado para armazenar os contatos.
- **[TailwindCSS](https://tailwindcss.com/):** Framework CSS utilitário para estilização rápida e responsiva.
- **[Vercel](https://vercel.com/):** Plataforma para deploy contínuo e hospedagem da aplicação.

## 🛠️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar o projeto em sua máquina local:

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **NPM** ou **Yarn**
- **PostgreSQL** (ou um banco de dados compatível)

### Passos para Iniciar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/agostinhomarcia/contact.git
   cd contact

   ```

Instale as dependências:

```
npm install
# ou
yarn install
```

Configure o banco de dados: Atualize o arquivo .env com as configurações do seu banco de dados PostgreSQL:

```
DATABASE_URL="sua-url-do-postgresql"
```

Execute as migrações do Prisma:

```
npx prisma migrate dev
```

Inicie o servidor de desenvolvimento:

```
npm run dev
# ou
yarn dev
```

Acesse a aplicação no navegador: Abra http://localhost:3000 para ver a aplicação em execução.

🎯 Contribuição

Contribuições são bem-vindas! Se você quiser melhorar o PeoplePulse, siga os passos abaixo:

Fork o repositório
Crie uma branch para sua funcionalidade:

```
git checkout -b feature/nova-funcionalidade
```

Faça commit das suas alterações:

```
git commit -m 'Adiciona nova funcionalidade'

```

Envie sua branch:

```
git push origin feature/nova-funcionalidade
```

Abra um Pull Request
Estamos ansiosos para ver suas contribuições!

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE).
Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

👤 Contato

**Desenvolvedor Principal:** [Márcia Agostinho](https://www.linkedin.com/in/marcia-agostinho-developer/)

Mantenha seus contatos organizados e acessíveis com o PeoplePulse!

🙏 Obrigado por visitar o repositório! Se gostou do projeto, não se esqueça de dar uma estrela ⭐ e compartilhar!
