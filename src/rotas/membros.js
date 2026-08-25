const express = require('express')
const router = express.Router()

const membros = []

router.get('/', (req, res) => {
  res.status(200).json(membros)
})

router.post('/', (req, res) => {
  const { nome, matricula } = req.body

  if (!nome || !matricula) {
    return res.status(400).json({
      erro: 'nome e matricula são obrigatórios'
    })
  }

  const membro = {
    id: membros.length + 1,
    nome,
    matricula
  }

  membros.push(membro)

  return res.status(201).json(membro)
})

module.exports = router
