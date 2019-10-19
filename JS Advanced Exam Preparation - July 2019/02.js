class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
    get numberOfChildren() {
        return Object
            .values(this.kids)
            .reduce((acc, arr) => { return acc += arr.length }, 0);
    }
    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }
        const index = this.kids[grade].findIndex(k => k.startsWith(name));

        if (index > -1) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }
        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade];
    }
    removeChild(name, grade) {
        if (this.kids.hasOwnProperty(grade)) {
            for (let i = 0; i < this.kids[grade].length; i++) {
                if (this.kids[grade][i].includes(name)) {
                    this.kids[grade].splice(i, 1);
                    return this.kids[grade];
                }
            }
        }
        return `We couldn't find ${name} in ${grade} grade.`;
    }
    toString() {
        let result = '';
        if (this.numberOfChildren > 0) {
            result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
            Object
                .keys(this.kids)
                .sort((a, b) => a - b)
                .forEach(grade => {
                    if (this.kids[grade].length > 0) {
                        result += `Grade: ${grade}\n`;
                        for (let i = 0; i < this.kids[grade].length; i++) {
                            result += `${i + 1}. ${this.kids[grade][i]}\n`;
                        }
                    }
                });
        }
        else {
            result = `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        return result;
    }
}
let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Gosho', 5, 3000);
console.log(vacation.removeChild('Gosho', 5))

console.log(vacation.removeChild('Gosho', 5))



console.log(vacation.toString());
