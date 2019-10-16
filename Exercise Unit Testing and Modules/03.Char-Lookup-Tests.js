const lookupChar = require("./03.Char-Lookup.js");
const expect = require('chai').expect;

describe('03.Test lookupChar function', function(){
    it('Test for undefined string', function(){
        expect(lookupChar(1, 1)).to.equal(undefined);
    });
    it('Test for undefined index', function(){
        expect(lookupChar('str', '1')).to.equal(undefined);
    });
    it('Test for undefined index', function(){
        expect(lookupChar('str', 1.1)).to.equal(undefined);
    });
    it('Test if index < 0', function(){
        expect(lookupChar('str', -2)).to.equal("Incorrect index");
    });
    it('Test if index bigger than string', function(){
        expect(lookupChar('str', 4)).to.equal("Incorrect index");
    });
    it('Test if index equal to string', function(){
        expect(lookupChar('str', 3)).to.equal("Incorrect index");
    });
    it('Test for first char', function(){
        expect(lookupChar('str', 0)).to.equal('s');
    });
    it('Test for last char', function(){
        expect(lookupChar('str', 2)).to.equal('r');
    });
});
