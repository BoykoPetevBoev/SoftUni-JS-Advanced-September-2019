let SkiResort = require('./solution');

let expect = require('chai').expect;
let assert = require('chai').assert;

const beforeEach = require('mocha').beforeEach;

describe('SkiResort', function () {
    let obj;
    beforeEach(function () {
        obj = new SkiResort('test');
    });
    describe('Constructor tests', function () {
        it("name => test", function () {
            expect(obj.name).to.be.a('string');
            expect(obj.name).to.equal('test');
        });
        it("voters => 0", function () {
            expect(obj.voters).to.equal(0);
        });
        it("hotels => []", function () {
            expect(Array.isArray(obj.hotels)).to.equal(true);
            expect(obj.hotels.length).to.equal(0);
        });
    });
    describe('Getter bestHotel', function () {
        it('voters = 0', function () {
            expect(obj.bestHotel).to.equal("No votes yet");
        });
        it('voters != 0', function () {
            obj.build('Hotel1', 5);
            obj.leave('Hotel1', 5, 2);
            expect(obj.bestHotel).to.equal("Best hotel is Hotel1 with grade 10. Available beds: 10")
        });
    });
    describe('Function build()', function () {
        it('name = "" => Error', function () {
            expect(() => obj.build('', 1)).to.throw(Error, "Invalid input");
        });
        it('beds = 0 => Error', function () {
            expect(() => obj.build('Hotel1', 0)).to.throw(Error, "Invalid input");
        });
        it('hotels.length => 1', function () {
            obj.build('Hotel1', 10);
            expect(obj.hotels.length).to.equal(1);
        });
        it('name, beds, points', function () {
            obj.build('Hotel1', 10);
            expect(obj.hotels[0].name).to.equal('Hotel1');
            expect(obj.hotels[0].beds).to.equal(10);
            expect(obj.hotels[0].points).to.equal(0);
        })
        it('build(Hotel1, 10)', function () {
            expect(obj.build('Hotel1', 10)).to.equal('Successfully built new hotel - Hotel1')
        });
    });
    describe('Function book()', function () {
        it('name = "" => Error', function () {
            expect(() => obj.book('', 1)).to.throw(Error, "Invalid input");
        });
        it('beds = 0 => Error', function () {
            expect(() => obj.book('Hotel1', 0)).to.throw(Error, "Invalid input");
        });
        it('hotel = undefined => Error', function () {
            expect(() => obj.book('invalid', 1)).to.throw(Error, "There is no such hotel");
        });
        it('hotel.beds < beds => Error', function () {
            obj.build('Hotel1', 1)
            expect(() => obj.book('Hotel1', 2)).to.throw(Error, "There is no free space");
        });
        it('book() => OK', function () {
            obj.build('Hotel1', 5)
            expect(obj.book('Hotel1', 5)).to.equal("Successfully booked");
        });
        it('hotel.beds => 0', function () {
            obj.build('Hotel1', 5)
            obj.book('Hotel1', 5)
            expect(obj.hotels[0].beds).to.equal(0);
        });
    });
    describe('Function leave()', function () {
        it('name = "" => Error', function () {
            expect(() => obj.leave('', 1)).to.throw(Error, "Invalid input");
        });
        it('beds = 0 => Error', function () {
            expect(() => obj.leave('Hotel1', 0)).to.throw(Error, "Invalid input");
        });
        it('hotel = undefined => Error', function () {
            expect(() => obj.leave('invalid', 1)).to.throw(Error, "There is no such hotel");
        });
        it('leave() => ОК', function () {
            obj.build('Hotel1', 5);
            expect(obj.leave('Hotel1', 5, 1)).to.equal("5 people left Hotel1 hotel");
        });
        it('points, beds, voters', function () {
            obj.build('Hotel1', 5);
            obj.leave('Hotel1', 5, 2);
            expect(obj.hotels[0].points).to.equal(10);
            expect(obj.hotels[0].beds).to.equal(10);
            expect(obj.voters).to.equal(5);
        });
    });
    describe('Function averageGrade()', function () {
        it('voters = 0', function () {
            expect(obj.averageGrade()).to.equal("No votes yet");
        });
        it('voters != 0', function(){
            obj.build('Hotel1', 5);
            obj.leave('Hotel1', 5, 2);
            expect(obj.averageGrade()).to.equal("Average grade: 2.00");
        });
    });
});
