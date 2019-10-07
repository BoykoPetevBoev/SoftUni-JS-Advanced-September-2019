function add(...input) {
    const info = {};
    const result = [];
    const desc = (a, b) => info[b] - info[a];
    const pushResult = (j) => { result.push(`${j} = ${info[j]}`) };
    input.map((i) => {
        let type = typeof i;
        !info.hasOwnProperty(type) ? info[type] = 1 : info[type]++;
        return result.push(`${type}: ${i}`);
    })
    Object.keys(info).sort(desc).forEach(pushResult);
    result.forEach((el) => {
        console.log(el);
    });
}

    add('cat', 42, function () { console.log('Hello world!'); })
 