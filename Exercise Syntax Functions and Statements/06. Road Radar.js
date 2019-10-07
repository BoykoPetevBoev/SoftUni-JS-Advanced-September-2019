function solve(input) {
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }   
    let speed = Number(input[0]);
    let area = input[1];
    if(limits[area] >= speed){
        return;
    }
    else if(speed <= (limits[area] + 20)){
        console.log('speeding');
    }
    else if(speed <= (limits[area] + 40)){
        console.log('excessive speeding');
    }
    else{
        console.log('reckless driving');
    }
}
solve([70, 'city']);
solve([21, 'residential'])
solve([120, 'interstate'])
solve([200, 'motorway'])