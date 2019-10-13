class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = Number(clientId);
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(value) {
        const re = /^\d{6}$/g
        if (!re.test(value)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        const re = /[a-zA-Z1-9]+@[a-zA-z\.]+/g;
        if(!re.test(value)){
            throw new TypeError("Invalid e-mail");
        }
        this._email = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if(value.length < 3 || 20 < value.length){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        const re = /^[a-zA-Z]+$/g
        if(!re.test(value)){
            throw new TypeError("First name must contain only Latin characters");
        }
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        if(value.length < 3 || 20 < value.length){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        const re = /^[a-zA-Z]+$/g
        if(!re.test(value)){
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = value;
    }
}
let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')

console.log(acc)