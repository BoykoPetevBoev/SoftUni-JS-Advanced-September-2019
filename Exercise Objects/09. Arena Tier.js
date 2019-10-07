function solve(input) {
    let gladiators = {};
    for (let line of input) {
        if (line === 'Ave Cesar') {
            break
        }
        else if (line.includes('->')) {
            addGladiator(line);
        }
        else if (line.includes('vs')) {
            removeGladiator(line);
        }
    }
    let list = sort(gladiators);
    print(list);
    function addGladiator(line) {
        let [name, technique, skill] = line.split(' -> ');
        skill = Number(skill);
        if (!gladiators.hasOwnProperty(name)) {
            gladiators[name] = {};
            gladiators[name]['totalSkill'] = 0;
        }
        if (!gladiators[name].hasOwnProperty(technique)) {
            gladiators[name][technique] = skill;
            gladiators[name]['totalSkill'] += skill;
        }
        else if (gladiators[name][technique] < skill) {
            gladiators[name]['totalSkill'] -= gladiators[name][technique];
            gladiators[name][technique] = skill;
            gladiators[name]['totalSkill'] += skill;
        }
    }
    function removeGladiator(line) {
        let [first, second] = line.split(' vs ');
        if (gladiators.hasOwnProperty(first) && gladiators.hasOwnProperty(second)) {
            for (let i in gladiators[first]) {
                if (gladiators[second].hasOwnProperty(i) && i != 'totalSkill') {
                    if (gladiators[first]['totalSkill'] > gladiators[second]['totalSkill']) {
                        delete gladiators[second];
                        break;
                    }
                    else if (gladiators[first]['totalSkill'] < gladiators[second]['totalSkill']) {
                        delete gladiators[first];
                        break;
                    }
                }
            }
        }
    }
    function sort(object) {
        let sortedList = Object.keys(object)
            .sort((a, b) => a.localeCompare(b))
            .sort((a, b) => object[b]['totalSkill'] - object[a]['totalSkill']);
        return sortedList;
    }
    function sortSkills(object) {
        let sortedSkills = Object.keys(object)
            .sort((a, b) => a.localeCompare(b))
            .sort((a, b) => object[b] - object[a]);
        return sortedSkills;
    }
    function print(sortedList) {
        for (let name of sortedList) {
            console.log(`${name}: ${gladiators[name]['totalSkill']} skill`);
            let skills = sortSkills(gladiators[name]);
            for (let j of skills) {
                if (j != 'totalSkill') {
                    console.log(`- ${j} <!> ${gladiators[name][j]}`);
                }
            }
        }
    }
}
solve([
    'a -> 1 -> 1',
    'b -> 1 -> 0',
    'a vs b',
    'Ave Cesar'
  ]);