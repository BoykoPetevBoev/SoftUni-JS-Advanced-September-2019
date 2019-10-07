function solve(a, b) {
    let result = a % b;
    while (result != 0) {
        a = b;
        b = result;
        result = a % b;
    }
    console.log(b);
}

solve(15, 5);
solve(2154, 458);