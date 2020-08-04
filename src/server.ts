import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json('Acessou a rota');
});

app.listen(3333, () => console.log('Servidor rodando na porta 3333'));
