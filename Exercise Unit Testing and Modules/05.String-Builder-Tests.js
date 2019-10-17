const StringBuilder = require('./05.String-Builder.js');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe("05.StringBuilder function", function () {

     it('should have the correct function properties', function () {
        assert.isFunction(StringBuilder.prototype.append);
        assert.isFunction(StringBuilder.prototype.prepend);
        assert.isFunction(StringBuilder.prototype.insertAt);
        assert.isFunction(StringBuilder.prototype.remove);
        assert.isFunction(StringBuilder.prototype.toString);
    });
    describe('constructor', function () {
        it('Test withh string', function () {
            let myObj = new StringBuilder('str');
            expect(myObj).to.have.property('_stringArray').with.lengthOf(3);
        });
        it('Test with empty value', function () {
            let myObj = new StringBuilder();
            expect(myObj).to.have.property('_stringArray').with.lengthOf(0);
        });
        it('Test with wrong parameter', function () {
            expect(() => new StringBuilder(1)).to.Throw('Argument must be string');
        });
    });
    describe('append', function () {
        let myObj = new StringBuilder('Str');
        myObj.append('T');
        it('Test new length', function () {
            expect(myObj).to.have.property('_stringArray').with.lengthOf(4);
        });
        it('Test if added at the end', function () {
            expect(myObj._stringArray[3]).to.equal('T');
        });
    });
    describe('prepend', function () {
        let myObj = new StringBuilder('Str');
        myObj.prepend('a');
        it('Test new length', function () {
            expect(myObj).to.have.property('_stringArray').with.lengthOf(4);
        });
        it('Test if added at the beginning', function () {
            expect(myObj._stringArray[0]).to.equal('a');
        });
    });
    describe('insertAt', function () {
        let myObj = new StringBuilder('ab');
        myObj.insertAt('TEST', 1);
        it('Test new length', function () {
            expect(myObj).to.have.property('_stringArray').with.lengthOf(6);
        });
        it('Test if the string is inserted at index', function () {
            expect(myObj._stringArray[1]).to.equal('T');
        });
    });
    describe('remove', function () {
        let myObj = new StringBuilder('abc');
        myObj.remove(1, 1);
        it('Test new length', function () {
            expect(myObj).to.have.property('_stringArray').with.lengthOf(2);
        });
        it('Test result', function () {
            expect(myObj._stringArray.join('')).to.equal('ac');
        });
    });
    describe('toString', function () {
        let result = new StringBuilder('test');
        it('Test if joined', function () {
            expect(result.toString()).to.equal('test');
        });
    });
});
