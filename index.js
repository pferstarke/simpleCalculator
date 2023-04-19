const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const buttons = document.querySelectorAll('button:not(#clear)');

const clearDisplay = function() {
  display.value = '';
};

const calculateResult = function() {
  let result = eval(display.value);
  display.value = result;
};

const handleClick = function(event) {
  let value = event.target.value;
  
  if (value === '=') {
    calculateResult();
  } 
  else if (value === 'C') {
    clearDisplay();
  } 
  else {
    display.value += value;
  }
};

buttons.forEach(function(button) {
  button.addEventListener('click', handleClick);
});

clearBtn.addEventListener('click', clearDisplay);
