function solve(input) {
    let pirateShip = input.shift().split('>').map((n) => Number(n));
    let warship = input.shift().split('>').map((n) => Number(n));
    let maxHealth = Number(input.shift());
    let stop = false;
    for (let line of input) {
        if (line === 'Retire') {
            break;
        }
        else if (line === 'Status') {
            status();
        }
        let commands = line.split(' ');
        if (commands.includes('Fire')) {
            commands.shift();
            stop = fire(commands);
        }
        else if (commands.includes('Defend')) {
            commands.shift();
            stop = defend(commands);
        }
        else if (commands.includes('Repair')) {
            commands.shift();
            repair(commands);
        }
        if (stop) {
            break;
        }
    }
    if (!stop) {
        let pirateStatus = resultInfo(pirateShip);
        console.log(`Pirate ship status: ${pirateStatus}`);
        let warshipStatus = resultInfo(warship);
        console.log(`Warship status: ${warshipStatus}`);
    }

    function fire(arr) {
        let [index, damage] = arr.map((n) => Number(n));
        if (0 <= index && index < warship.length) {
            warship[index] -= damage;
            if (warship[index] <= 0) {
                console.log('You won! The enemy ship has sunken.');
                return true;
            }
        }
        return false;
    }
    function defend(arr) {
        let [start, stop, damage] = arr.map((n) => Number(n));
        if (pirateShip[start] != undefined && pirateShip[stop] != undefined) {
            for (let i = start; i <= stop; i++) {
                pirateShip[i] -= damage;
                if (pirateShip[i] <= 0) {
                    console.log('You lost! The pirate ship has sunken.');
                    return true;
                }
            }
        }
        return false;
    }
    function repair(arr) {
        let [index, health] = arr.map((n) => Number(n));
        if (pirateShip[index] != undefined) {
            pirateShip[index] += health;
            if (pirateShip[index] > maxHealth) {
                pirateShip[index] = maxHealth;
            }
        }
    }
    function status() {
        let minHealth = maxHealth * 0.2;
        let shipsForReapair = pirateShip.filter((n) => n < minHealth);
        console.log(`${shipsForReapair.length} sections need repair.`);
    }
    function resultInfo(arr) {
        let status = arr.reduce((a, b) => a + b);
        return status;
    }
}

// solve([
//     '12>13>11>20>66',
//     '12>22>33>44>55>32>18',
//     '70',
//     'Fire 2 11',
//     'Fire 8 100',
//     'Defend 3 6 11',
//     'Defend 0 3 5',
//     'Repair 1 33',
//     'Status',
//     'Retire'
// ]);
solve([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
]);