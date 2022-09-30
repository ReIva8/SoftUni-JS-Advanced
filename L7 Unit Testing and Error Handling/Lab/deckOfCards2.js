//takes a deck of cards as an array of strings and prints them as a sequence of cards (space separated

function deckOfCards2(arr) {
    function playingCards2(par1, par2) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660', 
            H: '\u2665',
            D: '\u2666',
            C: '\u2666',
        };
    
        if(faces.indexOf(par1) === -1) {
            throw new Error('Invalid face: ' + par1);
        }
        if(suits[par2] === undefined) {
            throw new Error('Invalid suit: ' + par2);
        }
    
        const result = {
            par1,
            par2: suits[par2],
            toString() {
                return this.par1 + this.par2;
            },
        };
        return result;
    
    }

    try {
        console.log(arr.map(card => {
            const face = card.slice(0, -1);
            const suit = card.slice(-1);
            return playingCards2(face, suit);
        }).join(' '));
    }
    catch (card) {
        console.log(`Invalid card: ${card}`);
    }
}
deckOfCards2(['AS', '10D', 'KH', '2C']);