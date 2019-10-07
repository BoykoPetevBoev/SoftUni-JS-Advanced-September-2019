function solve() {
    let input = document.getElementById("input");
    let selectTo = document.getElementById("selectMenuTo");
    let outputResult = document.getElementById("result");

    if (input === null || selectTo === null || outputResult === null) {
        throw new Error("Missing elements!");
    }
    createOptions();

    let button = document
        .querySelector("#container > button")
        .addEventListener("click", convert);

    function createOptions() {
        let binaryOption = document.createElement("option");
        binaryOption.textContent = "Binary";
        binaryOption.value = "binary";
        selectTo.appendChild(binaryOption);
        let hexadecimalOption = document.createElement("option");
        hexadecimalOption.textContent = "Hexadecimal";
        hexadecimalOption.value = "hexadecimal";
        selectTo.appendChild(hexadecimalOption);
    }
    function convert() {
        let num = Number(input.value);
        let result;
        if (selectTo.value === "binary") {
            result = convBinary();
        }
        else if (selectTo.value === "hexadecimal") {
            result = convHexadecimal();
        }
        outputResult.value = result;
        function convBinary() {
            return (num >>> 0).toString(2)
        }
        function convHexadecimal() {
            return num.toString(16).toUpperCase();
        }
    }
}