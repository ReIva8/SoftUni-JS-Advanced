//create a JS functionality that encodes and decodes some messages which travel to the network.
//you should get the given message from the first textarea. 
//Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII 


function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(ev) {
        let encodedMessage = '';
        let input = textAreas[0].value;
        for (let index = 0; index < input.length; index++) {
            encodedMessage += String.fromCharCode(input[index].charCodeAt(0) + 1);
        }
        textAreas[1].value = encodedMessage;
        textAreas[0].value = '';
    }

    function decode(ev) {
        let decodedMessage = '';
        let input = textAreas[1].value;

        for (let index = 0; index < input.length; index++) {
            decodedMessage += String.fromCharCode(input[index].charCodeAt(0) - 1);
        }
        textAreas[1].value = decodedMessage;
    }
}