import express from 'express';
import { body, validationResult } from 'express-validator';
import cors from 'cors';

import Calculate from './controllers/Calculate';

const app = express();

const corsOptions = {
  origin: 'http://locahost:3000',
  optionsSuccessStatus: 200,
}

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/calculate', [
  body('expression')
    .not().isEmpty().withMessage('Cannot be empty')
    .trim(),
], (req, res) => {
  // res.writeHead(200, {'Content-Type': 'application/json'});
  const errors = validationResult(req);

  if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }
  res.send(JSON.stringify(Calculate(req.body.expression)));
});

export default app;
