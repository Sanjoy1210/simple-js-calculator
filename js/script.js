let operand;
let newValue = 0;
let previousValue = 0;
const inputValue = document.getElementById('input-field');

function getInputValue(input) {
    if (input >= '0' && input <= '9' || input == '.') {
        inputValue.value += input;
        previousValue = newValue;
    }
    else if (input == 'X') {
        inputValue.value = inputValue.value.substring(0, inputValue.value.length - 1);
    }
    else {
        newValue = parseFloat(inputValue.value);
        inputValue.value = '';
        operand = input;
    }
}

function calculate() {
    newValue = parseFloat(inputValue.value);
    switch (operand) {
        case '+':
            inputValue.value = previousValue + newValue;
            break;
        case '-':
            inputValue.value = previousValue - newValue;
            break;
        case 'x':
            inputValue.value = previousValue * newValue;
            break;
        case '/':
            inputValue.value = previousValue / newValue;
            break;
        default:
            inputValue.value = previousValue - (previousValue * (newValue / 100));
            break;
    }
}

document.getElementById('clear-button').addEventListener('click', function () {
    inputValue.value = '';
});
