const express = require("express");

const router = express.Router();

// ─── Tarefa B — Membros ───────────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const membros = [];
let proximoId = 1;

// GET /membros — lista todos os membros cadastrados.
router.get("/", (req, res) => {
  // TODO (Tarefa B): responda com status 200 e o array `membros`.
  res.status(501).json({ erro: "não implementado" });
});

// POST /membros — cadastra um membro { nome, matricula } (ambos TEXTO/string).
router.post("/", (req, res) => {
  // TODO (Tarefa B):
  //  1. Leia nome (texto) e matricula (texto) de req.body.
  //  2. Se faltar nome OU matricula, responda 400.
  //  3. Crie { id: proximoId++, nome, matricula }, adicione em `membros`
  //     e responda 201 com o membro criado.
  res.status(501).json({ erro: "não implementado" });
});

module.exports = router;
