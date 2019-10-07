function solve(input) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    let player1 = 'X';
    let player2 = 'O';
    let activePlayer = player1;
    let freeAreas = 9;
    let winner = '';
    for (let line of input) {
        let [row, column] = line.split(' ').map((n) => Number(n));
        dashboard[row][column] === false ? markPlace(row, column) : filledPlace();
        if(winner !== ''){
            break;
        }
        if(freeAreas === 0){
            console.log('The game ended! Nobody wins :(');
            break;
        }
    }
    return dashboard.map((n) => n.join('\t')).join('\n');
    function checkForWinner(row, column){
        checkForLine(...dashboard[row]);
        checkForLine(dashboard[0][column], dashboard[1][column], dashboard[2][column]);
        checkForLine(dashboard[0][0], dashboard[1][1], dashboard[2][2]);
        checkForLine(dashboard[0][2], dashboard[1][1], dashboard[2][0]);
        function checkForLine(a, b, c){
            if(a === b && b === c && b != false){
                winner = activePlayer;
                console.log(`Player ${winner} wins!`);
                return winner;
            }
        }
    }
    function filledPlace() {
        console.log('This place is already taken. Please choose another!');
    }
    function markPlace(row, column) {
        dashboard[row][column] = activePlayer;
        checkForWinner(row, column);
        freeAreas--;
        activePlayer === player1 ? activePlayer = player2 : activePlayer = player1;
    }
}
console.log(
    solve([
        "0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"
    ]));
console.log(
    solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
   ));