const PizzUni = require('./02.PizzUni');
const expect = require('chai').expect;
const beforeEach = require('mocha').beforeEach;

describe('PizzUni', function () {
    let obj;
    beforeEach(function () {
        obj = new PizzUni;
    });
    describe("Test constructor", function () {
        it("registeredUsers", function () {
            expect(typeof obj.registeredUsers).to.equal('object');
            expect(obj.registeredUsers.length).to.equal(0);
        });
        it("availableProducts", function () {
            expect(typeof obj.availableProducts).to.equal('object');
            expect(obj.availableProducts).to.have.property('pizzas').with.length(3);
            expect(obj.availableProducts).to.have.property('drinks').with.length(3);
        });
        it("orders", function () {
            expect(typeof obj.orders).to.equal('object');
            expect(obj.orders.length).to.equal(0);
        });
    });
    describe("registerUser(email)", function () {
        it("Register correctly", function () {
            obj.registerUser('email.com');
            expect(typeof obj.registeredUsers[0]).to.equal('object');
        });
        it("Throw Error", function () {
            obj.registerUser('email.com');
            expect(() => obj.registerUser('email.com')).to.throw(Error, `This email address (email.com) is already being used!`);
        });
        it("Return current user", function () {
            const currentUser = {
                email: 'email.com',
                orderHistory: []
            }
            expect(obj.registerUser('email.com')).to.deep.equal(currentUser);
        });
    });
    describe("makeAnOrder()", function () {
        it("Invalid user", function () {
            const order = () => obj.makeAnOrder('invName', 'Italian Style', 'Fanta');
            expect(order).to.throw(Error, `You must be registered to make orders!`);
        });
        it("Invalid pizza", function () {
            obj.registerUser('email.com')
            const order = () => obj.makeAnOrder('email.com', '', 'Fanta');
            expect(order).to.throw(Error, 'You must order at least 1 Pizza to finish the order.');
        });
        it("User order history", function () {
            obj.registerUser('email.com');
            obj.makeAnOrder('email.com', 'Italian Style', 'Water');
            const order = [
                {
                    orderedPizza: 'Italian Style',
                    orderedDrink: 'Water'
                }
            ]
            expect(obj.registeredUsers[0].orderHistory).to.deep.equal(order);
        });
        it("Current order", function () {
            obj.registerUser('email.com');
            obj.makeAnOrder('email.com', 'Italian Style', 'Water');
            const order = {
                orderedPizza: 'Italian Style',
                orderedDrink: 'Water',
                email: 'email.com',
                status: 'pending'
            }
            expect(obj.orders[0]).to.deep.equal(order);
        });
        it("Index of the order", function () {
            obj.registerUser('email.com');
            expect(obj.makeAnOrder('email.com', 'Italian Style', 'Water')).to.equal(0);
        });
    });
    describe("completeOrder()", function () {
        it("Complete order status", function () {
            obj.registerUser('email.com');
            obj.makeAnOrder('email.com', 'Italian Style', 'Water');
            const order = {
                orderedPizza: 'Italian Style',
                orderedDrink: 'Water',
                email: 'email.com',
                status: 'completed'
            }
            expect(obj.completeOrder()).to.deep.equal(order)
        });
    });
    describe("detailsAboutMyOrder({id})", function () {
        it("Valid index", function () {
            obj.registerUser('email.com');
            obj.makeAnOrder('email.com', 'Italian Style', 'Water');
            expect(obj.detailsAboutMyOrder(0)).to.equal(`Status of your order: pending`);
        });
        it("Invalid index", function () {
            obj.registerUser('email.com');
            expect(obj.detailsAboutMyOrder(0)).to.equal(undefined);
        });
    });
    describe("doesTheUserExist({email})", function () {
        it("Valid email", function () {
            obj.registerUser('email.com');
            const user = {
                email: 'email.com',
                orderHistory: []
            }
            expect(obj.doesTheUserExist('email.com')).to.deep.equal(user);
        });
        it("Invalid email", function () {
            expect(obj.doesTheUserExist('email.com')).to.equal(undefined);
        });
    });
});