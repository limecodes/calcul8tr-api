import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Public folder placeholder'));

export default app;
