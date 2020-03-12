require('dotenv').config()
import express from 'express';
import Producer from './controllers/Producer';

const app = express();
app.use(express.json());

app.post('/messages', Producer.run);

app.listen(3333, ()=> {
    console.log('Server rodando on localhost:3333')
})


