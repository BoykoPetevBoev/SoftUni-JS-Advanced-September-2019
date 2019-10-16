const isOddOrEven = require("./02.Even-or-Odd.js");

let expect = require('chai').expect;
//let assert = require('chai').assert;

describe('02.Test Even or Odd function', function(){
    it('Test for undefined', function(){
        expect(isOddOrEven(1)).to.equal(undefined);
    })
    it('Test for even', function(){
        expect(isOddOrEven('abcd')).to.equal('even');
    })
    it('Test for odd', function(){
        expect(isOddOrEven('abc')).to.equal('odd');
    })
});

