const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const CHAVE_SECRETA = 'minha_chave_secreta_escola';

// Configuração de CORS travada na sua URL do GitHub Pages e permitindo o cabeçalho Authorization
// IMPORTANTE: Substitua 'seu-usuario' e 'nome-do-repositorio' pelos seus dados do GitHub Pages!
const corsOptions = {
    origin: 'https://seu-usuario.github.io/nome-do-repositorio', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Rota 1: Gera o JWT simulando o login
app.post('/api/login', (req, res) => {
    const token = jwt.sign({ usuario: 'estudante' }, CHAVE_SECRETA, { expiresIn: '5m' });
    res.json({ token });
});

// Middleware de validação do JWT
function verificarJWT(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ mensagem: 'Token ausente' });

    jwt.verify(token, CHAVE_SECRETA, (err, decoded) => {
        if (err) return res.status(403).json({ mensagem: 'Token inválido ou expirado' });
        req.usuario = decoded;
        next();
    });
}

// Rota 2: Rota protegida por JWT e CORS
app.get('/api/cor', verificarJWT, (req, res) => {
    res.json({ cor: 'green' });
});

app.listen(3000, () => console.log('API rodando na porta 3000'));
