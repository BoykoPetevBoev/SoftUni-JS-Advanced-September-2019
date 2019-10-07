function solve([width, height, y, x]) {
    let createMatrix = () => new Array(width).fill(0);
    let processLine = (arr) => arr.join(' ')
    let matrix = Array(height)
        .fill()
        .map(createMatrix);
    matrix
        .map((arr, h) => arr
            .map((_, w) => {
                let sym = Math.max(Math.abs(x - w), Math.abs(y - h)) + 1;
                return matrix[h][w] = sym;
            }))
    return matrix.map(processLine).join('\n');
}
console.log(
    solve([20, 1, 10, 0])
);
















// console.log(
//     solve1([1, 10, 1, 1])
// );
// function solve1(input) {
//     let [width, height, x, y] = input;
//     let matrix = [];
//     for (let h = 0; h < height; h++) {
//         matrix[h] = [];
//         for (let w = 0; w < width; w++) {
//             let sym = Math.max(Math.abs(x - w), Math.abs(y - h)) + 1;
//             matrix[h][w] = sym;
//         }
//     }
//     return matrix.map((arr) => arr.join(' ')).join('\n');
// }
