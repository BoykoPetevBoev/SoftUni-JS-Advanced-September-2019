function solve(input) {
    let sum = input[0].reduce((a, b) => a + b);
    let result = true;
    for (let i = 0; i < input.length; i++) {
        let row = input[i].reduce((a, b) => a + b);
        let column = input.map((n) => n[i]).reduce((a, b) => a + b);
        if(row != sum || column != sum) {
            result = false;
            break;
        }
    }
    console.log(result);
}
solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);