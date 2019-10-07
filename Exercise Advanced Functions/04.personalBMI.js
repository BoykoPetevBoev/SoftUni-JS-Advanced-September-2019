function solve(name, age, weight, height) {
    let information = {
        name,
        personalInfo: {age, weight, height},
        BMI: 0,
        status: ''
    }
    information['BMI'] = Math.round((weight * 10000) / (height * height));
    if(information['BMI'] < 18.5){
        information['status'] = 'underweight';
    }
    else if(information['BMI'] < 25){
        information['status'] = 'normal';
    }
    else if(information['BMI'] < 30){
        information['status'] = 'overweight';
    }
    else{
        information['status'] = 'obese';
        information['recommendation'] = 'admission required';
    }
    return information;
}

console.log(
    solve("Peter", 29, 75, 182)
);
