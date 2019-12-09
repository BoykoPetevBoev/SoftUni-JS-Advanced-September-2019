const ClassName = require('./solution');
const expect = require('chai').expect;
const assert = require('chai').assert;
const beforeEach = require('mocha').beforeEach;

describe('ClassName', function () {
    let obj;
    beforeEach(function () {
        obj = new ClassName;
    });
    describe('description', function () {
        it('description', function () {
            expect(TODO).to.equal('Value');
        });
        it('description', function () {
            expect(() => TODO).to.throw(Error, 'Error Mesage');
        });
    });
});
