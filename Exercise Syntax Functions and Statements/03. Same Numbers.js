function solve(input) {
    let arr = String(input).split('').map(n => Number(n));
    let isSame = arr.filter((n) => n != arr[0]);
    let sum = arr.reduce((acc, num) => acc + num);
    let result = isSame.length == 0 ? true : false;
    console.log(result);
    console.log(sum);
}

solve(2222223);