function solve(array, string) {
    const obj = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    return array.sort(obj[string]);
}
console.log(
    solve([14, 7, 17, 6, 8], 'asc')
);
console.log(
    solve([14, 7, 17, 6, 8], 'desc')
);
