const express = require('express');
const router = express.Router();

const sugestoes = [];
let proximoId = 1;

router.get('/', (req, res) => {
    res.status(200).json(sugestoes);
});

router.post('/', (req, res) => {
    const { titulo } = req.body;

    if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
        return res.status(400).json({ erro: 'O campo titulo é obrigatório e deve ser um texto válido.' });
    }

    const novaSugestao = {
        id: proximoId++,
        titulo: titulo.trim(),
        votos: 0
    };

    sugestoes.push(novaSugestao);
    res.status(201).json(novaSugestao);
});

router.post('/voto', (req, res) => {
    const { id } = req.body;

    const idBusca = Number(id);

    const sugestao = sugestoes.find(s => s.id === idBusca);

    if (!sugestao) {
        return res.status(400).json({ erro: 'Sugestão com o ID fornecido não foi encontrada.' });
    }

    sugestao.votos += 1;

    res.status(200).json(sugestao);
});

module.exports = router;
