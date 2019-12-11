class ChristmasDinner {
    constructor(money) {
        if(money < 0){
            throw new Error("The budget cannot be a negative number");
        }
        this.budget = money;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    shopping(product){
        const type = product[0];
        const price = Number(product[1]);
        if(this.budget >= price){
            this.products.push(type);
            this.budget -= price;
            return `You have successfully bought ${type}!`;
        }
        else {
            throw new Error("Not enough money to buy this product");
        }
    }
    recipes(recipe){
        const recipeName = recipe.recipeName;
        const productsList = recipe.productsList;
        const missingProducts = productsList.filter(product => !this.products.includes(product));
        if(missingProducts.length === 0){
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`;
        }
        else {
            throw new Error("We do not have this product");
        }
    }
    inviteGuests(name, dish){
        if(!this.dishes.find(obj => obj.recipeName === dish)){
            throw new Error("We do not have this dish");
        }
        else if(this.guests.hasOwnProperty(name)){
            throw new Error("This guest has already been invited");
        }
        else {
            this.guests[`${name}`] = dish;
            return `You have successfully invited ${name}!`;
        }
    }
    showAttendance(){
        const names = Object.keys(this.guests);
        let result = [];
        for(let name of names){
            const dish = this.guests[name];
            const products = this.dishes.find(obj => obj.recipeName === dish);
            result.push(`${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`);
        }
        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(-300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
