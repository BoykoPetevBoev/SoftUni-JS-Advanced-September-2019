let solution = (function () {
    const products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    function addMicroelement(microelement, quantity) {
        storage[microelement] += quantity;
        return 'Success';
    }
    function prepareProduct(recipe, quantity) {
        let checkStoreage = isEnough();
        if(checkStoreage === 'Success'){
            cook();
        }
        return checkStoreage;
        function cook(){
            for (let microelement in products[recipe]){
                let needed = products[recipe][microelement] * quantity;
                storage[microelement] -= needed;
            }
        }
        function isEnough() {
            let result = 'Success';
            for (let  microelement in products[recipe]) {
                let needed = products[recipe][microelement] * quantity;
                if (storage[microelement] < needed) {
                    result = `Error: not enough ${microelement} in stock`;
                    break;
                }
            }
            return result;
        }
    }
    function storeInfo() {
        return Object.keys(storage).map((key) => { return `${key}=${storage[key]}` }).join(' ');
    }
    return function () {
        let [command, type, quantity] = arguments[0].split(' ');
        quantity = Number(quantity);
        const functions = {
            restock: () => {
                return addMicroelement(type, quantity);
            },
            prepare: () => {
                return prepareProduct(type, quantity);
            },
            report: () => {
                return storeInfo();
            }
        }
        return functions[command]();
    };
});
let manager = solution();

console.log(manager('restock flavour 50'));
// console.log(manager('prepare lemonade 4'));
// console.log('\n')
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));
// console.log('\n');

