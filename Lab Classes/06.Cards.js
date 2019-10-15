const result = (function () {
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }
        get face() {
            return this._face;
        }
        set face(value) {
            if (!validFaces.includes(value)) {
                throw new Error('Invalid card face!');
            }
            return this._face = value;
        }
        get suit() {
            return this._suit;
        }
        set suit(value) {
            if (value === '♠' || value === '♥' || value === '♦' || value === '♣') {
                return this._suit = value;
            }
            else {
                throw new Error('Invalid card suit!');
            }
        }
    }
    return {
        Suits: Suits,
        Card: Card
    }
}())
let Card = result.Card;
let Suits = result.Suits;

// let card = new Card('Q', Suits.CLUBS);
// card.face = 'A';
// card.suit = Suits.DIAMONDS;
//let card2 = new Card("2",Suits.Pesho);
let card3 = new Card('2', 'dfsdf')
