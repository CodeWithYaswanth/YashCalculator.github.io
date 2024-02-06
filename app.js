// Helper function to safely evaluate mathematical expressions
function safeEval(expression) {
  try {
    return new Function('return ' + expression)();
  } catch (error) {
    return 'Error';
  }
}

// Clears the display screen
function clearScreen() {
  document.getElementById('result').value = '';
}

// Appends the provided value to the current content of the result input field
function display(value) {
  document.getElementById('result').value += value;
}

// Attempts to evaluate the mathematical expression and updates the result input field
function calculate() {
  const expression = document.getElementById('result').value;
  const result = safeEval(expression);

  if (isNaN(result) || !isFinite(result)) {
    document.getElementById('result').value = 'Error';
  } else {
    document.getElementById('result').value = result;
  }
}

// Calculates the square root of the expression and updates the result input field
function sqrt() {
  const expression = document.getElementById('result').value;
  const result = safeEval(expression);

  if (isNaN(result) || !isFinite(result)) {
    document.getElementById('result').value = 'Error';
  } else {
    document.getElementById('result').value = Math.sqrt(result);
  }
}

// Simulates a backspace operation by removing the last character from the result input field
function backspace() {
  let currentExpression = document.getElementById('result').value;
  document.getElementById('result').value = currentExpression.slice(0, -1);
}

// Calculates the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Performs trigonometric operations (sin, cos, tan, cot) based on the provided operation
function trig(operation) {
  const expression = document.getElementById('result').value;
  const angleInDegrees = safeEval(expression);
  let result;

  switch (operation) {
    case 'sin':
      result = Math.sin(angleInDegrees * (Math.PI / 180));
      break;
    case 'cos':
      result = Math.cos(angleInDegrees * (Math.PI / 180));
      break;
    case 'tan':
      result = Math.tan(angleInDegrees * (Math.PI / 180));
      break;
    case 'cot':
      const tanValue = Math.tan(angleInDegrees * (Math.PI / 180));
      result = 1 / tanValue;
      break;
    default:
      result = 'Invalid operation';
  }

  if (isNaN(result) || !isFinite(result)) {
    document.getElementById('result').value = 'Error';
  } else {
    document.getElementById('result').value = result;
  }
}

// Handles special operations like square, cube, percentage, and factorial
function specialOperation(operation) {
  const expression = document.getElementById('result').value;
  const baseValue = safeEval(expression);
  let result;

  switch (operation) {
    case '^2':
      result = Math.pow(baseValue, 2);
      break;
    case '^3':
      result = Math.pow(baseValue, 3);
      break;
    case '%':
      result = baseValue / 100;
      break;
    case '!':
      result = factorial(baseValue);
      break;
    case '^':
      const exponent = parseFloat(prompt('Enter the exponent:'));
      if (!isNaN(exponent)) {
        result = Math.pow(baseValue, exponent);
      } else {
        result = 'Invalid exponent';
      }
      break;
    default:
      result = 'Invalid operation';
  }

  if (isNaN(result) || !isFinite(result)) {
    document.getElementById('result').value = 'Error';
  } else {
    document.getElementById('result').value = result;
  }
}

// Calculates the natural logarithm of the expression and updates the result input field
function log() {
  const expression = document.getElementById('result').value;
  const result = safeEval(expression);

  if (isNaN(result) || !isFinite(result) || result <= 0) {
    document.getElementById('result').value = 'Error';
  } else {
    document.getElementById('result').value = Math.log(result);
  }
}

// Calculates the exponential of the expression and updates the result input field
function exp() {
  const expression = document.getElementById('result').value;
  const result = safeEval(expression);

  if (isNaN(result) || !isFinite(result)) {
    document.getElementById('result').value = 'Error';
  } else {
    document.getElementById('result').value = Math.exp(result);
  }
}
// Calculates the factorial of a number
// Calculates the factorial of a number
function factorial() {
  const expression = document.getElementById('result').value;
  const n = parseFloat(expression);

  if (isNaN(n) || n < 0 || n % 1 !== 0) {
    // Display 'Error' for invalid input
    document.getElementById('result').value = 'Error';
  } else {
    const result = calculateFactorial(n);
    document.getElementById('result').value = result;
  }
}

// Helper function to calculate factorial
function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

