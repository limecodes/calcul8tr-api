import { evaluate } from 'mathjs';

import { OPERATIONS } from '../constants';
import { isOdd, isFloat } from '../utils';

export default class ExpressionStack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    const isOperation = isNaN(Number(value));

    if (!isOperation) {
      this.pushNumber(value);
      return;
    }
    this.pushOperation(value);
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  truncate() {
    const lastElement = this.top();
    this.stack.length = [1];
    this.stack[0] = lastElement;
  }

  clear() {
    this.stack.length = 0;
  }

  calculate() {
    const strExpression = this.convertForCalculation();
    const expressionCalculation = Number(evaluate(strExpression));

    const result = Number.isFinite(expressionCalculation)
      ? expressionCalculation
      : new Error('Expression Error');

    if (result.constructor.name !== 'Error') {
      this.clear();
      return result;
    } else {
      this.clear();
      throw result;
    }
  }

  convertForDisplay() {
    return this.stack
      .map((e) => {
        if (OPERATIONS[e]?.type === e) {
          return OPERATIONS[e].text;
        } else {
          return e;
        }
      })
      .join(' ');
  }

  convertForCalculation() {
    return this.stack
      .map((e) => {
        if (OPERATIONS[e]?.type === e) {
          return OPERATIONS[e].operator;
        } else if (e.includes('%')) {
          return '(' + e.replace('%', ' / 100 ') + ')';
        } else {
          return e;
        }
      })
      .join('');
  }

  setTop(value) {
    const top = this.stack.length > 0 ? this.stack.length - 1 : 0;

    this.stack[top] = value;
  }

  isPositionOdd() {
    return isOdd(this.stack.length);
  }

  pushNumber(value) {
    if (this.isPositionOdd()) {
      const previousValue =
        this.top() > 0
          ? this.top()
          : this.top().includes('.')
          ? this.top()
          : '';
      this.setTop(previousValue + value);
      return;
    }
    this.stack.push(value);
  }

  pushOperation(value) {
    if (this.isPositionOdd()) {
      this.stack.push(value);
    }
  }

  getStack() {
    return this.stack;
  }
}
