import ExpressionStack from '../logic/ExpressionStack';

export default function Calculate(expression) {
  const stack = new ExpressionStack();

  for (let i = 0; i < expression.length; i++) {
    stack.push(expression[i]);
  }

  try {
    const result = stack.calculate();
    return {result: result};
  } catch (error) {
    return {error: error.message};
  }
}
