function solve(input) {
    let array = input.slice();
    let rotation = Number(array.pop()) % array.length;
    if (rotation === 0) {
        return array.join(' ');
    }
    let result = array
        .slice(-rotation)
        .concat(array
            .slice(0, array.length - rotation)
        );
    return result.join(' ')
}
console.log(solve(
    ['Banana',
        'Orange',
        'Coconut',
        'Apple',
        '12']
))

console.log(
    solve(['1',
        '2',
        '3',
        '4',
        '5',
        '1']
    )
)