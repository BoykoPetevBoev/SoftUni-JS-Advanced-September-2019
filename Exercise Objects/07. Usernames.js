function solve(input) {
    let result = new Set(input
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length));
    console.log([...result].join('\n'));
}

solve(['Ashton',
'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);