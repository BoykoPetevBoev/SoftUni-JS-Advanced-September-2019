function solve(array) {
    console.log('<table>');
    for (let line of array) {
        let info = Object.values(JSON.parse(line)).map((x) => `  <td>${x}</td>`);
        print(info);
    }
    console.log('</table>');
    function print(arr){
        console.log(' <tr>');
        for(let i of arr){
            console.log(i);
        }
        console.log(' </tr>');
    }
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);