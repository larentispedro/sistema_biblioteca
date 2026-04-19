# 📚 Sistema de Biblioteca (API)

Projeto desenvolvido para a disciplina de Programação I, com foco em construção de API REST utilizando Node.js, Express e PostgreSQL.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* Sequelize (ORM)
* PostgreSQL
* Insomnia (testes de API)

---

## 📌 Funcionalidades

### 👤 Usuário

* Criar usuário
* Listar usuários
* Buscar por ID
* Atualizar
* Excluir

### 📖 Obra (Livros)

* Cadastro de livros
* Listagem
* Edição e exclusão

### 📦 Exemplar

* Controle de exemplares por obra
* Status:

  * `0` → disponível
  * `1` → emprestado

### 🔄 Empréstimo

* Registrar empréstimo
* Alterar status do exemplar automaticamente
* Controle de data de empréstimo e vencimento

---

## 🧠 Regras de Negócio

* Um exemplar só pode ser emprestado se estiver disponível
* Ao emprestar:

  * status do exemplar muda para `1`
* Ao devolver:

  * status volta para `0`

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/sistema_biblioteca.git
```

### 2. Entrar na pasta

```bash
cd Back
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Configurar banco de dados

Editar o arquivo `Banco.js` com suas credenciais do PostgreSQL.

---

### 5. Rodar o projeto

```bash
node index.js
```

---

## 🔌 Endpoints principais

### 📌 Usuário

* GET `/usuario`
* POST `/usuario`
* PUT `/usuario/:idusuario`
* DELETE `/usuario/:idusuario`

### 📌 Obra

* GET `/obra`
* POST `/obra`

### 📌 Exemplar

* POST `/exemplar`
* GET `/exemplar`

### 📌 Empréstimo

* POST `/emprestimo`
* GET `/emprestimo`

---

## 🧪 Testes

Utilizar o Insomnia para testar os endpoints.

Exemplo de requisição:

```json
{
  "idusuario": 1,
  "idexemplar": 151
}
```

---

## 👨‍💻 Autor

Pedro Augusto Larentis Maldaner

---

## ⭐ Observações

Projeto acadêmico com foco em aprendizado de APIs REST, banco de dados relacional e boas práticas de backend.
