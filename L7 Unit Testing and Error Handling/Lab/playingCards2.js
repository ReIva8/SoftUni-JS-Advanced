//function that returns a Card object holding the card’s face and suit. 
//Throw an error if the card is initialized with an invalid face.
//Both face and suit are expected as an uppercase string. 
//object needs to have a toString() method that prints the card’s face and suit as a string.

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
console.log(playingCards2('A', 'S'));