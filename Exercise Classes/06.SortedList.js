class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }
    add(num) {
        this.numbers.push(Number(num));
        this.size = this.numbers.length;
        return this.numbers.sort((a, b) => a - b);
    }
    remove(index) {
        if (0 <= index && index < this.size) {
            this.numbers.splice(index, 1);
            this.size = this.numbers.length;
            return this.numbers;
        }
    }
    get(index) {
        if (0 <= index && index < this.size) {
            return this.numbers[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
