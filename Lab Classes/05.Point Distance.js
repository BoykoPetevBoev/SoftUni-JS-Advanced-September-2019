class Point {
    constructor(x, y) {
        this.x = Number(x);
        this.y = Number(y);
    }
    static distance(obj1, obj2) {
        return Math.sqrt(Math.pow((obj2.x - obj1.x), 2) + Math.pow((obj2.y - obj1.y), 2));
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
