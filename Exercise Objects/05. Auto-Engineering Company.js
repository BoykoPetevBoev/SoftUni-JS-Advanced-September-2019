function solve(input) {
    let brandMark = {};
    let markCars = {};
    for(let line of input){
        let [mark, model, cars] = line.split(' | ');
        if(!brandMark.hasOwnProperty(mark)){
            brandMark[mark] = [];
        }
        if(!brandMark[mark].includes(model)){
            brandMark[mark].push(model);
        }
        if(!markCars.hasOwnProperty(model)){
            markCars[model] = 0;
        }
        markCars[model] += Number(cars); 
    }
    Object.keys(brandMark).forEach(element => {
        console.log(element);
        for(let i of brandMark[element]){
            console.log(`###${i} -> ${markCars[i]}`);
        }
    });
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);