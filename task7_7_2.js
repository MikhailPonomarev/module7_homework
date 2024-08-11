const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
};

const values = {
  a: 2,
  b: 3,
  operator: "+",
};

console.log(calculate.apply(null, [values.a, values.b, values.operator]));
