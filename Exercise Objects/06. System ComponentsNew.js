function solve(input) {
    let systems = {};
    for (let line of input) {
        inputInfo(line);
    }
    let sortedList = sortSystems();
    printResult(sortedList);
    function inputInfo(line) {
        let [system, comp, subcomp] = line.split(' | ');
        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        }
        if (!systems[system].hasOwnProperty(comp)) {
            systems[system][comp] = [];
        }
        systems[system][comp].push(subcomp);
    }
    function sortSystems() {
        let sortedSystems = Object.keys(systems)
            .sort((a, b) => a.localeCompare(b))
            .sort((a, b) => Object.values(systems[b]).length - Object.values(systems[a]).length);
        return sortedSystems;
    }
    function sortComponents(obj) {
        let sortedComponents = Object.keys(obj)
            .sort((a, b) => obj[b].length - obj[a].length);
        return sortedComponents;
    }
    function printResult(sortedList) {
        for (let i of sortedList) {
            console.log(i);
            let sortedComponents = sortComponents(systems[i]);
            for(let j of sortedComponents){
                console.log(`|||${j}`);
                for(let k of systems[i][j]){
                    console.log(`||||||${k}`);
                }
            }
        }
    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);