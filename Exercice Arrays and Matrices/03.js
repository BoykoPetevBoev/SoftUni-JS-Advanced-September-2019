function solve(input) {
    let commands = {
        add: (arr, num)=>[...arr, num],
        remove: (arr)=>[...arr.slice(0, arr.length - 1)]
    }
    let counter = 1;
    let result = input.reduce((acc, curr) => {
        acc = commands[curr](acc, counter);
        counter++;
        return acc;
    },[]);
    return result.length === 0 ? 'Empty' : result.join('\n');
}
console.log(solve([
    
]))

solve(['add', 
'add', 
'remove', 
'add', 
'add']

);