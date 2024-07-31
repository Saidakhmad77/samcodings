document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';
    let waitingForSecondOperand = false;

    const updateDisplay = () => {
        display.value = currentInput;
    };

    const handleButtonClick = (e) => {
        const value = e.target.getAttribute('data-value');
        
        if (value >= '0' && value <= '9' || value === '.') {
            if (waitingForSecondOperand) {
                currentInput = value;
                waitingForSecondOperand = false;
            } else {
                currentInput += value;
            }
        } else if (value === '=') {
            if (operator && operand1 !== '' && currentInput !== '') {
                operand2 = currentInput;
                currentInput = calculate(operand1, operator, operand2);
                operand1 = currentInput;
                operator = '';
                waitingForSecondOperand = true;
            }
        } else {
            if (operand1 === '') {
                operand1 = currentInput;
            } else if (operator) {
                operand1 = calculate(operand1, operator, currentInput);
            }
            operator = value;
            waitingForSecondOperand = true;
        }
        updateDisplay();
    };

    const calculate = (operand1, operator, operand2) => {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);

        switch (operator) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num1 / num2;
            default: return num2;
        }
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
