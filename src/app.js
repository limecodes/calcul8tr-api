import express from 'express';
import { body, validationResult } from 'express-validator';

import Calculate from './controllers/Calculate';

const app = express();

app.use(express.json());
app.post('/calculate', [
  body('expression')
    .not().isEmpty().withMessage('Cannot be empty')
    .trim()
    .escape(),
], (req, res) => {
  // res.writeHead(200, {'Content-Type': 'application/json'});
  const errors = validationResult(req);

  if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }
  res.send(JSON.stringify(Calculate(req.body.expression)));
});

export default app;
