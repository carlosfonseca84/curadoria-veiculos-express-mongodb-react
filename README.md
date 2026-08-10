# Lux Imports & DB Importados — Fullstack Project

> Curadoria de veículos importados de luxo com alta performance, cache inteligente e painel interativo.

![Banner do Projeto](./car-md.jpg)

---

## Autor

- **Carlos Fonseca**

---

## Visão Geral do Ecossistema

Este é um projeto fullstack composto por:

1. **Frontend (Lux Imports):** Uma interface premium desenvolvida inicialmente no Lovable, migrada e adaptada para React para consumir a API, exibindo coleções de veículos, artigos automotivos clássicos e detalhes integrados.
2. **Backend (DB Importados):** Uma API robusta em Node.js com Express e TypeScript que gerencia o CRUD de veículos, processa uploads de imagens e utiliza uma camada de cache com Redis para otimização de performance.

---

## Estrutura de Pastas (Monorepo)

```
luxe-automotive/
├── backend/             # API Node.js + Express + Prisma + Redis
│   ├── prisma/          # Schema do MongoDB
│   ├── src/             # Código-fonte da API
│   └── uploads/         # Armazenamento local temporário de imagens
├── frontend/            # Interface React + TS + Bun + TanStack
│   └── src/             # Componentes, Páginas e Integração
└── README.md            # Documentação principal (Este arquivo)
```

---

## Tecnologias Utilizadas

### Frontend (Lux Imports)

- **React** & **TypeScript**
- **Bun** (Gerenciador de pacotes e runtime)
- **TanStack Query** (Gerenciamento de estado e requisições HTTP)
- **Lovable** (Design inicial e estruturação de componentes)

### Backend (DB Importados)

- **Node.js** & **Express** & **TypeScript**
- **Prisma ORM** & **MongoDB** (Banco de dados principal)
- **Redis** (Camada de cache para veículos)
- **Multer** (Upload de arquivos/imagens multipart)
- **CORS**

---

## Fluxo de Funcionamento e Integração

1. **Apresentação:** O frontend renderiza o banner principal, a coleção do mês (3 principais veículos), a seção de história/clássicos e a seção de super carros.
2. **Consumo de Dados:** Ao clicar para ver a curadoria ou os detalhes ("Ver mais"), o React faz requisições para a API.
3. **Cache Inteligente:** O backend intercepta as requisições `GET /veiculos`. Se os dados estiverem no **Redis**, eles são entregues instantaneamente. Caso contrário, busca no **MongoDB** e salva no cache.
4. **Mutação e Upload:** Ao cadastrar um veículo (`POST`), o Multer processa a imagem para a pasta `uploads/` e o Prisma salva a referência no banco. Qualquer alteração (`PUT`/`PATCH`/`DELETE`) invalida automaticamente o cache do Redis.

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js e Bun instalados.
- Docker instalado (para rodar o Redis localmente).
- Conta ou instância do MongoDB (Atlas ou local).

### 1. Configurando o Backend

1. Abra o terminal na pasta do backend:

```bash
cd luxe-automotive/backend
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` baseado no exemplo abaixo:

```env
DATABASE_URL="sua_string_de_conexao_mongodb"
PORT=3000
```

4. Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

### 2. Configurando o Frontend

1. Abra um novo terminal na pasta do frontend:

```bash
cd luxe-automotive/frontend
```

2. Instale as dependências:

```bash
bun install
```

3. Inicie o servidor de desenvolvimento do frontend:

```bash
bun dev
```

---

## Endpoints da API para Referência

- `GET /veiculos` - Lista todos os veículos (Suporta cache Redis).
- `GET /veiculos/:id` - Detalhes de um veículo específico.
- `POST /veiculos` - Cria veículo (Requer envio de imagem via `multipart/form-data`).
- `PUT /veiculos/:id` - Atualização completa do veículo.
- `PATCH /veiculos/:id` - Atualização parcial de campos.
- `DELETE /veiculos/:id` - Remove veículo e invalida cache.

---

## Notas do Monorepo

Monorepo com `frontend/` e `backend/` separados. Use os seguintes comandos principais:

- `npm install` (na raiz para instalar workspaces)
- `npm run build` (constrói backend e frontend)
- `npm run dev:frontend` / `npm run dev:backend`

---

## Observações finais

- Prisma ORM precisa estar na versão `6.19.3`.
- Execute `prisma generate` quando necessário.
- Para deploy no Vercel/Plataformas, configure a rota do frontend e o serviço do backend conforme o provedor.
