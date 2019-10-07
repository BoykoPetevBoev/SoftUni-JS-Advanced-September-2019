function solve(input) {
    let array = input.slice();
    let step = Number(array.pop());
    for (let i = 0; i < array.length; i += step) {
        console.log(array[i]);
    }
}
    solve(['1', 
    '2',
    '3', 
    '4', 
    '5', 
    '6']
    
    )

