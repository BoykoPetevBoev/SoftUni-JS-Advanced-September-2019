function solve(array) {
    let storage = {};
    let bottles = {};
    for (let line of array) {
        let [name, quantity] = line.split(' => ');
        if (!storage.hasOwnProperty(name)) {
            storage[name] = 0;
        }
        storage[name] += Number(quantity);
        if(storage[name] >= 1000){
            bottles[name] = Math.floor(storage[name] / 1000);
        }
    }
    Object.entries(bottles)
        .forEach(element => {
        console.log(`${element[0]} => ${element[1]}`);
    });
}
solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);