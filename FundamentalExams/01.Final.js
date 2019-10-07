function solve(input) {
    let username = input.shift();
    for (let line of input) {
        let [cmd, info1, info2] = line.split(' ');
        if (cmd === 'Case') {
            replaceLowerUpper(info1);
        }
        else if (cmd === 'Reverse') {
            reverse(info1, info2);
        }
        else if (cmd === 'Cut') {
            cut(info1);
        }
        else if (cmd === 'Replace') {
            replaceChar(info1);
        }
        else if (cmd === 'Check') {
            check(info1);
        }
    }
    function replaceLowerUpper(info) {
        if (info === 'lower') {
            username = username.toLowerCase();
        }
        else if (info === 'upper') {
            username = username.toUpperCase()
        }
        console.log(username);
    }
    function reverse(startIndex, endIndex) {
        endIndex++
        let valid1 = (0 <= startIndex && startIndex < username.length);
        let valid2 = (0 <= endIndex && endIndex < username.length);
        let string = '';
        if (valid1 && valid2) {
            string = username
                .substring(startIndex, endIndex)
                .split('')
                .reverse()
                .join('');
            console.log(string);
        }
    }
    function cut(substring) {
        if (username.includes(substring)) {
            username = username.replace(substring, '');
            console.log(username);
        }
        else {
            console.log(`The word ${username} doesn't contain ${substring}.`);
        }
    }
    function replaceChar(char) { 
        while(username.includes(char)){
            username = username.replace(char, '*');
        }
        console.log(username);
    }
    function check(char) { 
        if(username.includes(char)){
            console.log('Valid');
        }
        else {
            console.log(`Your username must contain ${char}.`);
        }
    }
}

solve(['Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up']);
solve(['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up']);