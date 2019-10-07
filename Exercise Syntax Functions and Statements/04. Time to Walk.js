function solve(steps, stepLength, speed) {
    let distance = Number(steps) * Number(stepLength);
    let breakTime = Math.floor(distance / 500) * 60;
    let time = Math.round(distance / speed * 3.6 + breakTime);
    let sec = time % 60;
    let min = ((time - sec) / 60) % 60;
    let hour = ((time - sec - min * 60) / 60) % 60;
    sec = replaceZero(sec);
    min = replaceZero(min);
    hour = replaceZero(hour);
    console.log(`${hour}:${min}:${sec}`);
    function replaceZero(value){
        if(0 <= value && value <= 9){
            value = '0' + value;
        }
        return value;
    }
}
solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5)