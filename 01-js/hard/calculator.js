
class Calculator {
  constructor() {
    this.result = 0
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if(number === 0) {
      throw new Error("Division by zero is not possible");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {

    const cleanExpression = expression.replace(/\s+/g, "")

    if (!/^[0-9+\-*/().\s]+$/.test(cleanExpression)) {
      throw new Error("Invalid input. Expression contains non-numeric characters.");
    }

    try {
      this.result = eval(cleanExpression);
      if (isNaN(this.result)) {
        throw new Error("Invalid input. Unable to evaluate the expression.");
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error("Invalid input. Unable to evaluate the expression.");
      } else {
        throw error;
      }
    }    
  }
}

const calculator = new Calculator();

calculator.add(5);
calculator.subtract(3);
console.log(calculator.getResult()); // Output: 2

calculator.multiply(4);
calculator.divide(2);
console.log(calculator.getResult()); // Output: 4

calculator.clear();
console.log(calculator.getResult()); // Output: 0

calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Output: 24


module.exports = Calculator;
