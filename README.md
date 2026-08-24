# API da Biblioteca do Campus — Sprint em trio (1 hora)

Uma API REST enxuta para a **biblioteca do campus**, pensada para caber numa **aula de 1 hora**
com um grupo de **exatamente 3 pessoas**. O objetivo pedagógico é praticar **divisão de trabalho
paralela**: a API tem **três módulos independentes**, um por integrante, cada um em **seu próprio
arquivo** — ninguém edita o arquivo do outro, então **não há conflito de merge** e os três
trabalham ao mesmo tempo.

O template já vem pronto com o servidor Express, o roteamento dos três módulos, a rota
`GET /health` e um armazenamento **em memória** (sem banco de dados, para não gastar tempo).
Cada integrante só preenche o seu arquivo de rota em `src/rotas/`.

## As três tarefas paralelas (uma por pessoa)

### Tarefa A — Acervo (Livros) · `src/rotas/livros.js`
- `GET /livros` — lista todos os livros (array).
- `POST /livros` — corpo `{ titulo, autor }` (ambos **texto**) → **201** com `{ id, titulo, autor }`;
  **400** se faltar `titulo` ou `autor`.

### Tarefa B — Membros · `src/rotas/membros.js`
- `GET /membros` — lista todos os membros (array).
- `POST /membros` — corpo `{ nome, matricula }` (ambos **texto**) → **201** com `{ id, nome, matricula }`;
  **400** se faltar `nome` ou `matricula`.

### Tarefa C — Sugestões de compra + votação · `src/rotas/sugestoes.js`
- `GET /sugestoes` — lista as sugestões, cada uma como `{ id, titulo, votos }`.
- `POST /sugestoes` — corpo `{ titulo }` (**texto**) → **201** com `{ id, titulo, votos: 0 }`;
  **400** se faltar `titulo`.
- `POST /sugestoes/voto` — corpo `{ id }` → **200** (incrementa os votos daquela sugestão);
  **400** se o `id` não existir.

## Como rodar
```bash
npm install
npm start        # sobe em http://localhost:3000
```
Confira que `GET /health` responde **200** com `{ "status": "ok" }`.

> Combinem quem faz A, B e C. Como cada módulo é um arquivo separado, todos commitam em
> paralelo sem conflito. O grupo submete **um único repositório**.
