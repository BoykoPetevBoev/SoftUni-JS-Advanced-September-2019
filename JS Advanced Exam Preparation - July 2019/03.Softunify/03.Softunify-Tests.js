const SoftUniFy = require("./03. Softunify.js");

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('SoftUniFy', () => {
    it('property => {}', () => {
        let newObj = new SoftUniFy()
        expect(typeof newObj.allSongs).to.equal('object');
    });
    it('length => 0', () => {
        let newObj = new SoftUniFy()
        expect(Object.keys(newObj.allSongs).length).to.equal(0);
    });
    describe('downloadSong', () => {
        it('Name => object', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name', 'Song', 'Text');
            expect(typeof newObj.allSongs['Name']).to.equal('object');
        });
        it('rate => 0', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name', 'Song', 'Text');
            expect(newObj.allSongs['Name']['rate']).to.equal(0);
        });
        it('votes => 0', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name', 'Song', 'Text');
            expect(newObj.allSongs['Name']['votes']).to.equal(0);
        });
        it('songs.length => 1', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name', 'Song', 'Text');
            expect(newObj.allSongs['Name']).to.have.property('songs').with.length(1);
        });
        it('songs.length => 2', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name', 'Song1', 'Text1');
            newObj.downloadSong('Name', 'Song2', 'Text2');
            expect(newObj.allSongs['Name']).to.have.property('songs').with.length(2);
        });
    });
    describe('playSong', () => {
        it('Invalid Song => message', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name1', 'Song1', 'Text1');
            expect(newObj.playSong('Song2')).to.equal("You have not downloaded a Song2 song yet. Use SoftUniFy's function downloadSong() to change that!");
        });
        it('Valid Song => songInfo', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name1', 'Song1', 'Text1');
            expect(newObj.playSong('Song1')).to.equal('Name1:\nSong1 - Text1\n');
        });
    });
    describe('songList', () => {
        it('Empty list => message', () => {
            let newObj = new SoftUniFy;
            expect(newObj.songsList).to.equal('Your song list is empty');
        });
        it('List => song-lyrics', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name1', 'Song1', 'Text1');
            newObj.downloadSong('Name2', 'Song2', 'Text2');
            expect(newObj.songsList).to.equal('Song1 - Text1\nSong2 - Text2');
        });
    });
    describe('RateArtist', () => {
        it('Invalid param => message', () => {
            let newObj = new SoftUniFy;
            expect(newObj.rateArtist('Name', 1)).to.equal('The Name is not on your artist list.');
        });
        it('Rate => 10', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name1', 'Song1', 'Text1');
            newObj.rateArtist('Name1', 10)
            expect(newObj.allSongs['Name1']['rate']).to.equal(10);
        });
        it('Vote => 1', () => {
            let newObj = new SoftUniFy;
            newObj.downloadSong('Name1', 'Song1', 'Text1');
            newObj.rateArtist('Name1', 10)
            expect(newObj.allSongs['Name1']['votes']).to.equal(1);
        });
    });
});