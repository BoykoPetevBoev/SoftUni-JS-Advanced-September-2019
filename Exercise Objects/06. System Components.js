function solve(input) {
    let systems = {};
    let components = {};
    let sortedSystems = [];
    for (let line of input) {
        inputInfo(line);
    }
    sortInfo(systems);
    sortInfo(components);
    printResult(systems, components);
    function inputInfo(line) {
        let [system, comp, subcomp] = line.split(' | ');
        createObjects(systems, system);
        createObjects(components, comp);
        if (!systems[system].includes(comp)) {
            systems[system].push(comp);
        }
        components[comp].push(subcomp);
        function createObjects(obj, prop) {
            if (!obj.hasOwnProperty(prop)) {
                obj[prop] = [];
            }
        }
    }
    function sortInfo(obj) {
        sortedSystems = Object.keys(systems)
            .sort((a, b) => a.localeCompare(b))
            .sort((a, b) => systems[b].length - systems[a].length);
    }
    function printResult(obj1, obj2) {
        for(let i of sortedSystems){
            console.log(i);
            systems[i].sort((a, b) => components[b].length - components[a].length);
            for(let j of systems[i]){
                console.log(`|||${j}`);
                for(let k of components[j]){
                    console.log(`||||||${k}`)
                }
            }
        }
    }
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'bambda | CoreA | A23',
    'andice | Session | Default Security'
]);