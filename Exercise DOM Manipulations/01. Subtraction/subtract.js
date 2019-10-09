function subtract() {
    const firstNum = document.getElementById('firstNumber');
    const secondNum = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    if(firstNum === null || secondNum === null || result === null){
        throw new Error('Error!');
    }
    let a = Number(firstNum.value);
    let b = Number(secondNum.value);
    result.textContent = a - b;
}