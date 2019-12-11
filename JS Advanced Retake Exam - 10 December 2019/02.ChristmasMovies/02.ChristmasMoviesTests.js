const ChristmasMovies = require('./02. Christmas Movies_Resources');
const expect = require('chai').expect;
const assert = require('chai').assert;
const beforeEach = require('mocha').beforeEach;

describe('ChristmasMovies', function () {
    let obj;
    beforeEach(function () {
        obj = new ChristmasMovies;
    });
    describe('constructor tests', function () {
        it('movieCollection => []', function(){
            expect(obj.movieCollection).to.deep.equal([]);
        });
         it('watched => {}', function(){
            expect(obj.watched).to.deep.equal({});
        });
         it('actors => []', function(){
            expect(obj.actors).to.deep.equal([]);
        });
    });
    describe('buyMovie() tests', function(){
        it('Buy movie mesage', function(){
            expect(obj.buyMovie('Movie', ['Person1', 'Person2'])).to.equal('You just got Movie to your collection in which Person1, Person2 are taking part!');
        });
        it('Added in colection', function(){
            obj.buyMovie('Movie', ['Person1', 'Person2']);
            expect(obj.movieCollection[0].name).to.equal('Movie');
        });
        it('Unique actors', function(){
            obj.buyMovie('Movie', ['P1','P1' , 'P2']);
            expect(obj.movieCollection[0].actors).to.deep.equal(['P1', 'P2']);
        });
        it('Already buyed => Error', function(){
            obj.buyMovie('Movie', ['Person1', 'Person2']);
            expect(() => obj.buyMovie('Movie', ['Person1', 'Person2'])).to.throw(Error, 'You already own Movie in your collection!');
        });
    });
    describe('discardMovie() tests', function(){
        it('Invalid movie => Error', function(){
            expect(() => obj.discardMovie('Movie')).to.throw(Error, 'Movie is not at your collection!');
        });
        it('Discard mesage', function(){
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            expect(obj.discardMovie('Movie')).to.equal('You just threw away Movie!');
        });
        it('Clear collection', function(){
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            obj.discardMovie('Movie');
            expect(obj.movieCollection).to.deep.equal([]);
        });
        it('Clear watched', function(){
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            obj.discardMovie('Movie');
            expect(obj.watched).to.deep.equal({});
        });
    });
    describe('watchMovie() tests', function(){
        it('Invalid movie => Error', function(){
            expect(() => obj.watchMovie('Movie')).to.throw(Error, 'No such movie in your collection!');
        });
        it('Add in watched', function(){
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            expect(obj.watched['Movie']).to.equal(1);
        });
        it('Increase watched value', function(){
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            obj.watchMovie('Movie');
            expect(obj.watched['Movie']).to.equal(2);
        });
    });
    describe('favouriteMovie() tests', function(){
        it('No movies => Error', function(){
            expect(() => obj.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
        it('Favourite movies mesage', function(){
            obj.buyMovie('Movie1', ['Boyko']);
            obj.buyMovie('Movie2', ['Pesho']);
            obj.watchMovie('Movie1');
            obj.watchMovie('Movie2');
            obj.watchMovie('Movie1');
            expect(obj.favouriteMovie()).to.equal('Your favourite movie is Movie1 and you have watched it 2 times!');
        });
    });
    describe('mostStarredActor() tests', function(){
        it('No movies => Error', function(){
            expect(() => obj.mostStarredActor()).to.throw(Error,'You have not watched a movie yet this year!');
        });
        it('Most starred actor mesage', function(){
            obj.buyMovie('Movie1', ['Boyko']);
            obj.buyMovie('Movie2', ['Pesho']);
            obj.buyMovie('Movie3', ['Boyko']);
            expect(obj.mostStarredActor()).to.equal('The most starred actor is Boyko and starred in 2 movies!');
        });
    });
});
