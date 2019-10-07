function solve(input) {
    let items = input.shift().split('|');
    let result = 0;
    for (let line of input) {
        if (line == 'Yohoho!') {
            break;
        }
        else if (line.includes('Loot')) {
            addItems(line);
        }
        else if (line.includes('Drop')) {
            dropItem(line);
        }
        else if (line.includes('Steal')) {
            removeItems(line);
        }
    }
    if (items.length != 0) {
        for (let i of items) {
            result += i.length;
        }
        result /= items.length;
        console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
    }
    else {
        console.log('Failed treasure hunt.');
    }
    function addItems(string) {
        let newItems = string.split(' ');
        newItems.shift();
        for (let item of newItems) {
            if (!items.includes(item)) {
                items.unshift(item);
            }
        }
    }
    function dropItem(string) {
        let index = Number(string.split(' ').pop());
        if (0 <= index && index < items.length) {
            let [item] = items.splice(index, 1);
            items.push(item);
        }
    }
    function removeItems(string) {
        let count = Number(string.split(' ').pop());
        let index = items.length - count;
        if(index < 0){
            index = 0;
        }
        let removedItems = items.splice(index);
        console.log(removedItems.join(', '));
    }
}

solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 10',
    'Steal 10',
    'Yohoho!'
]);
solve([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
]);