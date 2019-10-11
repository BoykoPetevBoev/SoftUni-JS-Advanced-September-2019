function solve(array, string) {
    class Ticket {
        constructor([destination, price, status]) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let result = [];
    createInfo();
    sortInfo();
    return result;
    function createInfo() {
        for (let line of array) {
            result.push(new Ticket(line.split('|')));
        }
    }
    function sortInfo() {
        result.sort((a, b) =>
            string === 'price'
                ? a[string] - b[string]
                : a[string].localeCompare(b[string])
        )
    }
}
console.log(
    solve([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'destination'
    )
)

