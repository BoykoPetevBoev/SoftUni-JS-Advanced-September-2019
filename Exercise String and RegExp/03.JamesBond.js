function solve() {
    let array = JSON.parse(document.getElementById('array').value);
    let result = document.getElementById('result');
    const specialKey = array.shift()
 
    let regex = new RegExp(`(\\s|^)(${specialKey}\\s+)([A-Z!#$%]{8,})(\\.|,|\\s|$)`, 'gi');
 
    array.map(str => {
        while ((match = regex.exec(str)) !== null) {
            let encodeMessage = match[3];
            if (encodeMessage.toUpperCase() !== encodeMessage) {
                continue;
            }
            let decodeMessage = decodeMessageFunc(encodeMessage);
            let message = match[1] + match[2] + decodeMessage + match[4];
            str = str.replace(match[0], message);
        }
 
        let pElement = document.createElement('p');
        pElement.textContent = str;
        result.appendChild(pElement);
    });
 
    function decodeMessageFunc(encodeMessage) {
        const symbols = ['!', '%', '#', '$'];
        const newSymbols = ['1', '2', '3', '4'];
        symbols.forEach((symbol, index) => {
            while (encodeMessage.includes(symbol)) {
                encodeMessage = encodeMessage.replace(symbol, newSymbols[index]);
            }
        });
        return encodeMessage.toLowerCase()
    }
}