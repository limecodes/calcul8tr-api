import ExpressionStack from '../logic/ExpressionStack';

export default function Calculate(expression) {
  const stack = new ExpressionStack();

  for (let i = 0; i < expression.length; i++) {

    if (expression[i].includes('%')) {
      stack.stack.push('(' + expression[i].replace('%', ' / 100 ') + ')');
      continue;
    }
    stack.push(expression[i]);
  }

  try {
    console.log('stack', stack.getStack());
    console.log('convertForCalculation', stack.convertForCalculation());
    const result = stack.calculate();
    return {result: result};
  } catch (error) {
    return {error: error.message};
  }
}
