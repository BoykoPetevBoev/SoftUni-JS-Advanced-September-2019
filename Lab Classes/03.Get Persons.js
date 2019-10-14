function solve() {
    let array = [];
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    array.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    array.push(new Person('SoftUni', '', '', ''));
    array.push(new Person('Stephan', 'Johnson', 25, ''));
    array.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));
    return array;
}
console.log(solve())