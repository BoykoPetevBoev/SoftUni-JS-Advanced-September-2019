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
}
