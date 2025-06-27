const display = document.getElementById('display');
let currentInput = '';
let resetDisplay = false;

// Append value to the input
function appendValue(value) {
  if (resetDisplay) {
    currentInput = '';
    resetDisplay = false;
  }

  const lastChar = currentInput.slice(-1);

  // Prevent multiple operators in a row
  if (isOperator(lastChar) && isOperator(value)) {
    currentInput = currentInput.slice(0, -1); // replace the last operator
  }

  // Prevent leading zeros
  if (currentInput === '0' && value !== '.' && !isOperator(value)) {
    currentInput = value;
  } else {
    currentInput += value;
  }

  display.value = currentInput;
}

// Clear the input
function clearDisplay() {
  currentInput = '';
  display.value = '0';
}

// Evaluate expression
function calculate() {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
    resetDisplay = true;
  } catch (e) {
    display.value = 'Error';
    currentInput = '';
  }
}

// Check if character is an operator
function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}
