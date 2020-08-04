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
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }
  const calculate = Calculate(req.body.expression);
  const code = !calculate.error ? 200 : 500;

  return res.status(code).json(calculate);
});

export default app;
