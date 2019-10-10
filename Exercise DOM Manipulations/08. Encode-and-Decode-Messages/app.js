function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName('button');
    const textArea = document.getElementsByTagName('textArea');

    buttons[0].addEventListener('click', encodeMessage);
    buttons[1].addEventListener('click', decodeMessage);

    function encodeMessage() {
        let operator = 1;
        textArea[1].textContent = generateMessage(textArea[0].value, operator);
        textArea[0].value = '';
    }
    function decodeMessage() {
        let operator = (-1);
        textArea[0].value = '';
        textArea[1].textContent =  generateMessage(textArea[1].value, operator);
    }
    function generateMessage(message, operator) {
        let newMessage = '';
        for (let i = 0; i < message.length; i++) {
            let char = message.charCodeAt(i);
            newMessage += String.fromCharCode(char += operator);
        }
        return newMessage;
    }
}
