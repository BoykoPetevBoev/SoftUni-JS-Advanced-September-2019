function solve(arr) {
    let totalMoney = 0;
    for(let line of arr){
        line = line.split(', ');
        let money = Number(line.shift());
        let neededMoney = orderMoney(line);
        let change = Math.abs(money - neededMoney).toFixed(2);
        if(money >= neededMoney){
            console.log(`You ordered ${line[0]}. Price: $${neededMoney.toFixed(2)} Change: $${change}`);
            totalMoney += neededMoney;
        }
        else {
            console.log(`Not enough money for ${line[0]}. Need $${change} more.`);
        }
    }
    console.log(`Income Report: $${totalMoney.toFixed(2)}`);
    function orderMoney(order){
        let money = 0;
        let sugar = Number(order.pop());
        if(order.includes('coffee') && order.includes('decaf')){
            money += 0.90;
        }
        else {
            money += 0.80;
        }
        if(order.includes('milk')){
            let milk = money * 0.1;
            money += Number(milk.toFixed(1));   
        }
        if(sugar !== 0){
            money += 0.10;
        }
        return money;
    }
}

solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);