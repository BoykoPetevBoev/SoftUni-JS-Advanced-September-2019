function solve(arr) {
    let sym = arr.pop();
    return arr.join(sym);
}

solve([
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);