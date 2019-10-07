function solve(input) {
    let matrix = input
        .map((str) => str
            .split(' ')
            .map(Number)
        );
    let firstSum = 0;
    let secondSum = 0;
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        firstSum += matrix[i][i];
        secondSum += matrix[i][matrix.length - i - 1];
    }
    firstSum === secondSum ? result = fillMatrix() : result = matrix.slice();
    return result
        .map((arr) => arr
            .join(' ')
        )
        .join('\n');
    function fillMatrix() {
        return matrix
            .map((arr, i) => arr
                .map((num, j) => {
                    if (i !== j && j !== arr.length - i - 1) {
                        return num = firstSum;
                    }
                    return num
                })
            );
    }
}
console.log(
    solve([
        '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ]));
console.log(
    solve([
        '1 1 1',
        '1 1 1',
        '1 1 0'
    ]));