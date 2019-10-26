function solve() {
    const inputElem = document.getElementById('string');
    const resultElem = document.getElementById('result');
    const patternName = /( ([A-Z]{1}[A-Za-z]*)-([A-Z]{1}[A-Za-z]*).-([A-Z]{1}[A-Za-z]*) )|( ([A-Z]{1}[A-Za-z]*)-([A-Z]{1}[A-Za-z]*) )/g;
    const patternAirport = / [A-Z]{3}\/[A-Z]{3} /g;
    const patternFly = / [A-Z]{1,3}[\d]{1,5} /g;
    const patternCompany = /\- [A-Z]{1}[a-z]*[*]{1}[A-Z]{1}[a-z]* /g;
    let [firstPart, secondPart] = inputElem.value.split(',');
    secondPart = secondPart.trim()
    let name = '';
    let airport = '';
    let fly = '';
    let company = ''
    if (firstPart.match(patternName)) {
        name = firstPart.match(patternName)[0];
        while (name.includes('-')) {
            name = name.replace('-', ' ');
        }
        name = name.trim();
    }
    if (firstPart.match(patternAirport)) {
        airport = firstPart.match(patternAirport)[0].trim();
    }
    if (firstPart.match(patternFly)) {
        fly = firstPart.match(patternFly)[0].trim();
    }
    if (firstPart.match(patternCompany)) {
        company = firstPart.match(patternCompany)[0].trim();
        while (company.includes('- ')) {
            company = company.replace('- ', '');
        }
        while (company.includes('*')) {
            company = company.replace('*', ' ');
        }
        company = company.trim()
    }

    let result = ''
    if (secondPart === 'name') {
        result = `Mr/Ms, ${name}, have a nice flight!`
    } else if (secondPart === 'flight') {
        result = `Your flight number ${fly} is from ${airport.split('/')[0]} to ${airport.split('/')[1]}.`
    } else if (secondPart === 'company') {
        result = `Have a nice flight with ${company}.`
    } else if (secondPart === 'all') {
        result = `Mr/Ms, ${name}, your flight number ${fly} is from ${airport.split('/')[0]} to ${airport.split('/')[1]}. Have a nice flight with ${company}.`
    }
    let newSpanElem = document.createElement('span');
    newSpanElem.textContent = result;
    resultElem.appendChild(newSpanElem);
}