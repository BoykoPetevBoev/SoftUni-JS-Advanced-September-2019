function solve(...input) {
    let fruit = input[0];
    let weight = Number(input[1] / 1000);
    let money = Number(input[2] * weight);
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);