function solve(input) {
    let arrays = [];
    for (let line of input) {
        let arr = JSON.parse(line)
            .sort((a, b) => b - a);
        arrays.push(arr);
    }
    let filteredArrays = new Set(arrays
        .sort((a, b) => a.length - b.length)
        .map((arr) => arr.join(', ')));
    let result = [...filteredArrays];
    for(let i of result){
        console.log(`[${i}]`)
    }
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);