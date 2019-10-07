function solve() {
    let expression = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');
    let stringExp = '';
    let operator = false;
    document
        .querySelector("#calculator")
        .addEventListener('click', (button) => {
            const operators = ['/', '*', '-', '+'];
            const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const regExp = /^\d+(\.\d+)? [*/+-] \d+(\.\d+)?$/g;
            let btn = button.target.value;
            if (btn === 'Clear') {
                expression.innerHTML = '';
                result.innerHTML = '';
                stringExp = '';
                operator = false;
            }
            if (result.innerHTML != '') {
                return '';
            }
            if (numbers.includes(btn) || (btn === '.' && stringExp != '')) {
                stringExp += btn;
                expression.innerHTML = stringExp;
            }
            else if (operators.includes(btn) && !operator && !stringExp.endsWith('.')) {
                stringExp += ` ${btn} `;
                expression.innerHTML = stringExp;
                operator = true;
            }
            else if (btn === '=') {
                if (regExp.test(stringExp)) {
                    printResult();
                }
                else {
                    result.innerHTML = NaN;
                }
            }
            function printResult() {
                let [a, sign, b] = stringExp.split(' ');
                a = Number(a);
                b = Number(b);
                if (sign == '+') {
                    result.innerHTML = a + b;
                }
                else if (sign == '-') {
                    result.innerHTML = a - b;
                }
                else if (sign == '/') {
                    result.innerHTML = a / b;
                }
                else if (sign == '*') {
                    result.innerHTML = a * b;
                }
            }
        });
}
