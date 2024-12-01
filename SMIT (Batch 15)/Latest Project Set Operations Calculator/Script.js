function parseSet(input) {
    return new Set(input.split(',').map(item => item.trim()));
}

function performOperation(operation) {
    const setA = parseSet(document.getElementById('setA').value);
    const setB = parseSet(document.getElementById('setB').value);
    let result;

    switch (operation) {
        case 'union':
            result = new Set([...setA, ...setB]);
            break;
        case 'intersection':
            result = new Set([...setA].filter(item => setB.has(item)));
            break;
        case 'difference':
            result = new Set([...setA].filter(item => !setB.has(item)));
            break;
        case 'complement':
            const universalSet = new Set([...Array(10).keys()]); // A universal set from 0-9
            result = new Set([...universalSet].filter(item => !setA.has(item)));
            break;
        default:
            result = new Set();
    }

    document.getElementById('result').innerText = `{ ${[...result].join(', ')} }`;
}
