function solve(input) {
    let array = input.slice();
    let biggestNum = array[0];
    let result = [];
    for (let num of array) {
        if (num >= biggestNum) {
            result.push(num);
            biggestNum = num;
        }
    }
    console.log(result.join('\n'));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]

);